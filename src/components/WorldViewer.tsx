'use client';

import { HotspotLayer } from '@/components/HotspotLayer';
import type { CityNode, Hotspot } from '@/types/citygraph';
import Image from 'next/image';

interface WorldViewerProps {
  node: CityNode;
  onHotspot: (hotspot: Hotspot) => void;
}

export function WorldViewer({ node, onHotspot }: WorldViewerProps) {
  return (
    <section className="scene-shell min-h-[430px] rounded-[8px] lg:min-h-[620px]">
      <div className="absolute left-5 top-5 z-10 max-w-[70%] rounded-[8px] border border-[#5d3d27]/15 bg-paper/80 px-4 py-3 shadow-atlas backdrop-blur-md">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-terracotta">
          {node.type}
        </p>
        <h2 className="mt-1 font-display text-2xl leading-tight text-ink md:text-4xl">
          {node.title}
        </h2>
        {node.subtitle ? (
          <p className="mt-1 max-w-xl text-sm leading-5 text-ink/70">{node.subtitle}</p>
        ) : null}
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center p-6 pt-24 md:p-10 md:pt-28">
        {node.image ? (
          <div className="relative h-full max-h-[560px] w-full max-w-[980px] drop-shadow-[0_28px_28px_rgba(72,45,27,0.18)]">
            <Image
              src={node.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 980px, 92vw"
              className="object-contain"
              priority={node.id === 'barcelona.overview'}
            />
          </div>
        ) : (
          <div className="h-[66%] w-[74%] rotate-[-3deg] rounded-[8px] border border-dashed border-[#5d3d27]/30 bg-ivory/70" />
        )}
      </div>

      <div className="absolute bottom-5 left-5 z-10 max-w-md rounded-[8px] border border-[#5d3d27]/15 bg-paper/82 px-4 py-3 text-sm leading-6 text-ink/76 shadow-atlas backdrop-blur-md">
        {node.description}
      </div>

      <HotspotLayer hotspots={node.hotspots ?? []} onHotspot={onHotspot} />
    </section>
  );
}
