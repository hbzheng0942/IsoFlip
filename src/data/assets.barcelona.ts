import type { GeneratedBranchAsset } from '@/types/citygraph';

export const isoFlipStylePin =
  'hand-drawn Mediterranean isometric architectural atlas, warm ivory paper, terracotta roof planes, Mediterranean blue shadows, muted cypress green, fine ink outlines, soft watercolor texture, axonometric 2.5D city miniature, elegant and not childish';

export interface SceneAssetPrompt {
  assetId: string;
  nodeId: string;
  image: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
  prompt: string;
  stylePin: string;
  generationMode: 'static-fallback' | 'ai-generated-candidate';
}

export const sceneAssetPrompts: SceneAssetPrompt[] = [
  {
    assetId: 'overview',
    nodeId: 'barcelona.overview',
    image: '/assets/barcelona/overview.svg',
    aspectRatio: '16:9',
    generationMode: 'static-fallback',
    stylePin: isoFlipStylePin,
    prompt:
      'Wide isometric miniature map of Barcelona: Eixample grid with chamfered blocks, Gothic Quarter stone cluster, Park Guell hillside, La Rambla market axis, Barceloneta coastline, small landmark anchors, no large text.'
  },
  {
    assetId: 'sagrada-exterior',
    nodeId: 'landmark.sagrada_familia',
    image: '/assets/barcelona/sagrada-exterior.svg',
    aspectRatio: '16:9',
    generationMode: 'static-fallback',
    stylePin: isoFlipStylePin,
    prompt:
      'Isometric exterior scene of Sagrada Familia as a miniature basilica with branching towers, cranes, warm stone, Eixample blocks around it, fine architectural annotations without readable text.'
  },
  {
    assetId: 'sagrada-cutaway',
    nodeId: 'scene.sagrada_cutaway',
    image: '/assets/barcelona/sagrada-cutaway.svg',
    aspectRatio: '16:9',
    generationMode: 'static-fallback',
    stylePin: isoFlipStylePin,
    prompt:
      'Axonometric cutaway of Sagrada Familia interior: branching columns, colored stained-glass light, tower shafts, model-like section drawing, warm ivory paper background.'
  },
  {
    assetId: 'edge-gaudi-workshop',
    nodeId: 'edge.gaudi_workshop_generated',
    image: '/assets/barcelona/edge-gaudi-workshop.svg',
    aspectRatio: '16:9',
    generationMode: 'ai-generated-candidate',
    stylePin: isoFlipStylePin,
    prompt:
      'Graph-constrained generated branch from Sagrada Familia: isometric Gaudi workshop cutaway, hanging chain models, plaster maquettes, drafting tables, warm afternoon Barcelona light.'
  },
  {
    assetId: 'edge-market-stall',
    nodeId: 'edge.market_stall_generated',
    image: '/assets/barcelona/edge-market-stall.svg',
    aspectRatio: '16:9',
    generationMode: 'ai-generated-candidate',
    stylePin: isoFlipStylePin,
    prompt:
      'Graph-constrained generated branch from La Boqueria: isometric market stall with striped awnings, fruit pyramids, hand-lettered sign shapes, warm indoor market light.'
  }
];

export function getSceneAssetPrompt(nodeId: string): SceneAssetPrompt | undefined {
  return sceneAssetPrompts.find((asset) => asset.nodeId === nodeId);
}

export function getGeneratedAssetByParent(
  assets: GeneratedBranchAsset[],
  parentNodeId: string
) {
  return assets.find((asset) => asset.parentNodeId === parentNodeId);
}
