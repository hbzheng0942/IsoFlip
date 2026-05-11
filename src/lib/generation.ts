import { generatedBranchAssets } from '@/data/citygraph.barcelona';
import type { CityNode } from '@/types/citygraph';

export async function generateEdgeBranch(input: {
  parentNodeId: string;
  prompt: string;
}): Promise<CityNode> {
  const asset = generatedBranchAssets.find(
    (branchAsset) => branchAsset.parentNodeId === input.parentNodeId
  );

  await new Promise((resolve) => window.setTimeout(resolve, 650));

  if (!asset) {
    return {
      id: `edge.generated.${input.parentNodeId.replaceAll('.', '_')}`,
      type: 'edge',
      title: 'Generated Edge Branch',
      subtitle: 'Static demo branch',
      parentId: input.parentNodeId,
      description:
        'A deterministic fallback node returned by the v0.1 generation abstraction.',
      isCanonical: false,
      isGenerativeEdge: true
    };
  }

  const title =
    asset.assetId === 'edge-gaudi-workshop'
      ? 'Generated Gaudi Workshop'
      : 'Generated Market Stall';

  return {
    id:
      asset.assetId === 'edge-gaudi-workshop'
        ? 'edge.gaudi_workshop_generated'
        : 'edge.market_stall_generated',
    type: 'edge',
    title,
    subtitle: 'Static AI-generated fallback branch',
    parentId: input.parentNodeId,
    image: asset.image,
    description:
      'Demo mode opens a pre-generated branch attached to the canonical CityGraph. The same API can later call an openflipbook-style image generation backend.',
    isCanonical: false,
    isGenerativeEdge: true
  };
}
