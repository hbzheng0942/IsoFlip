import type { Hotspot } from '@/types/citygraph';

export function pointStyle(point: [number, number]) {
  return {
    left: `${point[0]}%`,
    top: `${point[1]}%`
  };
}

export function bboxStyle(bbox: [number, number, number, number]) {
  return {
    left: `${bbox[0]}%`,
    top: `${bbox[1]}%`,
    width: `${bbox[2]}%`,
    height: `${bbox[3]}%`
  };
}

export function hotspotHasTarget(hotspot: Hotspot): boolean {
  return Boolean(hotspot.targetNodeId || hotspot.artifactId);
}
