import type { Artifact } from '@/types/citygraph';
import Image from 'next/image';

interface ArtifactCardProps {
  artifact: Artifact;
  compact?: boolean;
}

export function ArtifactCard({ artifact, compact = false }: ArtifactCardProps) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-[#5d3d27]/18 bg-paper shadow-[0_14px_30px_rgba(76,48,31,0.12)]">
      {artifact.image ? (
        <div className="relative h-28 border-b border-[#5d3d27]/12 bg-ivory">
          <Image
            src={artifact.image}
            alt=""
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className={compact ? 'p-3' : 'p-4'}>
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-harbor">
          {artifact.category}
        </p>
        <h3 className="mt-1 font-display text-lg leading-tight text-ink">{artifact.title}</h3>
        {!compact ? (
          <p className="mt-2 text-sm leading-6 text-ink/70">{artifact.description}</p>
        ) : null}
      </div>
    </article>
  );
}
