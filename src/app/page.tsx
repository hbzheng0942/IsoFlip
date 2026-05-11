'use client';

import { useEffect, useMemo, useState } from 'react';
import { Building2, Layers3, MapPinned } from 'lucide-react';
import { CollectionDrawer } from '@/components/CollectionDrawer';
import { GenerativeEdgePanel } from '@/components/GenerativeEdgePanel';
import { SceneHeader } from '@/components/SceneHeader';
import { TrailPanel } from '@/components/TrailPanel';
import { WorldViewer } from '@/components/WorldViewer';
import { cityGraph, getBreadcrumb, getNodeOrRoot } from '@/lib/cityGraph';
import {
  readGeneratedBranches,
  readTrail,
  readUnlockedArtifacts,
  resetIsoFlipStorage,
  writeGeneratedBranches,
  writeTrail,
  writeUnlockedArtifacts
} from '@/lib/storage';
import type { Hotspot } from '@/types/citygraph';

export default function Home() {
  const [currentNodeId, setCurrentNodeId] = useState(cityGraph.rootNodeId);
  const [history, setHistory] = useState<string[]>([cityGraph.rootNodeId]);
  const [trail, setTrail] = useState<string[]>([cityGraph.rootNodeId]);
  const [unlockedArtifacts, setUnlockedArtifacts] = useState<string[]>([]);
  const [generatedBranches, setGeneratedBranches] = useState<string[]>([]);
  const [activeEdgeHotspot, setActiveEdgeHotspot] = useState<Hotspot | null>(null);

  const currentNode = getNodeOrRoot(currentNodeId);
  const breadcrumb = useMemo(() => getBreadcrumb(currentNode.id), [currentNode.id]);

  useEffect(() => {
    const storedTrail = readTrail();
    const storedArtifacts = readUnlockedArtifacts();
    const storedBranches = readGeneratedBranches();

    if (storedTrail.length) {
      setTrail(storedTrail);
      setHistory(storedTrail);
      setCurrentNodeId(storedTrail[storedTrail.length - 1]);
    }

    setUnlockedArtifacts(storedArtifacts);
    setGeneratedBranches(storedBranches);
  }, []);

  useEffect(() => {
    const nodeArtifactIds = currentNode.artifactIds ?? [];

    if (!nodeArtifactIds.length) {
      return;
    }

    setUnlockedArtifacts((previous) => {
      const next = Array.from(new Set([...previous, ...nodeArtifactIds]));
      writeUnlockedArtifacts(next);
      return next;
    });
  }, [currentNode.id, currentNode.artifactIds]);

  function enterNode(nodeId: string, options?: { replace?: boolean }) {
    const target = getNodeOrRoot(nodeId);

    setCurrentNodeId(target.id);
    setTrail((previous) => {
      const next = [...previous, target.id];
      writeTrail(next);
      return next;
    });

    setHistory((previous) => {
      if (options?.replace) {
        const next = [...previous.slice(0, -1), target.id];
        writeTrail(next);
        return next;
      }

      return [...previous, target.id];
    });
  }

  function handleHotspot(hotspot: Hotspot) {
    if (hotspot.type === 'navigate' && hotspot.targetNodeId) {
      enterNode(hotspot.targetNodeId);
      return;
    }

    if (hotspot.type === 'artifact' && hotspot.artifactId) {
      setUnlockedArtifacts((previous) => {
        const next = Array.from(new Set([...previous, hotspot.artifactId as string]));
        writeUnlockedArtifacts(next);
        return next;
      });
      return;
    }

    if (hotspot.type === 'generative-edge') {
      setActiveEdgeHotspot(hotspot);
    }
  }

  function handleBack() {
    setHistory((previous) => {
      if (previous.length <= 1) {
        return previous;
      }

      const next = previous.slice(0, -1);
      setCurrentNodeId(next[next.length - 1]);
      return next;
    });
  }

  function handleRoot() {
    enterNode(cityGraph.rootNodeId);
  }

  function handleReset() {
    resetIsoFlipStorage();
    setCurrentNodeId(cityGraph.rootNodeId);
    setHistory([cityGraph.rootNodeId]);
    setTrail([cityGraph.rootNodeId]);
    setUnlockedArtifacts([]);
    setGeneratedBranches([]);
    setActiveEdgeHotspot(null);
  }

  function handleOpenBranch(nodeId: string) {
    setGeneratedBranches((previous) => {
      const next = Array.from(new Set([...previous, nodeId]));
      writeGeneratedBranches(next);
      return next;
    });
    setActiveEdgeHotspot(null);
    enterNode(nodeId);
  }

  function handleJump(nodeId: string) {
    enterNode(nodeId);
  }

  return (
    <main className="atlas-grain min-h-screen px-3 py-4 md:px-6 md:py-6">
      <div className="mx-auto grid max-w-[1500px] gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          <SceneHeader
            breadcrumb={breadcrumb}
            canGoBack={history.length > 1}
            onBack={handleBack}
            onRoot={handleRoot}
            onReset={handleReset}
          />
          <WorldViewer node={currentNode} onHotspot={handleHotspot} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
          <aside className="rounded-[8px] border border-[#5d3d27]/18 bg-paper/78 p-4 shadow-atlas backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-[8px] bg-white/52 p-3">
                <MapPinned className="mx-auto text-terracotta" size={19} />
                <p className="mt-2 text-2xl font-bold text-ink">{Object.keys(cityGraph.nodes).length}</p>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink/45">
                  Nodes
                </p>
              </div>
              <div className="rounded-[8px] bg-white/52 p-3">
                <Building2 className="mx-auto text-harbor" size={19} />
                <p className="mt-2 text-2xl font-bold text-ink">{trail.length}</p>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink/45">
                  Trail
                </p>
              </div>
              <div className="rounded-[8px] bg-white/52 p-3">
                <Layers3 className="mx-auto text-plum" size={19} />
                <p className="mt-2 text-2xl font-bold text-ink">{generatedBranches.length}</p>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink/45">
                  Edges
                </p>
              </div>
            </div>
          </aside>

          <TrailPanel
            trailNodeIds={trail}
            currentNodeId={currentNode.id}
            onJump={handleJump}
          />
          <CollectionDrawer unlockedArtifactIds={unlockedArtifacts} />
        </div>
      </div>

      {activeEdgeHotspot ? (
        <GenerativeEdgePanel
          parentNode={currentNode}
          hotspot={activeEdgeHotspot}
          onClose={() => setActiveEdgeHotspot(null)}
          onOpenBranch={handleOpenBranch}
        />
      ) : null}
    </main>
  );
}
