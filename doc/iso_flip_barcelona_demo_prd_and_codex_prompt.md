# IsoFlip Barcelona Demo — PRD & Codex Development Prompt

## 0. Product One-liner

**IsoFlip is an AI-native, semi-open isometric city mirror world.**  
Users explore a stylized miniature version of a real city by moving through world map, landmark scenes, and architectural cutaways. The demo starts with Barcelona as a stable, curated city graph, while allowing a small number of AI-generated edge branches to grow from canonical nodes.

---

# Part A｜正式 PRD

## 1. Product Positioning

### 1.1 Product Name
**IsoFlip**

### 1.2 Demo Scope
**Barcelona-only GitHub Pages demo**

### 1.3 Core Concept
IsoFlip is not a city illustration gallery and not a level-based game. It is a **living isometric city mirror world**: a visually beautiful, semi-open, explorable miniature city built from real urban and architectural references.

The first demo presents Barcelona as a curated world map with iconic districts and landmarks. Users click into architectural scenes and cutaways, collect building knowledge cards, and trigger limited generative branches at selected edge points.

### 1.4 Product Keywords
- AI-native open-world exploration
- Isometric city mirror world
- Architecture and street discovery
- Landmark and cutaway atlas
- Stable city graph + generative edge growth
- GitHub Pages demo

---

## 2. Product Goals

### 2.1 Demo Goal
Build a polished, interactive Barcelona prototype that demonstrates the core loop:

```text
World Map → Landmark Scene → Cutaway Scene → Collectible Card / Generative Edge Branch
```

### 2.2 User Experience Goal
Users should feel like they are exploring a miniature, alive, beautifully illustrated version of Barcelona — closer to a calm open-world “Minecraft-like” city mirror than a traditional travel guide.

### 2.3 Technical Goal
Reuse concepts from:

1. **openflipbook**: image-as-UI, click-to-explore, VLM click resolving, style pin, trail/history, generated branches.
2. **isomiddleearth**: isometric canvas, tile/grid world representation, JSON import/export, collections structure, GitHub Pages-friendly visual builder logic.

For the first demo, prioritize a stable front-end experience with static/canonical Barcelona content. Generative branches can be stubbed or routed through an API abstraction so they can be enabled later.

---

## 3. Target Users

### 3.1 Primary Users
- City, architecture, and map lovers
- Visual exploration product enthusiasts
- People who enjoy cozy open-world maps, isometric worlds, and collectible atlases

### 3.2 Demo Audience
- GitHub visitors
- Product/AI portfolio reviewers
- Creative technologists
- Open-source contributors interested in building additional city packs

---

## 4. Core Product Principles

### 4.1 World, Not Pages
Use “world / place / scene / cutaway / artifact” language instead of “page”. The product should feel spatial rather than slideshow-like.

### 4.2 Canonical First, Generative Second
Barcelona must have a stable basic city tree. Generative content should grow only from approved edge points and must be attached back to a canonical parent node.

### 4.3 Semi-open Exploration
The user can freely click highlighted entry points, but only selected nodes support generative expansion in the demo.

### 4.4 Architectural Atlas Style
The visual system should follow a consistent hand-drawn isometric architectural atlas style: warm, detailed, elegant, slightly playful, but not childish.

### 4.5 Open-source Growth
The architecture should support future community-contributed city packs through JSON-based city graph files and asset folders.

---

## 5. Demo Product Scope

### 5.1 In Scope
- Barcelona city overview world map
- 5 core districts / urban zones
- 8–10 canonical landmarks
- 3 primary landmark scenes
- 2 cutaway scenes
- Collectible cards
- Exploration trail / visited path
- Static GitHub Pages deployment
- CityGraph JSON data model
- Limited generative edge placeholders

### 5.2 Out of Scope for Demo v0.1
- Full AI backend deployment
- Real-time multiplayer
- Full 3D reconstruction
- Procedural infinite city generation
- User accounts
- Payments
- Heavy RPG systems
- Complex physics or pathfinding

---

## 6. Core User Flow

### 6.1 Main Flow
```text
Open IsoFlip Barcelona
→ See isometric Barcelona world map
→ Hover/click visible hotspots
→ Enter landmark scene
→ Click architectural detail
→ Enter cutaway scene or unlock card
→ Return to world map or continue trail
→ Share GitHub Pages link
```

### 6.2 Generative Edge Flow
```text
User enters canonical scene
→ Clicks an approved “edge point”
→ System opens a generated-branch modal or placeholder
→ Branch is attached to canonical parent node
→ User can save it as part of exploration trail
```

In demo v0.1, generative branch can be represented with pre-generated fallback images or a mock API layer.

---

## 7. Barcelona CityGraph v0.1

### 7.1 Level Structure
```text
L0 City Overview
L1 District / Urban Zone
L2 Landmark
L3 Landmark Scene
L4 Cutaway / Interior / Activity Scene
L5 Artifact / Collectible Card
L6 Generative Edge Branch
```

### 7.2 Canonical Tree

```text
barcelona.overview
├── district.gothic_quarter
│   ├── landmark.barcelona_cathedral
│   │   ├── scene.exterior
│   │   └── artifact.gothic_façade_card
│   └── landmark.plaça_reial
│       └── scene.street_square
│
├── district.eixample
│   ├── landmark.sagrada_familia
│   │   ├── scene.exterior_overview
│   │   ├── scene.cutaway
│   │   │   ├── detail.passion_façade
│   │   │   ├── detail.nativity_façade
│   │   │   ├── detail.towers_spirals
│   │   │   ├── detail.stained_glass
│   │   │   └── detail.gaudi_model_system
│   │   ├── artifact.catenary_geometry_card
│   │   ├── artifact.stained_glass_light_card
│   │   └── edge.gaudi_workshop_generated
│   │
│   ├── landmark.casa_batllo
│   │   ├── scene.exterior
│   │   ├── scene.cutaway
│   │   └── artifact.dragon_roof_card
│   │
│   └── landmark.casa_mila
│       ├── scene.exterior
│       └── artifact.rooftop_chimneys_card
│
├── district.park_guell_zone
│   ├── landmark.park_guell
│   │   ├── scene.overview
│   │   ├── scene.serpentine_bench
│   │   └── artifact.trencadis_mosaic_card
│
├── district.barceloneta
│   ├── landmark.barceloneta_beach
│   │   ├── scene.waterfront
│   │   └── artifact.mediterranean_edge_card
│
└── district.la_rambla_market_axis
    ├── landmark.la_rambla
    │   ├── scene.street_axis
    │   └── artifact.promenuade_card
    └── landmark.la_boqueria
        ├── scene.market_interior
        ├── artifact.market_color_card
        └── edge.market_stall_generated
```

### 7.3 Recommended First Clickable Nodes
For demo v0.1, prioritize these 6 hotspots:

1. Sagrada Família
2. Casa Batlló
3. Gothic Quarter
4. Park Güell
5. La Rambla / La Boqueria
6. Barceloneta waterfront

---

## 8. Content Types

### 8.1 World Map
The top-level Barcelona overview. It should show recognizable urban structure: grid-like Eixample, old Gothic Quarter, coastline, landmark anchors, and simple transit/street cues.

### 8.2 Landmark Scene
A focused isometric scene of one landmark or district anchor.

### 8.3 Cutaway Scene
Architectural section / axonometric cutaway showing inner structure, circulation, façade logic, rooms, towers, or activity zones.

### 8.4 Artifact Card
A collectible visual card unlocked after exploring specific details. Cards should be lightweight, attractive, and educational.

### 8.5 Generative Edge Branch
A branch created from user curiosity. In the demo, implement the data structure and UI entry point first; real AI generation can be added later.

---

## 9. Core Features

### 9.1 Isometric World Viewer
- Display Barcelona world map as an isometric image/canvas scene.
- Support hover highlights for canonical hotspots.
- Support click-to-enter for landmark scenes.

### 9.2 Scene Navigation
- Navigate between overview, districts, landmarks, and cutaways.
- Maintain breadcrumb trail.
- Provide Back to City and Back buttons.

### 9.3 Hotspot System
Each hotspot should include:

```ts
{
  id: string;
  label: string;
  type: 'district' | 'landmark' | 'detail' | 'artifact' | 'edge';
  parentId: string;
  targetNodeId?: string;
  bbox?: [number, number, number, number]; // normalized image coordinates
  point?: [number, number];                // normalized anchor point
  description?: string;
}
```

### 9.4 Collectible Cards
- Unlock cards when users enter certain nodes or click certain details.
- Show collection drawer.
- Cards persist in localStorage.

### 9.5 Exploration Trail
- Record visited nodes.
- Show a small trail panel.
- Allow users to jump back to visited nodes.

### 9.6 Generative Edge Points
- Mark selected hotspots as `type: 'edge'`.
- When clicked, open a panel: “Generate this branch”.
- Demo mode can show static fallback generated scenes.
- Later integration can call an openflipbook-like `/generate` API.

### 9.7 GitHub Pages Deployment
- Build as static front-end demo.
- Use local JSON and public image assets.
- Avoid server dependency for v0.1.

---

## 10. Technical Reuse Plan

### 10.1 Reuse / Borrow from openflipbook
- Interaction idea: image-as-UI and click-to-explore.
- Trail/history model and time-scrubber concept.
- Style pin concept for maintaining a consistent visual language.
- Click resolving and precomputed clickable regions as future upgrade.
- Provider abstraction idea for image model, planner, VLM, and generation backend.

Recommended adaptation:
- Do not copy the whole openflipbook app.
- Reuse its architectural ideas: `/play`-like world viewer, normalized image click math, trail state, beacons/hotspots, and future `/generate` abstraction.

### 10.2 Reuse / Borrow from isomiddleearth
- Isometric canvas/world-builder mindset.
- JSON-based map persistence.
- Collection/deep-link pattern.
- Tile/grid data structure for future editable city packs.
- PNG export pattern as a possible future feature.

Recommended adaptation:
- Start with image-backed scenes and normalized hotspots.
- Add tile/grid rendering later if we want editable city packs.
- Keep CityGraph JSON compatible with future collection submissions.

---

## 11. Suggested Frontend Architecture

```text
src/
  app/
    page.tsx                 // main IsoFlip demo
  components/
    WorldViewer.tsx           // image/canvas viewer + hotspots
    HotspotLayer.tsx
    SceneHeader.tsx
    TrailPanel.tsx
    CollectionDrawer.tsx
    ArtifactCard.tsx
    GenerativeEdgePanel.tsx
  data/
    citygraph.barcelona.ts
  lib/
    cityGraph.ts              // graph lookup, node routing
    hotspots.ts               // normalized bbox/point helpers
    storage.ts                // localStorage for trail/cards
    generation.ts             // future API abstraction
  types/
    citygraph.ts
  public/
    assets/barcelona/
      overview.png
      sagrada-cutaway.png
      casa-batllo.png
      park-guell.png
      ...
```

---

## 12. Data Model

### 12.1 City Node
```ts
export type CityNodeType =
  | 'city'
  | 'district'
  | 'landmark'
  | 'scene'
  | 'cutaway'
  | 'detail'
  | 'artifact'
  | 'edge';

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
```

### 12.2 Hotspot
```ts
export interface Hotspot {
  id: string;
  label: string;
  targetNodeId?: string;
  type: 'navigate' | 'artifact' | 'generative-edge';
  point?: [number, number];
  bbox?: [number, number, number, number];
  tooltip?: string;
}
```

### 12.3 Artifact
```ts
export interface Artifact {
  id: string;
  title: string;
  category: 'architecture' | 'urbanism' | 'material' | 'history' | 'street-life';
  image?: string;
  description: string;
  unlockedByNodeId: string;
}
```

---

## 13. Visual Direction

### 13.1 Style
Hand-drawn isometric architectural atlas.

### 13.2 Visual Qualities
- Isometric / axonometric perspective
- Architectural illustration feel
- Light cutaway diagrams
- Clean labels and subtle annotation lines
- Warm off-white background
- Soft greens, sandstone, terracotta, pale blue Mediterranean accents
- Detailed but readable

### 13.3 Avoid
- Photorealistic 3D
- Generic fantasy game map
- Overly childish cartoon style
- Unstable style switching
- Too much text baked into generated images

---

## 14. MVP Acceptance Criteria

### 14.1 Functional
- User can open GitHub Pages demo.
- User can enter at least 5 Barcelona hotspots from the overview.
- User can view at least 3 landmark scenes and 2 cutaway scenes.
- User can unlock at least 5 artifact cards.
- User trail persists in localStorage.
- User can return to overview from any scene.
- Generative edge points exist as UI and data model, even if powered by static fallback scenes.

### 14.2 Technical
- Static export works for GitHub Pages.
- CityGraph is defined in JSON/TS and easy to extend.
- Hotspots use normalized coordinates.
- Components are modular and reusable.
- No hard-coded navigation logic outside graph utilities.

### 14.3 Experience
- The demo should feel like a miniature open-world Barcelona.
- Navigation should feel spatial, not slideshow-like.
- Visual style should be coherent across scenes.
- The user should want to click deeper into landmarks and collect cards.

---

# Part B｜Codex Development Prompt

## Prompt Title
Build IsoFlip Barcelona Demo — AI-native isometric city mirror world

## Prompt

You are an expert senior frontend engineer and creative technologist. Build a polished static demo called **IsoFlip**, a semi-open isometric city exploration product. The first demo city is **Barcelona**.

The product is inspired by two open-source patterns:

1. **openflipbook**: image-as-UI, click-to-explore, trail/history, style consistency, future VLM/image-generation branches.
2. **isomiddleearth**: isometric world builder, grid/tile mindset, JSON-based maps, collections, GitHub Pages-friendly static demo.

Do not build a traditional travel guide or slideshow. Build a small open-world city mirror: users explore a beautiful isometric Barcelona map, enter landmarks, open cutaway scenes, and collect architecture cards.

## Build Requirements

### 1. Tech Stack
Use:
- Next.js + React + TypeScript
- Tailwind CSS
- Local static data files
- localStorage for persistence
- GitHub Pages-compatible static export

Avoid server dependency in v0.1. Add an abstraction layer for future AI generation, but do not require real API keys.

### 2. Core Pages
Build one main page:

```text
/
```

It should show the IsoFlip Barcelona demo.

### 3. Core Components
Implement these components:

```text
WorldViewer.tsx
HotspotLayer.tsx
SceneHeader.tsx
TrailPanel.tsx
CollectionDrawer.tsx
ArtifactCard.tsx
GenerativeEdgePanel.tsx
```

### 4. Data Model
Create:

```text
src/types/citygraph.ts
src/data/citygraph.barcelona.ts
src/lib/cityGraph.ts
src/lib/storage.ts
src/lib/hotspots.ts
src/lib/generation.ts
```

Use this model:

```ts
export type CityNodeType =
  | 'city'
  | 'district'
  | 'landmark'
  | 'scene'
  | 'cutaway'
  | 'detail'
  | 'artifact'
  | 'edge';

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

export interface Hotspot {
  id: string;
  label: string;
  targetNodeId?: string;
  type: 'navigate' | 'artifact' | 'generative-edge';
  point?: [number, number];
  bbox?: [number, number, number, number];
  tooltip?: string;
}

export interface Artifact {
  id: string;
  title: string;
  category: 'architecture' | 'urbanism' | 'material' | 'history' | 'street-life';
  image?: string;
  description: string;
  unlockedByNodeId: string;
}
```

### 5. Barcelona CityGraph
Create a first canonical graph:

```text
barcelona.overview
├── district.gothic_quarter
│   ├── landmark.barcelona_cathedral
│   └── landmark.plaça_reial
│
├── district.eixample
│   ├── landmark.sagrada_familia
│   │   ├── scene.exterior_overview
│   │   ├── scene.cutaway
│   │   ├── detail.passion_façade
│   │   ├── detail.nativity_façade
│   │   ├── detail.towers_spirals
│   │   ├── detail.stained_glass
│   │   ├── detail.gaudi_model_system
│   │   └── edge.gaudi_workshop_generated
│   ├── landmark.casa_batllo
│   └── landmark.casa_mila
│
├── district.park_guell_zone
│   └── landmark.park_guell
│
├── district.barceloneta
│   └── landmark.barceloneta_beach
│
└── district.la_rambla_market_axis
    ├── landmark.la_rambla
    └── landmark.la_boqueria
        └── edge.market_stall_generated
```

### 6. Demo Assets
Use placeholder images if real assets are not available, but design the system so image paths can be replaced later:

```text
/public/assets/barcelona/overview.png
/public/assets/barcelona/sagrada-exterior.png
/public/assets/barcelona/sagrada-cutaway.png
/public/assets/barcelona/casa-batllo.png
/public/assets/barcelona/park-guell.png
/public/assets/barcelona/gothic-quarter.png
/public/assets/barcelona/la-boqueria.png
/public/assets/barcelona/barceloneta.png
```

If no images exist, create elegant placeholder panels with gradients, labels, and isometric-card styling. Do not use external image URLs.

### 7. Interaction Requirements
- Current node is displayed in the main world viewer.
- Hotspots appear as subtle glowing pins or outlined clickable regions.
- Hovering a hotspot shows tooltip.
- Clicking a `navigate` hotspot enters the target node.
- Clicking an `artifact` hotspot unlocks the relevant card.
- Clicking a `generative-edge` hotspot opens the GenerativeEdgePanel.
- TrailPanel shows visited nodes in order.
- CollectionDrawer shows unlocked cards.
- Provide “Back” and “Back to Barcelona” actions.
- Persist current trail and unlocked cards in localStorage.

### 8. Generative Edge Panel
For v0.1, do not call real AI APIs. Create a mock function in `generation.ts`:

```ts
export async function generateEdgeBranch(input: {
  parentNodeId: string;
  prompt: string;
}): Promise<CityNode>;
```

It should return a deterministic mock branch attached to the parent node. The UI should make clear that this is a demo placeholder for future openflipbook-style image generation.

### 9. Visual Design
Design direction:
- Hand-drawn isometric architectural atlas
- Warm ivory background
- Terracotta, Mediterranean blue, muted green accents
- Elegant city/architecture atmosphere
- Premium creative-tool feel
- Not childish, not photorealistic, not generic dashboard

The page layout should include:
- Top title area: “IsoFlip Barcelona”
- Subtitle: “A semi-open isometric city mirror world”
- Main scene viewer
- Right side or bottom panel for trail and collection
- Subtle HUD-like UI, not heavy game chrome

### 10. Important UX Language
Use spatial language:
- Enter
- Return to city
- Explore landmark
- Unlock artifact
- Open edge branch
- Trail
- CityGraph

Avoid slideshow language like:
- Next page
- Previous page
- Slide

### 11. Future-ready Hooks
Add comments and clean abstractions for future:
- Replacing mock generation with openflipbook-like backend
- Adding VLM click resolving
- Adding city pack JSON import/export
- Adding tile/grid editable world builder inspired by isomiddleearth
- Adding GitHub community-contributed city packs

### 12. Quality Bar
The demo must feel polished enough for a portfolio / GitHub Pages launch:
- Responsive desktop-first layout
- Clean animations
- No broken states
- Type-safe graph lookup
- Graceful placeholder asset handling
- No hard-coded scene routing outside CityGraph utilities

### 13. Deliverables
Produce:
- Working Next.js project code
- Typed CityGraph data
- Modular components
- LocalStorage persistence
- Static export configuration for GitHub Pages
- README with setup and deployment instructions

### 14. README Content
Add a README explaining:
- What IsoFlip is
- Why Barcelona is the first demo city
- Core loop
- CityGraph concept
- How to add a new node
- How to add an artifact
- How generative edge branches will work later
- How to deploy to GitHub Pages

## End Goal
When I run the app, I should be able to explore Barcelona as a small isometric open-world city mirror, enter iconic landmarks like Sagrada Família, open cutaway scenes, unlock architecture cards, and see how future AI-generated branches can grow from a stable canonical city graph.

