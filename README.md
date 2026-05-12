# IsoFlip Barcelona

IsoFlip is an AI-native, semi-open isometric city mirror world. The first demo city is Barcelona: users explore a miniature 2.5D city atlas, enter landmarks, open cutaway scenes, unlock architecture cards, and trigger a small number of graph-constrained generative edge branches.

This v0.1 build is a static GitHub Pages demo. The core world is stable and local; AI generation is represented through pre-generated/static fallback assets plus prompt metadata that can later feed a real backend.

## Core Loop

```text
World Map -> Landmark Scene -> Cutaway / Detail -> Artifact / Edge Branch
```

IsoFlip is not a travel guide and not a level-based game. The product language is spatial: enter, return to city, explore landmark, unlock artifact, open edge branch, trail, CityGraph.

## Why Barcelona

Barcelona gives the demo a compact but rich first city graph: the Eixample grid, Gothic Quarter, Sagrada Familia, Casa Batllo, Park Guell, La Rambla, La Boqueria, and Barceloneta each create different exploration surfaces while still belonging to one recognizable city model.

## Architecture

```text
src/
  app/
    page.tsx
  components/
    WorldViewer.tsx
    HotspotLayer.tsx
    SceneHeader.tsx
    TrailPanel.tsx
    CollectionDrawer.tsx
    ArtifactCard.tsx
    GenerativeEdgePanel.tsx
  data/
    assets.barcelona.ts
    citygraph.barcelona.ts
  lib/
    cityGraph.ts
    generation.ts
    hotspots.ts
    storage.ts
  types/
    citygraph.ts
public/
  assets/barcelona/
```

## CityGraph

The canonical graph is defined in `src/data/citygraph.barcelona.ts`. All navigation goes through graph node IDs rather than hard-coded scene routing.

Node levels:

```text
L0 City Overview
L1 District / Urban Zone
L2 Landmark
L3 Landmark Scene
L4 Cutaway / Interior / Activity Scene
L5 Artifact / Collectible Card
L6 Generative Edge Branch
```

To add a new node:

1. Add a `CityNode` entry to `barcelonaGraph.nodes`.
2. Attach it to a parent via `parentId`.
3. Add its ID to the parent node's `children`.
4. Add a `navigate` hotspot on the parent if it should be directly clickable.
5. Add or replace the scene asset in `public/assets/barcelona/`.

To add an artifact:

1. Add an `Artifact` entry to `barcelonaGraph.artifacts`.
2. Add the artifact ID to a node's `artifactIds`, or create an `artifact` hotspot.
3. Set `unlockedByNodeId` to the canonical node that unlocks it.

## Visual Asset Route

v0.1 uses local SVG assets to keep the demo static and GitHub Pages-compatible. Each major scene also has prompt metadata in `src/data/assets.barcelona.ts`.

The route is inspired by openflipbook but constrained for IsoFlip:

```text
CityGraph parent node
-> stable scene prompt + style pin
-> static generated candidate asset
-> normalized hotspots
-> optional edge branch attached back to parent
```

Style pin:

```text
hand-drawn Mediterranean isometric architectural atlas,
warm ivory paper, terracotta roof planes, Mediterranean blue shadows,
muted cypress green, fine ink outlines, soft watercolor texture,
axonometric 2.5D city miniature, elegant and not childish
```

The current SVGs are replaceable fallbacks. The next asset pass can generate PNG/WebP bitmap scenes from the stored prompts without changing the interaction layer.

## Reference Patterns

openflipbook patterns adapted:

- image-as-UI
- normalized click coordinates
- style pin / style anchor
- trail/history
- branch beacons
- future VLM click resolving
- future provider abstraction for image generation

isomiddleearth patterns adapted:

- isometric coordinate mindset
- static asset folders
- collection/map JSON structure
- future tile/grid editable city packs
- GitHub Pages-friendly static output

## Generative Edge Branches

v0.1 does not call a real AI backend from the browser. Edge points open `GenerativeEdgePanel`, show the branch prompt, and return a deterministic static fallback node from `src/lib/generation.ts`.

Current edge branches:

- `edge.gaudi_workshop_generated`
- `edge.market_stall_generated`

Future backend route:

```text
GenerativeEdgePanel
-> prompt planner
-> image generation provider
-> asset storage
-> generated CityNode persistence
-> attach branch to canonical parent
```

GitHub Pages cannot safely store provider API keys, so real generation should be added through a hosted backend such as Next.js API routes on Vercel, Cloudflare Workers, Modal, or a small FastAPI service.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

`npm run build` exports the static site to `out/`.

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. After pushing to `main`, enable Pages with GitHub Actions as the source.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/${{ github.event.repository.name }}` so project Pages paths such as `https://USER.github.io/IsoFlip/` load static assets correctly. Local development leaves the base path empty.
