export interface RenewablesSection {
  id: string;
  number: string;
  title: string;
  category: 'IDENTITY' | 'APPLICATIONS' | 'ENVIRONMENT' | 'EXPERIENCE' | 'GOVERNANCE';
  heading: string;
  statement: string;
  copy: string[];
  primaryImage: string;
  supportingImages?: string[];
  captions?: { [key: string]: string };
  specs?: { label: string; value: string }[];
  tags?: string[];
}

export const RENEWABLES_SECTIONS: RenewablesSection[] = [
  {
    id: '01-intro',
    number: '01',
    title: 'INTRODUCTION',
    category: 'IDENTITY',
    heading: 'TECHNICAL CAPABILITY MONOGRAPHS AND ENVIRONMENTAL ARCHITECTURE.',
    statement: 'A systematic brand framework connecting corporate documentation, office interiors, and exhibition spaces.',
    copy: [
      'Sangreen Future Renewables develops utility-scale wind and clean power infrastructure across India.',
      'In collaboration with Bandish Studios, I developed an institutional brand system that transitions from technical BOP (Balance of Plant) documentation to large-scale spatial installations.',
      'The visual system avoids generic greenwashing tropes by anchoring directly on technical turbine schematics, structured 12-column corporate grids, and high-contrast typographic hierarchies.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_22_image.webp',
    supportingImages: ['/projects/sangreen-renewables/imgi_3_image.webp'],
    captions: {
      '/projects/sangreen-renewables/imgi_22_image.webp': 'Workplace environmental graphics — wind turbine visual vocabulary translated to architectural scale.',
      '/projects/sangreen-renewables/imgi_3_image.webp': 'Official 2025 Brand Identity Guidelines publication cover.'
    },
    specs: [
      { label: 'PROJECT', value: 'Sangreen Future Renewables' },
      { label: 'YEAR', value: '2025' },
      { label: 'SECTOR', value: 'Renewable Energy & Wind Power' },
      { label: 'CREDIT', value: 'Developed with Bandish Studios' }
    ],
    tags: ['Brand Identity', 'Visual Identity', 'Environmental Branding', 'Corporate Communication']
  },
  {
    id: '02-identity',
    number: '02',
    title: 'THE IDENTITY',
    category: 'IDENTITY',
    heading: 'ONE IDENTITY. BUILT TO MOVE.',
    statement: 'A bold typographic wordmark paired with a kinetic continuous-energy mark.',
    copy: [
      'The visual identity brings together a bold typographic wordmark, a distinctive symbol and a renewable-energy visual vocabulary.',
      'The system was designed to remain instantly recognizable across scales — from small-format stationery and badges to large-scale physical environments.',
      'The construction balances geometric precision with energetic rhythm, ensuring consistent optical weight across horizontal and stackedlockups.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_4_image.webp',
    supportingImages: [
      '/projects/sangreen-renewables/imgi_5_image.webp',
      '/projects/sangreen-renewables/imgi_6_image.webp',
      '/projects/sangreen-renewables/imgi_3_image.webp'
    ],
    captions: {
      '/projects/sangreen-renewables/imgi_4_image.webp': 'Primary Sangreen Future Renewables emblem on signature Light Sea Green field.',
      '/projects/sangreen-renewables/imgi_5_image.webp': 'Horizontal mark technical construction grid — proportional bounding boxes and angle alignment markers.',
      '/projects/sangreen-renewables/imgi_6_image.webp': 'Stacked mark technical construction blueprint — geometric guides and symbol-to-type alignment.',
      '/projects/sangreen-renewables/imgi_3_image.webp': 'Brand Identity Guidelines 2025 — official mark placement and turbine line illustration ground.'
    },
    specs: [
      { label: 'LOCKUP TYPES', value: 'Horizontal & Stacked System' },
      { label: 'CONSTRUCTION', value: 'Golden-ratio curves & geometric alignment' },
      { label: 'ISOLATION', value: 'Enclosed rounded-corner rectangular cartouche' }
    ],
    tags: ['Logo Design', 'Technical Blueprint', 'Proportions']
  },
  {
    id: '03-visual-language',
    number: '03',
    title: 'VISUAL LANGUAGE',
    category: 'IDENTITY',
    heading: 'ENERGY, EXPRESSED THROUGH FORM.',
    statement: 'A structured design system built on wind kinetics, precision typography, and light sea green.',
    copy: [
      'Wind became a central visual cue throughout the identity. Fine-line turbine illustrations, strong horizontal forms and a distinctive turquoise palette create a system that communicates movement, energy and forward momentum without relying on generic sustainability symbolism.',
      'The core color signature pairs Light Sea Green (#3faca2) with Light Grey (#d9d9d9), supported by high-contrast black and clean white space.',
      'Typography is set in Rubik across multiple weights, delivering modern corporate legibility and technical clarity across both digital applications and architectural graphics.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_9_image.webp',
    supportingImages: [
      '/projects/sangreen-renewables/imgi_10_image.webp',
      '/projects/sangreen-renewables/imgi_7_image.webp',
      '/projects/sangreen-renewables/imgi_8_image.webp'
    ],
    captions: {
      '/projects/sangreen-renewables/imgi_9_image.webp': 'Primary Color Standards: Light Sea Green (#3faca2 / CMYK 71,11,42,0) and Light Grey (#d9d9d9 / CMYK 14,10,11,0) with tint hierarchy.',
      '/projects/sangreen-renewables/imgi_10_image.webp': 'Corporate Typography: Rubik (Light, Regular, Medium, Bold, Black) and numeral system.',
      '/projects/sangreen-renewables/imgi_7_image.webp': 'Minimum Size Thresholds: Stacked (100px / 80px / 60px) & Horizontal (240px / 120px / 82px) preservation rules.',
      '/projects/sangreen-renewables/imgi_8_image.webp': 'Colorway Matrix: Approved reproductions on white, light grey, carbon black, and teal backgrounds.'
    },
    specs: [
      { label: 'PRIMARY COLOR', value: 'Light Sea Green (#3faca2)' },
      { label: 'SECONDARY COLOR', value: 'Light Grey (#d9d9d9)' },
      { label: 'TYPEFACE', value: 'Rubik (Google Fonts / Modern Sans)' },
      { label: 'GRAPHIC MOTIF', value: 'Fine-line Wind Turbine Array' }
    ],
    tags: ['Color Standards', 'Typography', 'Minimum Size', 'Graphic System']
  },
  {
    id: '04-applications',
    number: '04',
    title: 'BRAND APPLICATIONS',
    category: 'APPLICATIONS',
    heading: 'FROM THE BRAND MARK TO THE EVERYDAY TOUCHPOINT.',
    statement: 'A disciplined translation of identity standards into everyday workplace artifacts.',
    copy: [
      'The identity was translated across a broad range of branded touchpoints, allowing the system to remain consistent while adapting to different formats, functions and environments.',
      'Stationery, identification credentials, desk markers, and circular pin badges carry the turquoise accent band, fine turbine silhouettes, and crisp Rubik typography.',
      'Every application reinforces the institutional authority and clean-energy focus of Sangreen Future Renewables.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_11_image.webp',
    supportingImages: [
      '/projects/sangreen-renewables/imgi_13_image.webp',
      '/projects/sangreen-renewables/imgi_14_image.webp',
      '/projects/sangreen-renewables/imgi_15_image.webp',
      '/projects/sangreen-renewables/imgi_12_image.webp',
      '/projects/sangreen-renewables/imgi_19_image.webp'
    ],
    captions: {
      '/projects/sangreen-renewables/imgi_11_image.webp': 'Corporate Business Cards — clean white card stock with Light Sea Green base footer, QR code, and clear typography.',
      '/projects/sangreen-renewables/imgi_13_image.webp': 'Employee ID Card — portrait credential with custom teal lanyard, blood group, department, and emergency contact details.',
      '/projects/sangreen-renewables/imgi_14_image.webp': 'Desk Nameplate — triangular desk acrylic featuring executive title and fine-line wind turbine graphic.',
      '/projects/sangreen-renewables/imgi_15_image.webp': 'Circular Badges — satin-finish pin badges in horizontal and stacked lockups with turquoise rim.',
      '/projects/sangreen-renewables/imgi_12_image.webp': 'Official Letterhead — folded corporate paper stock with contact header and turquoise footer bar.',
      '/projects/sangreen-renewables/imgi_19_image.webp': 'Renewable Energy Graphic Badge — "GROWING A SUSTAINABLE FUTURE" dimensional application.'
    },
    specs: [
      { label: 'PRINT FINISH', value: 'FSC-Certified Uncoated Stock & Satin Laminate' },
      { label: 'ID SYSTEM', value: 'Dual-Sided Security Credential with Teal Webbing' },
      { label: 'HARDWARE', value: 'Brushed Acrylic Desk Plates & Steel Badges' }
    ],
    tags: ['Business Cards', 'ID Cards', 'Letterhead', 'Nameplate', 'Badges']
  },
  {
    id: '05-corporate-comm',
    number: '05',
    title: 'CORPORATE COMMUNICATION',
    category: 'APPLICATIONS',
    heading: 'A SYSTEM THAT WORKS ACROSS FORMATS.',
    statement: 'Structuring complex engineering, EPC capabilities, and wind capacity into clean editorial layouts.',
    copy: [
      'Corporate communication became an important extension of the identity. Information-heavy formats were given a clear hierarchy, balancing technical content with strong visual structure.',
      'The corporate profile brochure presents Sangreen Future Renewables’ (SFR) full service spectrum—including Land Permits, Civil BOP, Surface Logistics, Electrical BOP, and Mechanical BOP—with transparent metrics and bold typographic statements.',
      'Artwork showcases live wind pipeline data (1.5 GW Order Book, 5 GW Enquiry Pipeline, 17 GW WTG Erection) alongside crisp drone site photography and disciplined color-coded service badges.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_16_image.webp',
    captions: {
      '/projects/sangreen-renewables/imgi_16_image.webp': 'Corporate profile brochure — "ACCELERATE THE WIND ENERGY TRANSITION" cover and service capability spread.'
    },
    specs: [
      { label: 'FORMAT', value: 'Multi-Page A4 Landscape / Portrait Profile' },
      { label: 'CAPABILITIES COVERED', value: 'Civil, Electrical & Mechanical BOP, Land Permits, Surface Logistics' },
      { label: 'LIVE PIPELINE STATS', value: '1.5 GW Order Book · 5 GW Enquiry Pipeline · 17 GW WTG Erection' },
      { label: 'AFFILIATION', value: 'Wholly owned subsidiary of Sanghvi Movers Limited' }
    ],
    tags: ['Corporate Profile', 'Brochure Design', 'Information Hierarchy', 'EPC Capabilities']
  },
  {
    id: '06-environmental',
    number: '06',
    title: 'ENVIRONMENTAL BRANDING',
    category: 'ENVIRONMENT',
    heading: 'TAKING THE IDENTITY OFF THE PAGE.',
    statement: 'Transforming corporate architecture into an immersive, kinetic brand environment.',
    copy: [
      'The identity was extended into physical space through environmental graphics, wall treatments, signage and workplace communication. The same visual language becomes architectural rather than simply printed.',
      'Large turquoise murals with fine-line wind turbines activate open-plan workspaces, while acrylic Mission and Vision panels create focal points within executive suites.',
      'Corridors feature directional graphics and the statement "WINDS OF CHANGE BRING POWER.", creating a continuous visual journey through the company’s physical headquarters.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_20_image.webp',
    supportingImages: [
      '/projects/sangreen-renewables/imgi_22_image.webp',
      '/projects/sangreen-renewables/imgi_25_image.webp',
      '/projects/sangreen-renewables/imgi_23_image.webp',
      '/projects/sangreen-renewables/imgi_21_image.webp'
    ],
    captions: {
      '/projects/sangreen-renewables/imgi_20_image.webp': 'Workplace signage — acrylic Mission and Vision panels mounted on full-height turquoise accent walls.',
      '/projects/sangreen-renewables/imgi_22_image.webp': 'Main office mural — wind turbine landscape graphic spanning across open work areas.',
      '/projects/sangreen-renewables/imgi_25_image.webp': 'Corridor graphic installation — "WINDS OF CHANGE BRING POWER." directional wall paired with speech-bubble turbine mural.',
      '/projects/sangreen-renewables/imgi_23_image.webp': 'Meeting zone feature wall — framed quote bubble graphic integrated with office greenery.',
      '/projects/sangreen-renewables/imgi_21_image.webp': 'Executive suite wall — Sangreen Future Renewables logo brandished over sage and sea green ground.'
    },
    specs: [
      { label: 'SUBSTRATES', value: 'Cut Matte Vinyl, Cast Acrylic Panels, Polished Standoffs' },
      { label: 'COLOR EXECUTION', value: 'Custom Tinted Architectural Wall Coatings (#3faca2 matching)' },
      { label: 'TYPOGRAPHY ON WALLS', value: 'High-Scale Rubik Bold in pure white relief' }
    ],
    tags: ['Environmental Graphics', 'Workplace Branding', 'Wall Murals', 'Architectural Signage']
  },
  {
    id: '07-implementation',
    number: '07',
    title: 'REAL-WORLD IMPLEMENTATION',
    category: 'ENVIRONMENT',
    heading: 'THE IDENTITY WAS DESIGNED TO LIVE IN THE REAL WORLD.',
    statement: 'Documentary evidence of physical execution: craftsmanship, installation, and architectural reality.',
    copy: [
      'This section specifically distinguishes the conceptual identity from its physical implementation.',
      'The installation photographs capture installers on ladders applying large-format wall graphics, fitting corridor baseboards, and prepping surfaces amid raw site materials.',
      'Do not hide the imperfections of the installation photography: the slight documentary quality is valuable proof of design systems transitioning into tangible built spaces.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_24_image.webp',
    supportingImages: [
      '/projects/sangreen-renewables/imgi_26_image.webp',
      '/projects/sangreen-renewables/imgi_21_image.webp'
    ],
    captions: {
      '/projects/sangreen-renewables/imgi_24_image.webp': 'Environmental graphics during installation — worker on ladder applying large-format wall vinyl and turbine mural.',
      '/projects/sangreen-renewables/imgi_26_image.webp': 'Translating the visual system into the workplace — installer detailing corridor graphics alongside ladder and tools.',
      '/projects/sangreen-renewables/imgi_21_image.webp': 'Workplace interior fitout — paint preparation, drop cloths, and logo alignment in real construction environment.'
    },
    specs: [
      { label: 'EXECUTION TYPE', value: 'On-Site Large-Format Vinyl & Architectural Installation' },
      { label: 'EVIDENCE', value: 'Documentary On-Site Photography' },
      { label: 'QUALITY', value: 'Authentic physical execution without synthetic 3D gloss' }
    ],
    tags: ['Installation', 'Site Execution', 'Real World Proof', 'Craftsmanship']
  },
  {
    id: '08-exhibition',
    number: '08',
    title: 'EXHIBITION / EXPERIENCE',
    category: 'EXPERIENCE',
    heading: 'A BRAND BUILT TO BE SEEN.',
    statement: 'Translating corporate identity into full-scale exhibition architecture and experiential trade presence.',
    copy: [
      'The identity was also adapted for larger-format brand environments, including exhibition and experiential trade applications.',
      'The Sangreen exhibition pavilion translates identity principles into spatial architecture: white vertical louvers filter sightlines, illuminated header fascias establish presence across trade show halls, and back-lit graphic walls convey technical credibility.',
      'Interior lounge areas incorporate warm hardwood decks, modular white seating, and branded case-study panels under the banner "WE MAKE IT EASY".'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_17_image.webp',
    supportingImages: ['/projects/sangreen-renewables/imgi_18_image.webp'],
    captions: {
      '/projects/sangreen-renewables/imgi_17_image.webp': 'Exhibition booth exterior — 3D architectural perspective showing branded fascia, louvered partition walls, and backlit "WE MAKE IT EASY" feature tower.',
      '/projects/sangreen-renewables/imgi_18_image.webp': 'Exhibition booth interior — VIP hospitality lounge with hardwood decking, modern seating, and technical capability storyboards.'
    },
    specs: [
      { label: 'SPATIAL FORMAT', value: 'Open-Island Exhibition Pavilion' },
      { label: 'MATERIALS', value: 'Illuminated Acrylic Fascias, Vertical Slatted Timber, Hardwood Decking' },
      { label: 'TOUCHPOINTS', value: 'Capabilities Tower, Reception Desk, VIP Lounge & Digital Screens' }
    ],
    tags: ['Exhibition Design', 'Experiential', 'Spatial Architecture', 'Pavilion']
  },
  {
    id: '09-guidelines',
    number: '09',
    title: 'BRAND GUIDELINES',
    category: 'GOVERNANCE',
    heading: 'THE SYSTEM, DOCUMENTED.',
    statement: 'Formalizing the visual framework to govern future brand evolution across global touchpoints.',
    copy: [
      'The Brand Identity Guidelines formalize the visual language and create an authoritative framework for applying the identity consistently across future communication.',
      'The document codifies mark construction, clear space boundaries, minimum sizing thresholds, exact hex and CMYK color values, typography hierarchy in Rubik, and proper usage rules.',
      'The physical 2025 Brand Identity Guidelines publication is itself treated as a key artifact of design excellence.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_28_image.webp',
    supportingImages: [
      '/projects/sangreen-renewables/imgi_3_image.webp',
      '/projects/sangreen-renewables/imgi_7_image.webp',
      '/projects/sangreen-renewables/imgi_8_image.webp'
    ],
    captions: {
      '/projects/sangreen-renewables/imgi_28_image.webp': 'Brand Identity Guidelines (2025 Edition) — authoritative documentation publication cover.',
      '/projects/sangreen-renewables/imgi_3_image.webp': 'Guidelines Cover Layout — large isolated logo mark framed by delicate wind turbine footer graphics.',
      '/projects/sangreen-renewables/imgi_7_image.webp': 'Scale Legibility Rules — minimum reproduction widths for both stacked and horizontal configurations.',
      '/projects/sangreen-renewables/imgi_8_image.webp': 'Colorway Governance — approved multi-ground contrast standards.'
    },
    specs: [
      { label: 'PUBLICATION', value: 'Brand Identity Guidelines (2025)' },
      { label: 'STANDARDS', value: 'Geometry, Clear Space, Color Models, Typography, Digital & Print' },
      { label: 'TARGET AUDIENCE', value: 'Corporate Communications, Vendors, Architectural Contractors' }
    ],
    tags: ['Brand Governance', 'Design System', 'Guidelines', 'Standards']
  },
  {
    id: '10-closing',
    number: '10',
    title: 'CLOSING',
    category: 'GOVERNANCE',
    heading: 'BUILT FOR THE ENERGY AHEAD.',
    statement: 'A complete identity system connecting corporate communication, physical architecture, and clean power.',
    copy: [
      'Sangreen’s identity brings together a distinctive visual mark, a renewable-energy graphic language and a flexible system designed to work across communication, environments and experiences.',
      'From a technical business card or corporate capability brochure to large-scale architectural wall installations and exhibition pavilions, the visual system delivers lasting clarity, authority, and movement.'
    ],
    primaryImage: '/projects/sangreen-renewables/imgi_25_image.webp',
    supportingImages: ['/projects/sangreen-renewables/imgi_27_image.webp'],
    captions: {
      '/projects/sangreen-renewables/imgi_25_image.webp': 'Sangreen Future Renewables — "WINDS OF CHANGE BRING POWER."',
      '/projects/sangreen-renewables/imgi_27_image.webp': 'Bandish Studios collaboration screen — films, ads, branding.'
    },
    specs: [
      { label: 'BRAND SIGNATURE', value: 'Sangreen Future Renewables' },
      { label: 'CORE PROMISE', value: 'Building a Visual Language for a Cleaner Future' },
      { label: 'STATUS', value: 'Fully Implemented Across India & Global Touchpoints' }
    ],
    tags: ['Closing', 'Synthesis', 'Bandish Studios']
  }
];

export const COLOR_PALETTE_DATA = {
  primary: {
    name: 'Light Sea Green',
    hex: '#3faca2',
    cmyk: '71 | 11 | 42 | 0',
    rgb: '63 | 172 | 162',
    description: 'Fresh, vibrant, and future-facing; represents clean energy, wind kinetic momentum, and modern infrastructure.',
    tints: [
      { hex: '#3faca2', label: '100% Base' },
      { hex: '#57c2b8', label: 'Tint 80%' },
      { hex: '#79cec6', label: 'Tint 60%' },
      { hex: '#9bdad4', label: 'Tint 40%' },
      { hex: '#bce7e3', label: 'Tint 20%' },
      { hex: '#e6f6f4', label: 'Tint 10%' }
    ]
  },
  secondary: {
    name: 'Light Grey',
    hex: '#d9d9d9',
    cmyk: '14 | 10 | 11 | 0',
    rgb: '217 | 217 | 217',
    description: 'Neutral architectural foundation; provides subtle division, soft background panels, and technical grounding.',
    tints: [
      { hex: '#aeaeae', label: 'Tint 80%' },
      { hex: '#bdbdbd', label: 'Tint 60%' },
      { hex: '#cbcbcb', label: 'Tint 40%' },
      { hex: '#d9d9d9', label: 'Base' },
      { hex: '#ebebeb', label: 'Tint 20%' },
      { hex: '#f9f9f9', label: 'Tint 10%' }
    ]
  },
  supporting: [
    {
      name: 'Pure White',
      hex: '#FFFFFF',
      rgb: '255 | 255 | 255',
      role: 'Generous white space, contrast clarity, and print surface ground.'
    },
    {
      name: 'Deep Carbon',
      hex: '#111111',
      rgb: '17 | 17 | 17',
      role: 'High-contrast typography, technical annotations, and architectural framing.'
    }
  ]
};

export const TYPOGRAPHY_DATA = {
  family: 'Rubik',
  classification: 'Modern Geometric Sans-Serif',
  source: 'Google Fonts',
  weights: [
    { name: 'Light', weight: '300', usage: 'Editorial captions & technical specifications' },
    { name: 'Regular', weight: '400', usage: 'Body copy & long-form corporate text' },
    { name: 'Medium', weight: '500', usage: 'Subheadings, data labels & navigation tags' },
    { name: 'Bold', weight: '700', usage: 'Section titles & hero statements' },
    { name: 'Black', weight: '900', usage: 'Display logotype & large environmental typography' }
  ],
  sampleText: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890!@#%&()+'
};
