'use client';

import { Sparkles, MapPin, PackageOpen } from 'lucide-react';
import { bboxStyle, pointStyle } from '@/lib/hotspots';
import type { Hotspot } from '@/types/citygraph';

interface HotspotLayerProps {
  hotspots: Hotspot[];
  onHotspot: (hotspot: Hotspot) => void;
}

export function HotspotLayer({ hotspots, onHotspot }: HotspotLayerProps) {
  return (
    <div className="absolute inset-0 z-20">
      {hotspots.map((hotspot) => {
        const style = hotspot.point
          ? pointStyle(hotspot.point)
          : hotspot.bbox
            ? bboxStyle(hotspot.bbox)
            : undefined;

        if (!style) {
          return null;
        }

        const Icon =
          hotspot.type === 'generative-edge'
            ? Sparkles
            : hotspot.type === 'artifact'
              ? PackageOpen
              : MapPin;

        return (
          <button
            key={hotspot.id}
            type="button"
            aria-label={hotspot.label}
            title={hotspot.tooltip ?? hotspot.label}
            onClick={() => onHotspot(hotspot)}
            className={`group absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-[#5d3d27]/25 bg-paper/88 px-2.5 py-2 text-xs font-semibold text-ink shadow-pin backdrop-blur-md transition hover:z-30 hover:scale-105 hover:border-terracotta/70 hover:bg-white ${
              hotspot.type === 'generative-edge' ? 'pin-pulse' : ''
            }`}
            style={style}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${
                hotspot.type === 'generative-edge'
                  ? 'bg-plum'
                  : hotspot.type === 'artifact'
                    ? 'bg-saffron'
                    : 'bg-terracotta'
              }`}
            >
              <Icon size={15} strokeWidth={2.4} />
            </span>
            <span className="hidden max-w-32 whitespace-nowrap pr-1 md:inline">
              {hotspot.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
