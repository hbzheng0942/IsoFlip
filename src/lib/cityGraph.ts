import { barcelonaGraph } from '@/data/citygraph.barcelona';
import type { Artifact, CityGraph, CityNode } from '@/types/citygraph';

export const cityGraph: CityGraph = barcelonaGraph;

export function getNode(nodeId: string): CityNode {
  const node = cityGraph.nodes[nodeId];

  if (!node) {
    throw new Error(`CityGraph node not found: ${nodeId}`);
  }

  return node;
}

export function getNodeOrRoot(nodeId?: string): CityNode {
  if (!nodeId || !cityGraph.nodes[nodeId]) {
    return getNode(cityGraph.rootNodeId);
  }

  return getNode(nodeId);
}

export function getArtifact(artifactId: string): Artifact {
  const artifact = cityGraph.artifacts[artifactId];

  if (!artifact) {
    throw new Error(`Artifact not found: ${artifactId}`);
  }

  return artifact;
}

export function getChildren(node: CityNode): CityNode[] {
  return (node.children ?? []).map(getNode);
}

export function getParent(node: CityNode): CityNode | undefined {
  return node.parentId ? cityGraph.nodes[node.parentId] : undefined;
}

export function getBreadcrumb(nodeId: string): CityNode[] {
  const trail: CityNode[] = [];
  let current = getNodeOrRoot(nodeId);

  while (current) {
    trail.unshift(current);

    if (!current.parentId) {
      break;
    }

    current = getNode(current.parentId);
  }

  return trail;
}

export function getNodeArtifacts(node: CityNode): Artifact[] {
  return (node.artifactIds ?? []).map(getArtifact);
}

export function findNodeByUnlockedArtifact(artifactId: string): CityNode | undefined {
  const artifact = cityGraph.artifacts[artifactId];
  return artifact ? cityGraph.nodes[artifact.unlockedByNodeId] : undefined;
}

export function getAllArtifacts(): Artifact[] {
  return Object.values(cityGraph.artifacts);
}
