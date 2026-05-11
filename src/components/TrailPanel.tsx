'use client';

import { Route } from 'lucide-react';
import { getNodeOrRoot } from '@/lib/cityGraph';

interface TrailPanelProps {
  trailNodeIds: string[];
  currentNodeId: string;
  onJump: (nodeId: string) => void;
}

export function TrailPanel({ trailNodeIds, currentNodeId, onJump }: TrailPanelProps) {
  const trail = trailNodeIds.map(getNodeOrRoot);

  return (
    <aside className="rounded-[8px] border border-[#5d3d27]/18 bg-paper/78 p-4 shadow-atlas backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-harbor text-white">
          <Route size={17} />
        </span>
        <h2 className="font-display text-xl text-ink">Trail</h2>
      </div>

      <div className="atlas-scrollbar mt-4 max-h-[260px] space-y-2 overflow-auto pr-1">
        {trail.map((node, index) => (
          <button
            key={`${node.id}-${index}`}
            type="button"
            onClick={() => onJump(node.id)}
            className={`flex w-full items-center justify-between rounded-[8px] border px-3 py-2 text-left text-sm transition ${
              node.id === currentNodeId
                ? 'border-terracotta/60 bg-terracotta/10 text-ink'
                : 'border-[#5d3d27]/12 bg-white/46 text-ink/70 hover:border-harbor/50'
            }`}
          >
            <span className="font-semibold">{node.title}</span>
            <span className="text-[0.62rem] uppercase tracking-[0.14em] text-ink/45">
              {node.type}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
