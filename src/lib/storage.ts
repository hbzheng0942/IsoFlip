const TRAIL_KEY = 'isoflip.trail.v1';
const ARTIFACTS_KEY = 'isoflip.artifacts.v1';
const BRANCHES_KEY = 'isoflip.generatedBranches.v1';

function readStringArray(key: string): string[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const value = window.localStorage.getItem(key);
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function writeStringArray(key: string, value: string[]) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(Array.from(new Set(value))));
}

export function readTrail(): string[] {
  return readStringArray(TRAIL_KEY);
}

export function writeTrail(nodeIds: string[]) {
  writeStringArray(TRAIL_KEY, nodeIds);
}

export function readUnlockedArtifacts(): string[] {
  return readStringArray(ARTIFACTS_KEY);
}

export function writeUnlockedArtifacts(artifactIds: string[]) {
  writeStringArray(ARTIFACTS_KEY, artifactIds);
}

export function readGeneratedBranches(): string[] {
  return readStringArray(BRANCHES_KEY);
}

export function writeGeneratedBranches(nodeIds: string[]) {
  writeStringArray(BRANCHES_KEY, nodeIds);
}

export function resetIsoFlipStorage() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(TRAIL_KEY);
  window.localStorage.removeItem(ARTIFACTS_KEY);
  window.localStorage.removeItem(BRANCHES_KEY);
}
