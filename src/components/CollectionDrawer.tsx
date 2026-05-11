'use client';

import { BookOpen, PackageOpen } from 'lucide-react';
import { ArtifactCard } from '@/components/ArtifactCard';
import { getAllArtifacts, getArtifact } from '@/lib/cityGraph';

interface CollectionDrawerProps {
  unlockedArtifactIds: string[];
}

export function CollectionDrawer({ unlockedArtifactIds }: CollectionDrawerProps) {
  const unlocked = unlockedArtifactIds.map(getArtifact);
  const total = getAllArtifacts().length;

  return (
    <aside className="rounded-[8px] border border-[#5d3d27]/18 bg-paper/78 p-4 shadow-atlas backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-saffron text-white">
            <PackageOpen size={17} />
          </span>
          <h2 className="font-display text-xl text-ink">Collection</h2>
        </div>
        <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-bold text-paper">
          {unlocked.length}/{total}
        </span>
      </div>

      <div className="atlas-scrollbar mt-4 max-h-[420px] space-y-3 overflow-auto pr-1">
        {unlocked.length ? (
          unlocked.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} compact />
          ))
        ) : (
          <div className="rounded-[8px] border border-dashed border-[#5d3d27]/26 bg-white/42 p-5 text-center text-sm text-ink/58">
            <BookOpen className="mx-auto mb-3 text-terracotta" size={24} />
            Artifacts will appear here.
          </div>
        )}
      </div>
    </aside>
  );
}
