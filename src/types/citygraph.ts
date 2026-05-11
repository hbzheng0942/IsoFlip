export type CityNodeType =
  | 'city'
  | 'district'
  | 'landmark'
  | 'scene'
  | 'cutaway'
  | 'detail'
  | 'artifact'
  | 'edge';

export type HotspotType = 'navigate' | 'artifact' | 'generative-edge';

export type ArtifactCategory =
  | 'architecture'
  | 'urbanism'
  | 'material'
  | 'history'
  | 'street-life';

export interface Hotspot {
  id: string;
  label: string;
  targetNodeId?: string;
  type: HotspotType;
  point?: [number, number];
  bbox?: [number, number, number, number];
  tooltip?: string;
  artifactId?: string;
  prompt?: string;
}

export interface CityNode {
  id: string;
  type: CityNodeType;
  title: string;
  subtitle?: string;
  parentId?: string;
  image?: string;
  description?: string;
  children?: string[];
  hotspots?: Hotspot[];
  artifactIds?: string[];
  isCanonical: boolean;
  isGenerativeEdge?: boolean;
}

export interface Artifact {
  id: string;
  title: string;
  category: ArtifactCategory;
  image?: string;
  description: string;
  unlockedByNodeId: string;
}

export interface CityGraph {
  rootNodeId: string;
  nodes: Record<string, CityNode>;
  artifacts: Record<string, Artifact>;
}

export interface GeneratedBranchAsset {
  assetId: string;
  parentNodeId: string;
  prompt: string;
  stylePin: string;
  model: string;
  seed: string;
  revision: number;
  image: string;
}
