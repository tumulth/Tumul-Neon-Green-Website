export interface SiddhivinayakSection {
  id: string;
  number: string;
  title: string;
  category: 'FOUNDATION' | 'IDENTITY' | 'SYSTEM' | 'APPLICATION' | 'REFINEMENT';
  heading: string;
  statement: string;
  copy: string[];
  primaryImage: string;
  supportingImages?: string[];
  captions?: { [key: string]: string };
  specs?: { label: string; value: string }[];
  tags?: string[];
}

export const PRECAST_SECTIONS: SiddhivinayakSection[] = [
  {
    id: '01-intro',
    number: '01',
    title: 'INTRODUCTION',
    category: 'FOUNDATION',
    heading: 'PRECISION SET IN CONCRETE.',
    statement: 'A comprehensive Brand Kit formalizing structural integrity, industrial scale, and manufacturing excellence.',
    copy: [
      'Siddhivinayak Precast is a manufacturer of critical infrastructure and precast concrete products.',
      'The objective was to create a Brand Kit that reflects the structural integrity, scale, and uncompromising consistency of their engineering.',
      'From massive metro flyover piers to precision underground utilities, the visual identity anchors the company in architectural permanence and engineering discipline.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/cover-brandkit.jpg',
    captions: {
      '/projects/siddhivinayak-precast/cover-brandkit.jpg': 'Official Brand Kit Publication Cover — "Achieving Creativity & Consistency" over raw architectural concrete formwork.'
    },
    specs: [
      { label: 'CLIENT', value: 'Siddhivinayak Precast Pipes Pvt. Ltd.' },
      { label: 'DELIVERABLE', value: 'Brand Kit & Visual Identity Guidelines' },
      { label: 'DISCIPLINE', value: 'Heavy Infrastructure & Industrial Communication' },
      { label: 'COLLABORATOR', value: 'Developed with Bandish Studios' }
    ],
    tags: ['Brand Identity', 'Brand Guidelines', 'Industrial Communication']
  },
  {
    id: '02-foundation',
    number: '02',
    title: 'THE FOUNDATION',
    category: 'FOUNDATION',
    heading: 'BUILDING THE VISION.',
    statement: 'INFRASTRUCTURE AT SCALE.',
    copy: [
      'From high-grade RCC pipes to massive structural pillars, the brand operates at a scale where clarity and reliability are paramount.',
      'The identity needed to mirror this foundational mission: providing heavy engineering solutions that support transportation corridors, stormwater networks, and urban transit systems.',
      'Core product capabilities encompass HDPE Lined Pipes, Junction Boxes, Pole Foundations, Storm Water Chambers, Earth Pit Chambers, Cable Trenches, and Heavy RCC Concrete Pipes manufactured using imported precision machinery.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/foundation-about.jpg',
    captions: {
      '/projects/siddhivinayak-precast/foundation-about.jpg': 'About Us & Corporate Vision — heavy civil metro rail flyover construction utilizing precast concrete piers and segmental girders.'
    },
    specs: [
      { label: 'CORE OFFERINGS', value: 'RCC Pipes, HDPE Lined Pipes, Cable Trenches & Precast Chambers' },
      { label: 'MANUFACTURING', value: 'High-grade raw materials & imported precision machinery' },
      { label: 'SECTOR', value: 'Urban Transit, Highways & Utility Infrastructure' }
    ],
    tags: ['Vision & Mission', 'Infrastructure', 'Civil Engineering', 'Precast Concrete']
  },
  {
    id: '03-mark',
    number: '03',
    title: 'THE MARK',
    category: 'IDENTITY',
    heading: 'THE IDENTITY.',
    statement: 'CONTINUOUS EXCELLENCE.',
    copy: [
      'The primary mark utilizes a continuous infinity loop, symbolizing ongoing progress, quality, and a guiding identity for the company.',
      'It balances industrial weight with forward momentum through an interlocking dual-ribbon form.',
      'The identity system governs primary stacked lockups, horizontal configurations, clean-edge clear-space boundaries, and isolated reproduction on white and Anti-Flash White (#f2f2f3) grounds.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/logo-identity.jpg',
    captions: {
      '/projects/siddhivinayak-precast/logo-identity.jpg': 'Primary Logo Guidelines — continuous infinity mark symbolizing excellence, isolated on white and Anti-Flash White with clear-space rules.'
    },
    specs: [
      { label: 'SYMBOL MOTIF', value: 'Continuous Infinity Loop (Ongoing Progress & Quality)' },
      { label: 'PRIMARY LOCKUPS', value: 'Stacked Wordmark & Horizontal Alignment' },
      { label: 'CLEAR SPACE', value: 'Protected bounding perimeter preserving mark authority' }
    ],
    tags: ['Logo Design', 'Infinity Symbol', 'Clear Space', 'Wordmark']
  },
  {
    id: '04-color',
    number: '04',
    title: 'COLOUR SYSTEM',
    category: 'SYSTEM',
    heading: 'INDUSTRIAL PALETTE.',
    statement: 'HIGH VISIBILITY. STRUCTURAL WEIGHT.',
    copy: [
      'The colour system relies on Deep Carrot Orange for high-visibility accents and forward energy, grounded by Dark Slate Gray and Sonic Silver to represent the concrete and steel of their industry.',
      'The primary high-visibility accent is Deep Carrot Orange (#EC6E2F), providing immediate contrast on job sites and industrial documentation.',
      'The architectural foundation is anchored by Dark Slate Gray (#28585D) and Sonic Silver (#737476), supported by Raisin Black (#231F20) for typography and Anti-Flash White (#f2f2f3) for clean background fields.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/color-palette.jpg',
    captions: {
      '/projects/siddhivinayak-precast/color-palette.jpg': 'Official Color Palette Standards — subtle hues, harmonious elegance with exact CMYK and HEX coordinates.'
    },
    specs: [
      { label: 'DEEP CARROT ORANGE', value: '#EC6E2F (C3 / M70 / Y92 / K0)' },
      { label: 'DARK SLATE GRAY', value: '#28585D (C85 / M50 / Y53 / K29)' },
      { label: 'SONIC SILVER', value: '#737476 (C56 / M48 / Y46 / K12)' },
      { label: 'RAISIN BLACK', value: '#231F20 (C0 / M0 / Y0 / K100)' },
      { label: 'ANTI-FLASH WHITE', value: '#F2F2F3 (C4 / M2 / Y2 / K0)' }
    ],
    tags: ['Color Palette', 'CMYK Specs', 'Industrial Tones', 'High Visibility']
  },
  {
    id: '05-typography',
    number: '05',
    title: 'TYPOGRAPHY SYSTEM',
    category: 'SYSTEM',
    heading: 'TYPOGRAPHY.',
    statement: 'ENGINEERED FOR CLARITY.',
    copy: [
      'Ubuntu was selected as the primary typeface—a modern, clean sans-serif that balances corporate professionalism with structural readability across digital interfaces and printed materials.',
      'Its clean lines, subtle curves, and excellent letterform distinction make it dependable for technical specifications, product literature, and formal corporate communication.',
      'The hierarchy leverages Ubuntu Bold for high-impact headings and industrial statements, Ubuntu Medium for navigational labels, and Ubuntu Regular and Light for body copy and dense tables.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/typography-ubuntu.jpg',
    supportingImages: ['/projects/siddhivinayak-precast/typeface-weights.jpg'],
    captions: {
      '/projects/siddhivinayak-precast/typography-ubuntu.jpg': 'Typography Standards — Ubuntu typeface showcase, glyph set, and corporate personality statement.',
      '/projects/siddhivinayak-precast/typeface-weights.jpg': 'Typeface Comparison — Aa (Ubuntu Regular) and Bb (Ubuntu Bold) structural comparison.'
    },
    specs: [
      { label: 'PRIMARY TYPEFACE', value: 'Ubuntu' },
      { label: 'WEIGHTS UTILIZED', value: 'Bold (700), Medium (500), Regular (400), Light (300)' },
      { label: 'ATTRIBUTES', value: 'Modern, highly legible, structural sans-serif' }
    ],
    tags: ['Typography', 'Ubuntu Font', 'Hierarchy', 'Typeface Weights']
  },
  {
    id: '06-applications',
    number: '06',
    title: 'CORPORATE APPLICATIONS',
    category: 'APPLICATION',
    heading: 'STRUCTURAL APPLICATIONS.',
    statement: 'THE IDENTITY IN USE.',
    copy: [
      'A robust identity must maintain its integrity across all touchpoints. The Siddhivinayak Precast system extends with precision across everyday corporate materials, balancing industrial textures with clean, functional layouts.',
      'Stationery, executive credentials, correspondence systems, and formal mailings incorporate the infinity mark, dual-tone orange and slate color distribution, and disciplined Ubuntu typography.',
      'The tactile materials used in presentation mockups—heavy ridged industrial planes and cast concrete slabs—celebrate the brand’s manufacturing roots.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/mockup-businesscard.jpg',
    supportingImages: [
      '/projects/siddhivinayak-precast/mockup-letterhead.jpg',
      '/projects/siddhivinayak-precast/mockup-idcard.jpg',
      '/projects/siddhivinayak-precast/mockup-envelope.jpg'
    ],
    captions: {
      '/projects/siddhivinayak-precast/mockup-businesscard.jpg': 'Executive Business Cards — front and back presentation resting on dark, ridged industrial substrate.',
      '/projects/siddhivinayak-precast/mockup-letterhead.jpg': 'Corporate Letterhead — tri-folded formal letterhead resting on raw cast concrete.',
      '/projects/siddhivinayak-precast/mockup-idcard.jpg': 'Employee ID Card — security credential with high-visibility Deep Carrot Orange lanyard and clip.',
      '/projects/siddhivinayak-precast/mockup-envelope.jpg': 'Corporate A4 Envelope — clean address face with signature Deep Carrot Orange closure flap.'
    },
    specs: [
      { label: 'BUSINESS CARDS', value: 'Dual-sided card stock on dark industrial ridged plane' },
      { label: 'LETTERHEAD', value: 'Tri-folded executive stationery on raw aggregate concrete' },
      { label: 'ID CARD', value: 'Vertical security badge with orange woven nylon lanyard' },
      { label: 'ENVELOPE', value: 'A4 mailing format with full-bleed orange flap accent' }
    ],
    tags: ['Business Cards', 'Letterhead', 'ID Card', 'Envelope', 'Industrial Mockups']
  },
  {
    id: '07-closing',
    number: '07',
    title: 'CLOSING & CREDIT',
    category: 'REFINEMENT',
    heading: 'A FOUNDATION FOR GROWTH.',
    statement: 'Uncompromising engineering, unified under one definitive brand standard.',
    copy: [
      'The Siddhivinayak Precast Brand Kit formalizes the visual language, ensuring that whether on a manufacturing floor or a corporate document, the brand remains as unyielding as the products they build.',
      'By balancing brutalist industrial weight with contemporary typographic precision, the identity positions Siddhivinayak Precast as an indispensable infrastructure partner.'
    ],
    primaryImage: '/projects/siddhivinayak-precast/closing-credit.jpg',
    captions: {
      '/projects/siddhivinayak-precast/closing-credit.jpg': 'Closing Presentation Slide — Bandish Studios credit over concrete architectural structure, mirroring the hero opening in a complete structural loop.'
    },
    specs: [
      { label: 'BRAND SYSTEM', value: 'Siddhivinayak Precast Brand Kit' },
      { label: 'PROJECT CONCLUSION', value: 'Achieving Creativity & Consistency' },
      { label: 'CREDIT', value: 'Bandish Studios — Creating Magic: one frame at a time' }
    ],
    tags: ['Brand Kit', 'Bandish Studios', 'Closing', 'Structural Loop']
  }
];

export const PRECAST_COLOR_PALETTE = [
  {
    name: 'Deep Carrot Orange',
    hex: '#EC6E2F',
    cmyk: 'C3 / M70 / Y92 / K0',
    rgb: '236 / 110 / 47',
    gradient: '#e8843c → #e8683c',
    role: 'Primary High-Visibility Accent & Forward Energy',
    isPrimary: true,
    textColor: 'text-white'
  },
  {
    name: 'Dark Slate Gray',
    hex: '#28585D',
    cmyk: 'C85 / M50 / Y53 / K29',
    rgb: '40 / 88 / 93',
    gradient: '#335459 → #1a393c',
    role: 'Primary Structural Anchor & Engineering Weight',
    isPrimary: true,
    textColor: 'text-white'
  },
  {
    name: 'Sonic Silver',
    hex: '#737476',
    cmyk: 'C56 / M48 / Y46 / K12',
    rgb: '115 / 116 / 118',
    role: 'Supporting Concrete & Steel Mid-Tone',
    isPrimary: false,
    textColor: 'text-white'
  },
  {
    name: 'Raisin Black',
    hex: '#231F20',
    cmyk: 'C0 / M0 / Y0 / K100',
    rgb: '35 / 31 / 32',
    role: 'High-Contrast Technical Typography & Heavy Bases',
    isPrimary: false,
    textColor: 'text-white'
  },
  {
    name: 'Anti-Flash White',
    hex: '#F2F2F3',
    cmyk: 'C4 / M2 / Y2 / K0',
    rgb: '242 / 242 / 243',
    role: 'Architectural Ground & Subdued Background Surface',
    isPrimary: false,
    textColor: 'text-[#231F20]'
  }
];

export const PRECAST_TYPOGRAPHY_SPECS = {
  family: 'Ubuntu',
  classification: 'Modern Industrial Sans-Serif',
  source: 'Google Fonts',
  weights: [
    {
      name: 'Ubuntu Bold',
      weight: '700',
      sample: 'Aa Bb Cc Dd Ee Ff Gg 1234567890',
      usage: 'Large display statements, chapter headings, and industrial wordmark emphasis'
    },
    {
      name: 'Ubuntu Medium',
      weight: '500',
      sample: 'Aa Bb Cc Dd Ee Ff Gg 1234567890',
      usage: 'Section subtitles, navigation tags, and metadata headers'
    },
    {
      name: 'Ubuntu Regular',
      weight: '400',
      sample: 'Aa Bb Cc Dd Ee Ff Gg 1234567890',
      usage: 'Standard corporate body copy, narrative explanations, and letterhead correspondence'
    },
    {
      name: 'Ubuntu Light',
      weight: '300',
      sample: 'Aa Bb Cc Dd Ee Ff Gg 1234567890',
      usage: 'Technical product specification captions and legal copyright details'
    }
  ],
  glyphSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()_+<>?/'
};
