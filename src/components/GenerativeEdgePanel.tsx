'use client';

import { FormEvent, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { generateEdgeBranch } from '@/lib/generation';
import type { CityNode, Hotspot } from '@/types/citygraph';

interface GenerativeEdgePanelProps {
  parentNode: CityNode;
  hotspot: Hotspot;
  onClose: () => void;
  onOpenBranch: (nodeId: string) => void;
}

export function GenerativeEdgePanel({
  parentNode,
  hotspot,
  onClose,
  onOpenBranch
}: GenerativeEdgePanelProps) {
  const [prompt, setPrompt] = useState(hotspot.prompt ?? '');
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsGenerating(true);

    const branch = await generateEdgeBranch({
      parentNodeId: parentNode.id,
      prompt
    });

    setIsGenerating(false);
    onOpenBranch(branch.id);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/30 p-3 backdrop-blur-sm md:items-center">
      <form
        onSubmit={handleSubmit}
        className="panel-enter w-full max-w-2xl rounded-[8px] border border-[#5d3d27]/20 bg-paper p-5 shadow-[0_30px_90px_rgba(38,28,20,0.35)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-plum text-white">
              <Sparkles size={20} />
            </span>
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-plum">
                Generative edge
              </p>
              <h2 className="mt-1 font-display text-3xl leading-tight text-ink">
                {hotspot.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink/68">
                Attached to {parentNode.title}. Demo mode opens a pre-generated
                fallback branch; the same interface can call an AI backend later.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            title="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#5d3d27]/18 bg-white/60 text-ink hover:border-terracotta/60"
          >
            <X size={17} />
          </button>
        </div>

        <label className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
          Branch prompt
        </label>
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="mt-2 min-h-28 w-full resize-none rounded-[8px] border border-[#5d3d27]/20 bg-white/70 p-3 text-sm leading-6 text-ink outline-none transition focus:border-plum/70"
        />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-[8px] border border-[#5d3d27]/20 bg-white/60 px-4 text-sm font-bold text-ink hover:border-terracotta/60"
          >
            Close
          </button>
          <button
            type="submit"
            disabled={isGenerating}
            className="h-11 rounded-[8px] bg-plum px-4 text-sm font-bold text-white shadow-atlas transition hover:bg-[#573f5c] disabled:cursor-wait disabled:opacity-70"
          >
            {isGenerating ? 'Opening branch...' : 'Open edge branch'}
          </button>
        </div>
      </form>
    </div>
  );
}
