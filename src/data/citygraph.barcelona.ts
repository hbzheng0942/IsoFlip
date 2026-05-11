import { isoFlipStylePin } from '@/data/assets.barcelona';
import type { CityGraph, GeneratedBranchAsset } from '@/types/citygraph';

export const barcelonaGraph: CityGraph = {
  rootNodeId: 'barcelona.overview',
  nodes: {
    'barcelona.overview': {
      id: 'barcelona.overview',
      type: 'city',
      title: 'Barcelona Overview',
      subtitle: 'A semi-open isometric city mirror world',
      image: '/assets/barcelona/overview.svg',
      description:
        'A miniature Barcelona atlas anchored by the Eixample grid, the old Gothic core, Gaudi landmarks, Park Guell, La Rambla, the market axis, and the Mediterranean edge.',
      children: [
        'district.gothic_quarter',
        'district.eixample',
        'district.park_guell_zone',
        'district.barceloneta',
        'district.la_rambla_market_axis'
      ],
      artifactIds: ['artifact.eixample_grid_card'],
      hotspots: [
        {
          id: 'hotspot.sagrada',
          label: 'Sagrada Familia',
          type: 'navigate',
          targetNodeId: 'landmark.sagrada_familia',
          point: [62, 34],
          tooltip: 'Enter the basilica landmark scene'
        },
        {
          id: 'hotspot.casa_batllo',
          label: 'Casa Batllo',
          type: 'navigate',
          targetNodeId: 'landmark.casa_batllo',
          point: [49, 44],
          tooltip: 'Explore the dragon-roof facade'
        },
        {
          id: 'hotspot.gothic',
          label: 'Gothic Quarter',
          type: 'navigate',
          targetNodeId: 'district.gothic_quarter',
          point: [36, 55],
          tooltip: 'Enter the old stone lanes'
        },
        {
          id: 'hotspot.park_guell',
          label: 'Park Guell',
          type: 'navigate',
          targetNodeId: 'landmark.park_guell',
          point: [37, 24],
          tooltip: 'Climb into Gaudi garden terraces'
        },
        {
          id: 'hotspot.boqueria',
          label: 'La Boqueria',
          type: 'navigate',
          targetNodeId: 'landmark.la_boqueria',
          point: [42, 63],
          tooltip: 'Follow La Rambla into the market'
        },
        {
          id: 'hotspot.barceloneta',
          label: 'Barceloneta',
          type: 'navigate',
          targetNodeId: 'landmark.barceloneta_beach',
          point: [68, 69],
          tooltip: 'Walk to the Mediterranean edge'
        }
      ],
      isCanonical: true
    },
    'district.gothic_quarter': {
      id: 'district.gothic_quarter',
      type: 'district',
      title: 'Gothic Quarter',
      subtitle: 'Stone lanes, cloisters, and compressed civic rooms',
      parentId: 'barcelona.overview',
      image: '/assets/barcelona/gothic-quarter.svg',
      description:
        'A dense medieval district where narrow passages open into small plazas, cathedral walls, and layered civic history.',
      children: ['landmark.barcelona_cathedral', 'landmark.placa_reial'],
      artifactIds: ['artifact.gothic_facade_card'],
      hotspots: [
        {
          id: 'hotspot.cathedral',
          label: 'Barcelona Cathedral',
          type: 'navigate',
          targetNodeId: 'landmark.barcelona_cathedral',
          point: [52, 42],
          tooltip: 'Explore the cathedral facade'
        },
        {
          id: 'artifact.gothic_facade_hotspot',
          label: 'Gothic Facade Card',
          type: 'artifact',
          artifactId: 'artifact.gothic_facade_card',
          point: [35, 58],
          tooltip: 'Unlock a facade observation'
        }
      ],
      isCanonical: true
    },
    'district.eixample': {
      id: 'district.eixample',
      type: 'district',
      title: 'Eixample',
      subtitle: 'Chamfered blocks and modernist landmarks',
      parentId: 'barcelona.overview',
      image: '/assets/barcelona/eixample.svg',
      description:
        'A gridded expansion district where urban order meets expressive Catalan modernism.',
      children: [
        'landmark.sagrada_familia',
        'landmark.casa_batllo',
        'landmark.casa_mila'
      ],
      artifactIds: ['artifact.eixample_grid_card'],
      hotspots: [
        {
          id: 'hotspot.eixample_sagrada',
          label: 'Sagrada Familia',
          type: 'navigate',
          targetNodeId: 'landmark.sagrada_familia',
          point: [60, 36],
          tooltip: 'Enter the basilica'
        },
        {
          id: 'artifact.eixample_grid_hotspot',
          label: 'Eixample Grid Card',
          type: 'artifact',
          artifactId: 'artifact.eixample_grid_card',
          point: [42, 50],
          tooltip: 'Collect the grid logic card'
        }
      ],
      isCanonical: true
    },
    'district.park_guell_zone': {
      id: 'district.park_guell_zone',
      type: 'district',
      title: 'Park Guell Zone',
      subtitle: 'Garden city slopes and mosaic terraces',
      parentId: 'barcelona.overview',
      image: '/assets/barcelona/park-guell.svg',
      description:
        'A hillside zone where landscape, ceramic fragments, and civic theater fold together.',
      children: ['landmark.park_guell'],
      isCanonical: true
    },
    'district.barceloneta': {
      id: 'district.barceloneta',
      type: 'district',
      title: 'Barceloneta',
      subtitle: 'Harbor grid, beach promenade, and sea air',
      parentId: 'barcelona.overview',
      image: '/assets/barcelona/barceloneta.svg',
      description:
        'A waterfront district that turns the city outward toward the Mediterranean.',
      children: ['landmark.barceloneta_beach'],
      isCanonical: true
    },
    'district.la_rambla_market_axis': {
      id: 'district.la_rambla_market_axis',
      type: 'district',
      title: 'La Rambla Market Axis',
      subtitle: 'Promenade, market color, and street theater',
      parentId: 'barcelona.overview',
      image: '/assets/barcelona/la-boqueria.svg',
      description:
        'A civic corridor where pedestrian ritual and market abundance become a city interface.',
      children: ['landmark.la_rambla', 'landmark.la_boqueria'],
      isCanonical: true
    },
    'landmark.sagrada_familia': {
      id: 'landmark.sagrada_familia',
      type: 'landmark',
      title: 'Sagrada Familia',
      subtitle: 'Gaudi basilica as a living structural forest',
      parentId: 'district.eixample',
      image: '/assets/barcelona/sagrada-exterior.svg',
      description:
        'A landmark scene focused on towers, branching columns, facades, and the unfinished logic of a cathedral still becoming.',
      children: [
        'scene.sagrada_exterior_overview',
        'scene.sagrada_cutaway',
        'detail.passion_facade',
        'detail.nativity_facade',
        'detail.towers_spirals',
        'detail.stained_glass',
        'detail.gaudi_model_system',
        'edge.gaudi_workshop_generated'
      ],
      artifactIds: [
        'artifact.catenary_geometry_card',
        'artifact.stained_glass_light_card'
      ],
      hotspots: [
        {
          id: 'hotspot.sagrada_cutaway',
          label: 'Open cutaway',
          type: 'navigate',
          targetNodeId: 'scene.sagrada_cutaway',
          point: [54, 43],
          tooltip: 'Open the basilica section'
        },
        {
          id: 'artifact.catenary_hotspot',
          label: 'Catenary geometry',
          type: 'artifact',
          artifactId: 'artifact.catenary_geometry_card',
          point: [40, 64],
          tooltip: 'Unlock the catenary model card'
        },
        {
          id: 'edge.gaudi_workshop_hotspot',
          label: 'Gaudi workshop',
          type: 'generative-edge',
          targetNodeId: 'edge.gaudi_workshop_generated',
          point: [72, 58],
          prompt:
            'Generate an isometric cutaway of Gaudi workshop tables, hanging chain models, plaster studies, and warm afternoon Barcelona light.',
          tooltip: 'Open a graph-constrained generated branch'
        }
      ],
      isCanonical: true
    },
    'scene.sagrada_exterior_overview': {
      id: 'scene.sagrada_exterior_overview',
      type: 'scene',
      title: 'Sagrada Exterior Overview',
      subtitle: 'Towers, portals, cranes, and city approach',
      parentId: 'landmark.sagrada_familia',
      image: '/assets/barcelona/sagrada-exterior.svg',
      description:
        'A calm exterior scene that frames the basilica as an urban mountain inside the Eixample grid.',
      children: ['scene.sagrada_cutaway'],
      isCanonical: true
    },
    'scene.sagrada_cutaway': {
      id: 'scene.sagrada_cutaway',
      type: 'cutaway',
      title: 'Sagrada Cutaway',
      subtitle: 'Branching columns and stained glass light',
      parentId: 'landmark.sagrada_familia',
      image: '/assets/barcelona/sagrada-cutaway.svg',
      description:
        'An axonometric slice through the basilica, showing column branching, tower shafts, and colored light wells.',
      artifactIds: ['artifact.stained_glass_light_card'],
      hotspots: [
        {
          id: 'artifact.stained_glass_hotspot',
          label: 'Stained glass light',
          type: 'artifact',
          artifactId: 'artifact.stained_glass_light_card',
          point: [63, 42],
          tooltip: 'Unlock the light logic card'
        }
      ],
      isCanonical: true
    },
    'landmark.casa_batllo': {
      id: 'landmark.casa_batllo',
      type: 'landmark',
      title: 'Casa Batllo',
      subtitle: 'A dragon-roof facade in the Eixample block',
      parentId: 'district.eixample',
      image: '/assets/barcelona/casa-batllo.svg',
      description:
        'An isometric facade scene for ceramic scales, bone-like balconies, and the roofline as urban myth.',
      children: ['scene.casa_batllo_cutaway'],
      artifactIds: ['artifact.dragon_roof_card'],
      hotspots: [
        {
          id: 'hotspot.casa_batllo_cutaway',
          label: 'Open house cutaway',
          type: 'navigate',
          targetNodeId: 'scene.casa_batllo_cutaway',
          point: [55, 48],
          tooltip: 'Enter the interior section'
        },
        {
          id: 'artifact.dragon_roof_hotspot',
          label: 'Dragon roof',
          type: 'artifact',
          artifactId: 'artifact.dragon_roof_card',
          point: [55, 24],
          tooltip: 'Unlock the roof card'
        }
      ],
      isCanonical: true
    },
    'scene.casa_batllo_cutaway': {
      id: 'scene.casa_batllo_cutaway',
      type: 'cutaway',
      title: 'Casa Batllo Cutaway',
      subtitle: 'Lightwell, facade skin, and roof creature',
      parentId: 'landmark.casa_batllo',
      image: '/assets/barcelona/casa-batllo.svg',
      description:
        'A compact building section that reveals the blue lightwell and flowing modernist rooms.',
      artifactIds: ['artifact.dragon_roof_card'],
      isCanonical: true
    },
    'landmark.casa_mila': {
      id: 'landmark.casa_mila',
      type: 'landmark',
      title: 'Casa Mila',
      subtitle: 'Stone waves and rooftop sentinels',
      parentId: 'district.eixample',
      image: '/assets/barcelona/casa-mila.svg',
      description:
        'A modernist apartment block scene centered on the roofscape and sculptural chimneys.',
      artifactIds: ['artifact.rooftop_chimneys_card'],
      hotspots: [
        {
          id: 'artifact.chimneys_hotspot',
          label: 'Rooftop chimneys',
          type: 'artifact',
          artifactId: 'artifact.rooftop_chimneys_card',
          point: [51, 26],
          tooltip: 'Unlock the rooftop card'
        }
      ],
      isCanonical: true
    },
    'landmark.park_guell': {
      id: 'landmark.park_guell',
      type: 'landmark',
      title: 'Park Guell',
      subtitle: 'Mosaic bench, viaducts, and hillside city view',
      parentId: 'district.park_guell_zone',
      image: '/assets/barcelona/park-guell.svg',
      description:
        'A garden-landmark scene where trencadis mosaic, paths, and stone colonnades turn landscape into architecture.',
      children: ['scene.park_guell_bench'],
      artifactIds: ['artifact.trencadis_mosaic_card'],
      hotspots: [
        {
          id: 'hotspot.park_bench',
          label: 'Serpentine bench',
          type: 'navigate',
          targetNodeId: 'scene.park_guell_bench',
          point: [52, 48],
          tooltip: 'Enter the mosaic terrace'
        },
        {
          id: 'artifact.trencadis_hotspot',
          label: 'Trencadis mosaic',
          type: 'artifact',
          artifactId: 'artifact.trencadis_mosaic_card',
          point: [67, 56],
          tooltip: 'Unlock the mosaic card'
        }
      ],
      isCanonical: true
    },
    'scene.park_guell_bench': {
      id: 'scene.park_guell_bench',
      type: 'scene',
      title: 'Serpentine Bench',
      subtitle: 'Ceramic fragments as social topography',
      parentId: 'landmark.park_guell',
      image: '/assets/barcelona/park-guell.svg',
      description:
        'A close scene for the long bench, broken-tile color, and the way a terrace becomes a public room.',
      artifactIds: ['artifact.trencadis_mosaic_card'],
      isCanonical: true
    },
    'landmark.barceloneta_beach': {
      id: 'landmark.barceloneta_beach',
      type: 'landmark',
      title: 'Barceloneta Waterfront',
      subtitle: 'Promenade, compact blocks, and the Mediterranean edge',
      parentId: 'district.barceloneta',
      image: '/assets/barcelona/barceloneta.svg',
      description:
        'A sea-edge scene with a tilted promenade, beach geometry, palms, and harbor memory.',
      artifactIds: ['artifact.mediterranean_edge_card'],
      hotspots: [
        {
          id: 'artifact.mediterranean_edge_hotspot',
          label: 'Mediterranean edge',
          type: 'artifact',
          artifactId: 'artifact.mediterranean_edge_card',
          point: [63, 58],
          tooltip: 'Unlock the waterfront card'
        }
      ],
      isCanonical: true
    },
    'landmark.la_rambla': {
      id: 'landmark.la_rambla',
      type: 'landmark',
      title: 'La Rambla',
      subtitle: 'A civic promenade as urban stage',
      parentId: 'district.la_rambla_market_axis',
      image: '/assets/barcelona/la-rambla.svg',
      description:
        'A linear street-axis scene where walkers, kiosks, trees, and market entrances form a civic corridor.',
      artifactIds: ['artifact.promenade_card'],
      isCanonical: true
    },
    'landmark.la_boqueria': {
      id: 'landmark.la_boqueria',
      type: 'landmark',
      title: 'La Boqueria',
      subtitle: 'Market interior, color, and edible city memory',
      parentId: 'district.la_rambla_market_axis',
      image: '/assets/barcelona/la-boqueria.svg',
      description:
        'A market scene of stalls, awnings, color bands, and social density attached to La Rambla.',
      artifactIds: ['artifact.market_color_card'],
      children: ['edge.market_stall_generated'],
      hotspots: [
        {
          id: 'artifact.market_color_hotspot',
          label: 'Market color',
          type: 'artifact',
          artifactId: 'artifact.market_color_card',
          point: [43, 48],
          tooltip: 'Unlock the market color card'
        },
        {
          id: 'edge.market_stall_hotspot',
          label: 'Hidden stall',
          type: 'generative-edge',
          targetNodeId: 'edge.market_stall_generated',
          point: [68, 50],
          prompt:
            'Generate an isometric Barcelona market stall branch with striped awnings, fruit pyramids, hand-lettered signs, and warm indoor light.',
          tooltip: 'Open a graph-constrained market branch'
        }
      ],
      isCanonical: true
    },
    'landmark.barcelona_cathedral': {
      id: 'landmark.barcelona_cathedral',
      type: 'landmark',
      title: 'Barcelona Cathedral',
      subtitle: 'Gothic verticality inside the old city',
      parentId: 'district.gothic_quarter',
      image: '/assets/barcelona/gothic-quarter.svg',
      description:
        'A cathedral facade scene anchored in stone ornament, towers, and the compressed lanes around it.',
      artifactIds: ['artifact.gothic_facade_card'],
      isCanonical: true
    },
    'landmark.placa_reial': {
      id: 'landmark.placa_reial',
      type: 'landmark',
      title: 'Placa Reial',
      subtitle: 'Arcaded square and evening civic room',
      parentId: 'district.gothic_quarter',
      image: '/assets/barcelona/gothic-quarter.svg',
      description:
        'A square scene for lamps, palms, arcades, and the old city opening into collective space.',
      isCanonical: true
    },
    'edge.gaudi_workshop_generated': {
      id: 'edge.gaudi_workshop_generated',
      type: 'edge',
      title: 'Generated Gaudi Workshop',
      subtitle: 'Demo branch attached to Sagrada Familia',
      parentId: 'landmark.sagrada_familia',
      image: '/assets/barcelona/edge-gaudi-workshop.svg',
      description:
        'A pre-generated static fallback branch showing how future AI-generated scenes will attach to a stable canonical parent.',
      artifactIds: ['artifact.gaudi_workshop_card'],
      isCanonical: false,
      isGenerativeEdge: true
    },
    'edge.market_stall_generated': {
      id: 'edge.market_stall_generated',
      type: 'edge',
      title: 'Generated Market Stall',
      subtitle: 'Demo branch attached to La Boqueria',
      parentId: 'landmark.la_boqueria',
      image: '/assets/barcelona/edge-market-stall.svg',
      description:
        'A pre-generated static fallback branch for a user-curiosity path growing from the canonical market scene.',
      artifactIds: ['artifact.market_stall_card'],
      isCanonical: false,
      isGenerativeEdge: true
    }
  },
  artifacts: {
    'artifact.eixample_grid_card': {
      id: 'artifact.eixample_grid_card',
      title: 'Eixample Grid Logic',
      category: 'urbanism',
      image: '/assets/barcelona/eixample.svg',
      description:
        'Chamfered blocks make intersections wider, brighter, and more legible while turning the city into a repeatable urban fabric.',
      unlockedByNodeId: 'barcelona.overview'
    },
    'artifact.gothic_facade_card': {
      id: 'artifact.gothic_facade_card',
      title: 'Gothic Facade Layers',
      category: 'history',
      image: '/assets/barcelona/gothic-quarter.svg',
      description:
        'Stone surfaces, portals, tracery, and shadow compress centuries of civic memory into a walkable facade.',
      unlockedByNodeId: 'district.gothic_quarter'
    },
    'artifact.catenary_geometry_card': {
      id: 'artifact.catenary_geometry_card',
      title: 'Catenary Geometry',
      category: 'architecture',
      image: '/assets/barcelona/sagrada-cutaway.svg',
      description:
        'Gaudi used hanging-chain logic to discover structural curves that could stand as compression forms when inverted.',
      unlockedByNodeId: 'landmark.sagrada_familia'
    },
    'artifact.stained_glass_light_card': {
      id: 'artifact.stained_glass_light_card',
      title: 'Stained Glass Light',
      category: 'material',
      image: '/assets/barcelona/sagrada-cutaway.svg',
      description:
        'Colored glazing turns daylight into a navigable atmosphere, shifting the basilica from stone mass to luminous forest.',
      unlockedByNodeId: 'scene.sagrada_cutaway'
    },
    'artifact.dragon_roof_card': {
      id: 'artifact.dragon_roof_card',
      title: 'Dragon Roof',
      category: 'architecture',
      image: '/assets/barcelona/casa-batllo.svg',
      description:
        'The scaled roofline turns an apartment house into a mythic city creature while staying embedded in the block.',
      unlockedByNodeId: 'landmark.casa_batllo'
    },
    'artifact.rooftop_chimneys_card': {
      id: 'artifact.rooftop_chimneys_card',
      title: 'Rooftop Chimneys',
      category: 'architecture',
      image: '/assets/barcelona/casa-mila.svg',
      description:
        'Casa Mila transforms service chimneys into sculptural sentinels that make the roof a second public landscape.',
      unlockedByNodeId: 'landmark.casa_mila'
    },
    'artifact.trencadis_mosaic_card': {
      id: 'artifact.trencadis_mosaic_card',
      title: 'Trencadis Mosaic',
      category: 'material',
      image: '/assets/barcelona/park-guell.svg',
      description:
        'Broken ceramic fragments create a flexible, colorful skin that follows curves and turns waste into ornament.',
      unlockedByNodeId: 'landmark.park_guell'
    },
    'artifact.mediterranean_edge_card': {
      id: 'artifact.mediterranean_edge_card',
      title: 'Mediterranean Edge',
      category: 'urbanism',
      image: '/assets/barcelona/barceloneta.svg',
      description:
        'The waterfront is a civic threshold where the city grid, promenade, beach, and horizon meet.',
      unlockedByNodeId: 'landmark.barceloneta_beach'
    },
    'artifact.promenade_card': {
      id: 'artifact.promenade_card',
      title: 'Promenade Ritual',
      category: 'street-life',
      image: '/assets/barcelona/la-rambla.svg',
      description:
        'La Rambla works as a linear public room, balancing movement, watching, commerce, and urban performance.',
      unlockedByNodeId: 'landmark.la_rambla'
    },
    'artifact.market_color_card': {
      id: 'artifact.market_color_card',
      title: 'Market Color System',
      category: 'street-life',
      image: '/assets/barcelona/la-boqueria.svg',
      description:
        'Food color, awnings, handwritten signs, and dense displays make the market readable before it is understood.',
      unlockedByNodeId: 'landmark.la_boqueria'
    },
    'artifact.gaudi_workshop_card': {
      id: 'artifact.gaudi_workshop_card',
      title: 'Workshop as Generator',
      category: 'architecture',
      image: '/assets/barcelona/edge-gaudi-workshop.svg',
      description:
        'The workshop branch frames models, experiments, and drawings as the generative edge of the basilica graph.',
      unlockedByNodeId: 'edge.gaudi_workshop_generated'
    },
    'artifact.market_stall_card': {
      id: 'artifact.market_stall_card',
      title: 'Generated Stall Memory',
      category: 'street-life',
      image: '/assets/barcelona/edge-market-stall.svg',
      description:
        'A branch-level artifact that turns user curiosity into a collectible local scene attached to La Boqueria.',
      unlockedByNodeId: 'edge.market_stall_generated'
    }
  }
};

export const generatedBranchAssets: GeneratedBranchAsset[] = [
  {
    assetId: 'edge-gaudi-workshop',
    parentNodeId: 'landmark.sagrada_familia',
    prompt:
      'Isometric cutaway of Gaudi workshop tables, hanging chain models, plaster studies, warm afternoon Barcelona light, hand-drawn Mediterranean architectural atlas.',
    stylePin: isoFlipStylePin,
    model: 'static-ai-generated-fallback',
    seed: 'isoflip-v01-gaudi-workshop',
    revision: 1,
    image: '/assets/barcelona/edge-gaudi-workshop.svg'
  },
  {
    assetId: 'edge-market-stall',
    parentNodeId: 'landmark.la_boqueria',
    prompt:
      'Isometric Barcelona market stall branch with striped awnings, fruit pyramids, hand-lettered signs, warm indoor light, hand-drawn Mediterranean architectural atlas.',
    stylePin: isoFlipStylePin,
    model: 'static-ai-generated-fallback',
    seed: 'isoflip-v01-market-stall',
    revision: 1,
    image: '/assets/barcelona/edge-market-stall.svg'
  }
];
