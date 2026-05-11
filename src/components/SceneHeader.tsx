'use client';

import { ArrowLeft, Compass, RotateCcw } from 'lucide-react';
import type { CityNode } from '@/types/citygraph';

interface SceneHeaderProps {
  breadcrumb: CityNode[];
  canGoBack: boolean;
  onBack: () => void;
  onRoot: () => void;
  onReset: () => void;
}

export function SceneHeader({
  breadcrumb,
  canGoBack,
  onBack,
  onRoot,
  onReset
}: SceneHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-[8px] border border-[#5d3d27]/18 bg-paper/72 p-4 shadow-atlas backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-ink text-paper">
            <Compass size={21} />
          </span>
          <div>
            <h1 className="font-display text-3xl leading-none text-ink md:text-5xl">
              IsoFlip Barcelona
            </h1>
            <p className="mt-1 text-sm text-ink/65">
              A semi-open isometric city mirror world
            </p>
          </div>
        </div>
        <nav className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/56">
          {breadcrumb.map((node, index) => (
            <span key={node.id} className="flex items-center gap-2">
              <span>{node.title}</span>
              {index < breadcrumb.length - 1 ? <span className="text-terracotta">/</span> : null}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          title="Back"
          className="flex h-10 items-center gap-2 rounded-[8px] border border-[#5d3d27]/20 bg-white/60 px-3 text-sm font-bold text-ink transition hover:border-terracotta/60 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          type="button"
          onClick={onRoot}
          title="Return to Barcelona"
          className="flex h-10 items-center gap-2 rounded-[8px] bg-terracotta px-3 text-sm font-bold text-white shadow-atlas transition hover:bg-[#a94b34]"
        >
          <Compass size={16} />
          City
        </button>
        <button
          type="button"
          onClick={onReset}
          title="Reset trail and collection"
          className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#5d3d27]/20 bg-white/60 text-ink transition hover:border-terracotta/60"
        >
          <RotateCcw size={16} />
        </button>
      </div>
    </header>
  );
}
