export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryTag: string;
  year: string;
  client: string;
  role: string[];
  deliverables: string[];
  heroTagline: string;
  challenge: string;
  approach: string;
  visualSystem: {
    fontPairing: string;
    primaryColors: { name: string; hex: string; role: string }[];
    gridConcept: string;
    designPhilosophy: string;
  };
  applications: {
    title: string;
    category: string;
    description: string;
  }[];
  outcome: string;
  featured: boolean;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'bimacme',
    number: '01',
    title: 'BIMACME',
    category: 'BRAND IDENTITY / SYSTEMS',
    categoryTag: 'Architecture & Engineering',
    year: '2025',
    client: 'BIMACME Engineering Solutions',
    role: ['Brand Strategy', 'Visual Identity', 'Brand Applications', 'Social Media', 'Video Editing'],
    deliverables: [
      'Visual Identity System',
      'Brand Guidelines & Stationery',
      'Corporate Presentation Collateral',
      'Social & Motion Case Studies'
    ],
    heroTagline: 'A geometric identity and motion graphics system engineered for international digital construction consultancies.',
    challenge:
      'BIMACME coordinates complex Building Information Modeling (BIM), MEP clash detection, and constructible engineering workflows for international architects and builders. The brand needed to stand out in a sector dominated by generic 3D cubes and outdated technical diagrams. The challenge was to communicate mathematical precision and architectural coordination without looking cold or unapproachable.',
    approach:
      'I developed a custom geometric symbol paired with a strict typographic hierarchy. The mark combines interlocking geometric facets to create a split-A icon, utilizing precise negative space channels to represent MEP coordination and architectural flow. Paired with Effra Sans Serif and Switzer Regular, the system balances structural authority with modern digital clarity across print collateral, employee credentials, and 3D explainer videos.',
    visualSystem: {
      fontPairing: 'Effra Sans Serif & Switzer Regular',
      primaryColors: [
        { name: 'Marine Navy', hex: '#0C1D49', role: 'Primary Corporate' },
        { name: 'Traditional Blue', hex: '#3D7FE2', role: 'Digital Accent & Datum' },
        { name: 'Blue Charcoal', hex: '#010F1C', role: 'Deep Contrast' },
        { name: 'Chrome White', hex: '#E8F1F6', role: 'Ground Surface' }
      ],
      gridConcept: 'Geometric coordinate grid with custom split-A icon logic',
      designPhilosophy: 'Structured, precise, and engineered for complex workflows.'
    },
    applications: [
      {
        title: 'Corporate Stationery & Collateral',
        category: 'Print System',
        description: 'Executive presentation folders, envelopes, and letterheads unified by strict margin datum lines and typographic restraint.'
      },
      {
        title: 'Employee Identification & Lanyards',
        category: 'Internal Brand',
        description: 'Bilingual CR80 security badges and custom woven lanyard systems for international consultancy teams.'
      },
      {
        title: 'Technical Video Case Studies',
        category: 'Motion & Explainer',
        description: 'Three edited video case studies breaking down constructible modeling, clash detection, and builder works workflows.'
      }
    ],
    outcome:
      'Delivered a complete visual identity manual, executive stationery suite, on-site safety gear standards, and three technical video case studies that helped BIMACME present their MEP coordination capabilities to enterprise developers in Dubai and Singapore.',
    featured: true,
    accentColor: '#3D7FE2'
  },
  {
    id: 'sangreen-logistics',
    number: '02',
    title: 'Sangreen Logistics',
    category: 'CORPORATE BRAND GUIDELINES',
    categoryTag: 'Intermodal Freight & Supply Chain',
    year: '2025',
    client: 'Sangreen Logistics Pvt. Ltd.',
    role: [
      'Corporate Brand Guidelines',
      'Logo System & Standards',
      'Stationery & ID Systems',
      'Merchandise & Apparel',
      'Digital Communication'
    ],
    deliverables: [
      '26-Section Brand Guidelines',
      'Logo Construction & Geometry',
      'Complete Stationery Suite',
      'Workplace & Uniform Badging',
      'Merchandise Specifications'
    ],
    heroTagline: 'A 26-chapter brand governance manual engineered for intermodal freight scale and highway visibility.',
    challenge:
      'Sangreen Logistics coordinates heavy intermodal freight, warehousing, and highway transit networks across India. The brand lacked consistent visual standards, resulting in fragmented typography, improper logo scaling across truck trailers, and unstandardized stationery. The objective was to author an exhaustive corporate brand manual establishing absolute operational consistency from executive correspondence to shipping containers.',
    approach:
      'I authored a comprehensive 26-section brand guidelines standard anchored by Dusk Blue (#274482) and Light Forest Green (#459652). The system translates movement into a continuous-loop vector mark with mathematical X-unit clear space boundaries. I specified exact dimensions for dual-envelope corporate stationery (A4 and 12×4 in), CR80 security credentials, embroidered apparel, and highway vehicle livery.',
    visualSystem: {
      fontPairing: 'Rubik Sans-Serif (Light, Regular, Medium, Bold, Black)',
      primaryColors: [
        { name: 'Dusk Blue', hex: '#274482', role: 'Trust, Infrastructure & Structure' },
        { name: 'Light Forest Green', hex: '#459652', role: 'Growth, Sustainability & Movement' },
        { name: 'Pure White', hex: '#FFFFFF', role: 'Clarity & Breathing Room' },
        { name: 'Dark Neutral', hex: '#000000', role: 'Typography & Information' }
      ],
      gridConcept: 'Modular corporate grid with X-unit clear space boundaries',
      designPhilosophy: 'Operational clarity: engineering strict geometric rules and high-contrast color standards that hold up across highway transit and executive boardrooms.'
    },
    applications: [
      {
        title: 'Executive Stationery & Collateral',
        category: 'Corporate Collateral',
        description: 'Business cards (3.5×2.01 in), letterheads (A4), and dual envelope systems (12×4 in & A4).'
      },
      {
        title: 'Workplace Identification & Credentials',
        category: 'Internal Brand',
        description: 'CR80 standard dual-rail ID cards, custom woven lanyards, and executive desk name tags.'
      },
      {
        title: 'Merchandise & Apparel Governance',
        category: 'Brand Objects',
        description: 'Direct embroidered caps, multi-format pin badges, corporate gift sets, and chest-placement polo rules.'
      }
    ],
    outcome:
      'Standardized Sangreen\'s entire corporate footprint across 26 technical chapters, establishing definitive rules for print vendors, vehicle wrap fabricators, and regional logistics hubs.',
    featured: true,
    accentColor: '#274482'
  },
  {
    id: 'sangreen-future-renewables',
    number: '03',
    title: 'Sangreen Future Renewables',
    category: 'BRAND IDENTITY / ENVIRONMENTAL',
    categoryTag: 'Clean Energy & Infrastructure',
    year: '2025',
    client: 'Sangreen Future Renewables (with Bandish Studios)',
    role: [
      'Brand Identity',
      'Visual Identity',
      'Brand Guidelines',
      'Environmental Branding',
      'Corporate Communication'
    ],
    deliverables: [
      'Brand Identity & Construction System',
      'Brand Identity Guidelines (2025 Edition)',
      'Corporate Capabilities Profile Brochure',
      'Workplace Environmental Graphics & Signage',
      'Trade Exhibition Pavilion & Spatial Experience',
      'Stationery & Security ID Credential Suite'
    ],
    heroTagline: 'Environmental graphics, technical capability monographs, and trade exhibition architecture for clean energy infrastructure.',
    challenge:
      'As a clean energy brand managing wind and solar BOP (Balance of Plant) infrastructure, Sangreen Future Renewables needed a high-credibility identity capable of scaling from dense technical engineering monographs to large-format office architecture and trade exhibition pavilions.',
    approach:
      'In collaboration with Bandish Studios, I designed the brand identity guidelines, technical vector illustrations, corporate capabilities brochure, and environmental graphics. The visual system anchors on Light Sea Green (#3FACA2) and architectural neutral greys, combining fine-line turbine schematics with structured 12-column corporate layouts.',
    visualSystem: {
      fontPairing: 'Rubik Grotesk (300 to 900) & Technical Sans',
      primaryColors: [
        { name: 'Light Sea Green', hex: '#3FACA2', role: 'Primary Brand Anchor' },
        { name: 'Light Grey', hex: '#D9D9D9', role: 'Architectural Ground & Tint System' },
        { name: 'Deep Carbon', hex: '#111111', role: 'High-Contrast Typography' },
        { name: 'Pure White', hex: '#FFFFFF', role: 'Clean Ground & Space' }
      ],
      gridConcept: 'Technical wind-turbine construction grids and modular 12-column corporate layouts',
      designPhilosophy: 'Technical precision over eco-clichés: grounding renewable infrastructure in engineering drawings and spatial clarity.'
    },
    applications: [
      {
        title: 'Workplace Environmental Branding',
        category: 'Physical Architecture',
        description: 'Full-bleed acrylic wall graphics, turbine illustrations, and motivational installations across executive offices and transit corridors.'
      },
      {
        title: 'Corporate Capabilities Profile',
        category: 'Print & Editorial',
        description: 'Comprehensive editorial brochure detailing civil, electrical, mechanical BOP, and gigawatt wind pipeline metrics.'
      },
      {
        title: 'Brand Identity Guidelines (2025)',
        category: 'Design Governance',
        description: 'Formalized documentation governing symbol geometry, clear space, minimum sizing, Rubik typography, and application rules.'
      },
      {
        title: 'Trade Exhibition Pavilion',
        category: 'Experiential',
        description: 'Large-scale trade exhibition presence featuring branded architectural louvers, meeting suites, and backlit capability panels.'
      }
    ],
    outcome:
      'Delivered an integrated brand suite including the 2025 Brand Guidelines, a multi-page capabilities brochure detailing gigawatt pipeline metrics, full-bleed acrylic workplace wall graphics, and modular trade exhibition louvers.',
    featured: true,
    accentColor: '#3FACA2'
  },
  {
    id: 'sidhivinayak-precast',
    number: '04',
    title: 'Siddhivinayak Precast',
    category: 'BRAND IDENTITY / INDUSTRIAL COMMUNICATION',
    categoryTag: 'Precast Concrete & Infrastructure',
    year: '2024',
    client: 'Siddhivinayak Precast Pipes (with Bandish Studios)',
    role: [
      'Brand Identity',
      'Brand Guidelines',
      'Industrial Communication',
      'Corporate Stationery'
    ],
    deliverables: [
      'Brand Kit & Visual Identity Guidelines',
      'Continuous Infinity Mark & Clear-Space System',
      'Executive Stationery & Industrial Business Cards',
      'Tri-Folded Letterhead & Corporate A4 Envelope',
      'High-Visibility Site Security ID Card Suite',
      'Heavy Civil Infrastructure Communication'
    ],
    heroTagline: 'Industrial brand kit and identity standards for precast concrete manufacturing and civil infrastructure.',
    challenge:
      'Manufacturing critical infrastructure like precast concrete pipes and storm drainage requires a visual identity reflecting monumental physical weight and structural reliability. The company operated without standardized vector assets, clear space rules, or corporate correspondence templates.',
    approach:
      'In collaboration with Bandish Studios, I developed an industrial Brand Kit anchored in architectural brutalism. The mark features a continuous infinity loop symbolizing enduring structural integrity, rendered in high-visibility Deep Carrot Orange (#EC6E2F) and Dark Slate Gray (#28585D). I engineered clean Ubuntu typographic rules and designed double-sided executive business cards, aggregate-textured letterheads, and site security credentials with woven lanyards.',
    visualSystem: {
      fontPairing: 'Ubuntu Sans-Serif (Light, Regular, Medium, Bold)',
      primaryColors: [
        { name: 'Deep Carrot Orange', hex: '#EC6E2F', role: 'High-Visibility Accent & Energy' },
        { name: 'Dark Slate Gray', hex: '#28585D', role: 'Primary Structural Anchor' },
        { name: 'Sonic Silver', hex: '#737476', role: 'Concrete & Steel Neutral' },
        { name: 'Raisin Black', hex: '#231F20', role: 'Technical High-Contrast Typography' },
        { name: 'Anti-Flash White', hex: '#F2F2F3', role: 'Architectural Ground' }
      ],
      gridConcept: 'Architectural formwork grid with monumental whitespace and brutalist geometric alignments',
      designPhilosophy: 'Brutalist mass and manufacturing precision: engineered for high-visibility industrial plants and corporate tenders.'
    },
    applications: [
      {
        title: 'Executive Business Cards',
        category: 'Stationery',
        description: 'Dual-sided card stock resting on dark ridged industrial planes with QR integration.'
      },
      {
        title: 'Tri-Folded Letterhead',
        category: 'Correspondence',
        description: 'Executive formal stationery resting on raw aggregate cast concrete.'
      },
      {
        title: 'High-Visibility Employee ID',
        category: 'Identification',
        description: 'Site security credential with vibrant Deep Carrot Orange woven nylon lanyard.'
      },
      {
        title: 'Corporate A4 Envelope',
        category: 'Mailing System',
        description: 'Clean mailing layout featuring signature full-bleed orange closure flap.'
      }
    ],
    outcome:
      'Formalized Siddhivinayak\'s brand assets into an industrial brand kit, providing production-ready vector standards, executive print collateral, and safety credentials that bridge manufacturing yards with municipal government tenders.',
    featured: true,
    accentColor: '#EC6E2F'
  },
  {
    id: 'krisala-hiranandani',
    number: '05',
    title: 'Krisala x Hiranandani',
    category: 'ART DIRECTION / MOTION / CAMPAIGN',
    categoryTag: '105-Acre Integrated Township',
    year: '2025',
    client: 'Krisala Developers × Hiranandani Communities (with Bandish Studios)',
    role: [
      'Art Direction',
      'Motion Graphics',
      'Visual Communication System',
      'Hero Film Overlays',
      'Social Media Campaign Strategy'
    ],
    deliverables: [
      'Township "Ideas In White" Visual Communication',
      '4K Hero Film Motion Graphics & Telemetry Overlays',
      '11-Asset High-Reach Social Media Campaign',
      'Biophilic Design & Smart City IoT Graphics',
      'Neoclassical Architectural Line Art Systems'
    ],
    heroTagline: 'Ideas in White: Art direction, on-screen motion telemetry, and campaign design for a 105-acre integrated township.',
    challenge:
      'Launching a 105-acre luxury township in North Hinjawadi, Pune, demanded visual communication that could convey both resort-style biophilic living and smart city IoT engineering. The challenge was integrating complex technical telemetry—100+ digital touchpoints, 50% renewable energy grids, and biophilic corridors—into a cinematic 4K hero film and high-reach social rollout without cluttering the architectural cinematography.',
    approach:
      'In collaboration with Bandish Studios, I art-directed the on-screen motion graphics, typography treatments, and visual identity for the "Ideas in White" launch. I developed fine-line vector overlays tracking architectural wireframes, designed cinematic 16:9 data telemetry cards, and produced an 11-asset social media campaign using Instrument Serif display typography and biophilic green accents.',
    visualSystem: {
      fontPairing: 'Instrument Serif Editorial Display & Technical Sans-Serif',
      primaryColors: [
        { name: 'Pure White', hex: '#FFFFFF', role: 'Architectural Canvas & "Ideas in White"' },
        { name: 'Architectural Slate', hex: '#151719', role: 'High-Contrast Editorial Typography' },
        { name: 'Biophilic Forest Green', hex: '#2D6A4F', role: 'Sustainable Terry Green Standards' },
        { name: 'Soft Concrete Grey', hex: '#EAEAEA', role: 'Subtle Grid & Section Separation' }
      ],
      gridConcept: '16:9 cinematic widescreen layout with generous negative space and precision architectural telemetry',
      designPhilosophy: 'Architectural telemetry: turning complex smart-city engineering into minimal, breathing on-screen motion graphics.'
    },
    applications: [
      {
        title: 'Hero Film Visual Communication',
        category: 'Motion Graphics',
        description: 'On-screen graphic overlays, typography treatments, and smart-city data telemetry bridging IoT metrics with cinematic storytelling.'
      },
      {
        title: '11-Asset Social Media Rollout',
        category: 'Digital Campaign',
        description: 'High-reach reels and editorial posts translating "Ideas in White" into mobile-optimized visual assets with massive engagement.'
      },
      {
        title: 'Neoclassical Wireframe Overlays',
        category: 'Architectural Graphics',
        description: 'Fine-line vector elevations and architectural tracking callouts emphasizing classical proportions and environmental flow.'
      }
    ],
    outcome:
      'Delivered on-screen graphics for the 4K hero film and an 11-asset social media campaign that generated over 1,00,000+ organic impressions during the preview launch.',
    featured: true,
    accentColor: '#2D6A4F'
  },
  {
    id: 'social-media-creatives',
    number: '06',
    title: 'Social Media Creatives (2024–2025)',
    category: 'SOCIAL DESIGN / DIGITAL MARKETING',
    categoryTag: 'Social Media Design & Digital Campaigns',
    year: '2024 — 2025',
    client: 'Bandhan Bank · Smart Bazaar · Central Park Hotel · Bandish Studios',
    role: ['Visual Communication', 'Social Media Design', 'Motion Graphics', 'Content Strategy'],
    deliverables: [
      'Multi-Industry Digital Campaigns',
      'Mobile-First Creative Frameworks',
      'Motion Graphics & Instagram Reels',
      'High-Density Masonry Editorial Grids'
    ],
    heroTagline: 'High-density digital campaigns and motion design across national banking, retail, and hospitality.',
    challenge:
      'Managing ongoing social media communication across four contrasting industries—national finance (Bandhan Bank), nationwide retail (Smart Bazaar), luxury hospitality (The Central Park Hotel & Parc Estique), and creative agency culture (Bandish Studios)—required high-velocity creative execution while maintaining strict individual brand identities.',
    approach:
      'In collaboration with Bandish Studios, I established modular layout grids (4:5 vertical feeds and 9:16 reels) tailored to each brand\'s commercial objective. For Bandhan Bank, I prioritized informational hierarchy and trust. For Smart Bazaar, I developed high-contrast discount lockups for festival retail drives. For Central Park Hotel, I art-directed rich culinary photography and atmospheric event typography.',
    visualSystem: {
      fontPairing: 'Platform-Adaptive Display & Editorial Grotesk',
      primaryColors: [
        { name: 'Bandish Yellow', hex: '#FFE600', role: 'Creative Dynamism' },
        { name: 'Bandhan Blue', hex: '#003B70', role: 'Financial Trust' },
        { name: 'Retail Red', hex: '#D32F2F', role: 'Urgency & Scale' },
        { name: 'Pitch Dark', hex: '#121417', role: 'Canvas Ground' }
      ],
      gridConcept: '4:5 in-feed vertical grids, 9:16 mobile mockups, and high-density editorial masonry spreads',
      designPhilosophy: 'Channel velocity without craft compromise: modular mobile-first grids engineered for high thumb-stop impact.'
    },
    applications: [
      {
        title: 'Bandhan Bank Financial Campaigns',
        category: 'Corporate Finance',
        description: 'Clean typography, structured information hierarchies, and approachable imagery communicating financial products securely.'
      },
      {
        title: 'Hospitality & Culinary Storytelling',
        category: 'Atmospheric Dining',
        description: 'Vibrant food photography, bold event typography, and urgency-driven event campaigns for Central Park & Parc Estique.'
      },
      {
        title: 'Smart Bazaar Retail Drives',
        category: 'Hypermarket FMCG',
        description: 'High-impact scroll-stopping promotions blending seasonal greetings with festive product discounts at national scale.'
      }
    ],
    outcome:
      'Designed and delivered over 100+ production assets across banking, retail, and hospitality, backed by verified campaign creatives generating over 300k+ total likes and 90M+ total views.',
    featured: true,
    accentColor: '#D84A38'
  },
  {
    id: 'soma-cafe',
    number: '07',
    title: 'Soma Cafe',
    category: 'NEW BRAND / VISUAL IDENTITY / HOSPITALITY BRANDING',
    categoryTag: 'Hospitality & Culinary Craft',
    year: '2024 — 2025',
    client: 'Soma / Soma Cafe',
    role: [
      'Visual Identity',
      'Hospitality Branding',
      'Art Direction',
      'Stationery & Packaging Architecture',
      'Tableware & Spatial Signage'
    ],
    deliverables: [
      "Wordmark & 'S' Monogram System",
      'Architectural Facade & Brass Signage Standards',
      'Geometric Drafting & Construction Blueprints',
      'Executive Stationery & Chef Business Cards',
      'Custom Lined Envelope Suites',
      'Ceramic Tableware & Monogram Dishware',
      'A-Frame Sidewalk & Environmental Touchpoints'
    ],
    heroTagline: 'A tactile hospitality identity spanning geometric logo drafting, brass facade signage, and custom dining tableware.',
    challenge:
      'Launching an artisanal cafe in an established culinary market required an identity that felt warm and intimate yet structurally sophisticated. The brand needed to translate seamlessly from exterior street presence to tactile paper menus, custom ceramic tableware, and staff uniforms.',
    approach:
      'I developed the identity around a high-contrast serif wordmark, a geometrically drafted \'S\' monogram, and a calming palette of Soma Forest Green (#234133) and Antique Cream (#FAF8F5). I specified solid brushed brass dimensional lettering for the exterior facade, drafted concentric construction blueprints for the monogram, and designed duplexed 350gsm business cards, lined envelope suites, and custom-glazed ceramic dining plates.',
    visualSystem: {
      fontPairing: 'High-Contrast Classic Serif & Neutral Sans-Serif',
      primaryColors: [
        { name: 'Soma Forest Green', hex: '#234133', role: 'Primary Identity Anchor' },
        { name: 'Warm Antique Cream', hex: '#FAF8F5', role: 'Substrate & Negative Space' },
        { name: 'Brushed Brass', hex: '#C5A059', role: 'Architectural Signage & Foil' },
        { name: 'Charcoal Ink', hex: '#1C1E1B', role: 'Editorial Typography' }
      ],
      gridConcept: 'Concentric circular drafting grids and classical golden-ratio layout margins',
      designPhilosophy: 'Tactile craftsmanship: connecting architectural street signage, unbleached cotton papers, and artisanal ceramic dining touchpoints.'
    },
    applications: [
      {
        title: 'Architectural Storefront Signage',
        category: 'Spatial Branding',
        description: 'Matte forest green facade with solid brushed brass lettering and bilingual \'सोमा\' detail.'
      },
      {
        title: 'Tactile Executive Stationery',
        category: 'Print Collateral',
        description: 'Duplexed 350gsm business cards and bespoke envelopes lined with ornamental patterns.'
      },
      {
        title: 'Custom Ceramic Dining Plates',
        category: 'Tableware',
        description: 'Artisanal white ceramic dishware featuring deep green rim detailing and centered \'S\' monogram.'
      }
    ],
    outcome:
      'Crafted a complete hospitality identity system from blueprint drafting to physical dining execution, giving Soma Cafe an unmistakable presence across street signage, print menus, and tableware.',
    featured: true,
    accentColor: '#234133'
  }
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  keyWork: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024 — 2025',
    role: 'Senior Visualizer',
    company: 'Bandish Studios',
    location: 'Pune, India',
    type: 'Agency Practice',
    description:
      'Contributed to brand identity systems, corporate guidelines, environmental graphics, and high-density digital marketing campaigns. Designed motion telemetry overlays and social frameworks across enterprise clients.',
    keyWork: [
      'Visual identities and brand manuals for Sangreen Logistics, BIMACME, and Siddhivinayak Precast',
      'Art-directed motion telemetry and social campaign rollout for Krisala x Hiranandani',
      'High-density digital marketing creatives for Bandhan Bank and Smart Bazaar'
    ]
  },
  {
    period: '2022 — 2024',
    role: 'Video Editor & Jr. Graphic Designer',
    company: 'House of Content',
    location: 'Pune, India',
    type: 'Agency Practice',
    description:
      'Edited promotional video campaigns, created kinetic typography sequences, and designed marketing collateral across consumer and technology brands.',
    keyWork: [
      'Edited multi-format promotional video assets in Premiere Pro and After Effects',
      'Created animated motion reels and visual social campaign templates',
      'Designed presentation decks and vector brand assets'
    ]
  },
  {
    period: '2021 — 2022',
    role: 'Graphic Design Intern',
    company: 'Team Ranuver',
    location: 'Pune, India',
    type: 'Design Consultancy',
    description:
      'Assisted with brand identity concepts, typography layouts, vector drafting, and corporate stationery preparation for commercial clients.',
    keyWork: [
      'Assisted in drafting wordmarks, vector logos, and layout grids',
      'Prepared production-ready print files and stationery templates'
    ]
  },
  {
    period: '2020 — 2021',
    role: 'Graphic Design Intern',
    company: 'Paycrunch',
    location: 'Remote / India',
    type: 'Fintech Startup',
    description:
      'Created marketing graphics, interactive social media assets, and promotional illustrations for a mobile fintech application.',
    keyWork: [
      'Designed in-app promotional banners and social campaign graphics',
      'Created visual educational posts explaining financial concepts'
    ]
  }
];

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  associatedProject: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'BRAND IDENTITY',
    tagline: 'Vector geometry, typographic hierarchy, and clear-space standards.',
    description:
      'I design custom geometric logomarks, monograms, and proportional wordmarks. Every brand identity is defined by mathematical grids, strict clear-space rules, and complete color specifications across print and screen.',
    capabilities: ['Logomarks & Monograms', 'Typographic Hierarchy', 'Color Specifications', 'Grid Construction', 'Usage Boundaries'],
    associatedProject: 'Soma Cafe'
  },
  {
    number: '02',
    title: 'CORPORATE GUIDELINES',
    tagline: 'Multi-chapter brand governance for operational consistency.',
    description:
      'I author comprehensive corporate brand guidelines detailing logo construction, dual-envelope correspondence, employee security badging, vehicle fleet livery, and vendor print rules.',
    capabilities: ['Brand Standards Manuals', 'Executive Stationery Suites', 'Highway Fleet Livery', 'Security Badging Systems', 'Print & Finishing Specs'],
    associatedProject: 'Sangreen Logistics'
  },
  {
    number: '03',
    title: 'CAMPAIGN ART DIRECTION',
    tagline: 'Translating architectural scale and technical telemetry into film.',
    description:
      'I establish visual themes, design on-screen motion telemetry for 4K hero films, and coordinate multi-channel campaign rollouts bridging technical engineering with human emotion.',
    capabilities: ['Township Visual Themes', 'Hero Film Telemetry Graphics', 'Digital Campaign Rollouts', 'Architectural Line Art', 'Editorial Storyboards'],
    associatedProject: 'Krisala Hiranandani'
  },
  {
    number: '04',
    title: 'INDUSTRIAL & SPATIAL SYSTEMS',
    tagline: 'Brutalist identity and environmental infrastructure design.',
    description:
      'I build heavy-duty visual identities and spatial graphics for manufacturing facilities, exhibition pavilions, and site signage engineered for high-visibility real-world recognition.',
    capabilities: ['Heavy Industrial Brand Kits', 'Site Security Badges', 'Exhibition Pavilions', 'Facade Brass Lettering', 'Aggregate Print Collateral'],
    associatedProject: 'Siddhivinayak Precast'
  },
  {
    number: '05',
    title: 'SOCIAL MEDIA SYSTEMS',
    tagline: 'High-density editorial grids and motion frameworks.',
    description:
      'I develop mobile-first 4:5 and 9:16 layout templates, carousel narratives, and animated reels for national banks, hypermarkets, and hospitality brands requiring daily visual consistency.',
    capabilities: ['In-Feed Editorial Grids', 'Motion Reels & Stories', 'Retail Discount Frameworks', 'Campaign Asset Toolkits', 'Rapid Content Workflows'],
    associatedProject: 'Social Media Creatives'
  },
  {
    number: '06',
    title: 'MOTION DESIGN & VIDEO EDITING',
    tagline: 'Rhythmic pacing, on-screen callouts, and technical explainer edits.',
    description:
      'I edit and animate technical case studies, promotional reels, and brand reveal idents in After Effects and Premiere Pro, turning complex engineering models into clear visual narratives.',
    capabilities: ['Technical Explainer Edits', 'Kinetic Typography', 'Brand Reveal Idents', 'Telemetry Animation', 'Social Video Pacing'],
    associatedProject: 'BIMACME'
  }
];
