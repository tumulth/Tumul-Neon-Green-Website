export interface SangreenSection {
  id: string;
  number: string;
  title: string;
  heading: string;
  copy: string[];
  category: 'FOUNDATION' | 'IDENTITY' | 'SYSTEM' | 'APPLICATIONS' | 'MERCHANDISE' | 'GOVERNANCE';
  images: {
    src: string;
    alt: string;
    caption?: string;
    layout?: 'full' | 'half' | 'third';
  }[];
  specDetails?: {
    label: string;
    value: string;
  }[];
}

export const SANGREEN_SECTIONS: SangreenSection[] = [
  {
    id: 'cover',
    number: '01',
    title: 'COVER',
    heading: 'BRAND GUIDELINES',
    copy: [
      'A 26-chapter corporate brand manual engineered for intermodal freight scale and highway visibility.',
    ],
    category: 'FOUNDATION',
    images: [
      {
        src: '/projects/sangreen/imgi_3_image.webp',
        alt: 'Sangreen Logistics Brand Guidelines Cover',
        caption: '01 — PRIMARY SPECIFICATION COVER // SANGREEN LOGISTICS',
        layout: 'full',
      },
    ],
  },
  {
    id: 'brand-overview',
    number: '02',
    title: 'BRAND OVERVIEW',
    heading: 'A BRAND BUILT TO MOVE.',
    copy: [
      'Sangreen Logistics is built around the idea that movement should be intelligent, reliable and purposeful.',
      'Our identity reflects the same principles that define our approach to logistics: clarity, efficiency, precision and forward movement.',
      'Every touchpoint — from stationery and employee identification to merchandise and digital communication — should work together as one coherent visual system.',
    ],
    category: 'FOUNDATION',
    images: [
      {
        src: '/projects/sangreen/imgi_4_image.webp',
        alt: 'Sangreen Logistics heavy freight transit on modern highway',
        caption: '02 — OPERATIONAL FLEET // HIGHWAY LOGISTICS IN TRANSIT',
        layout: 'full',
      },
    ],
  },
  {
    id: 'brand-idea',
    number: '03',
    title: 'BRAND IDEA',
    heading: 'MOVEMENT, MADE CLEAR.',
    copy: [
      'Logistics is about connecting what matters.',
      "Sangreen's visual identity translates movement into a simple, structured and recognisable system.",
      'The combination of deep blue and green represents:',
      'BLUE: Trust · Stability · Precision · Infrastructure',
      'GREEN: Growth · Sustainability · Progress · Continuity',
      'Together, they create a visual language that feels dependable while remaining forward-looking.',
    ],
    category: 'FOUNDATION',
    images: [
      {
        src: '/projects/sangreen/imgi_5_image.webp',
        alt: 'Sangreen Logistics corporate building facade and dimensional architectural signage',
        caption: '03 — ARCHITECTURAL PRESENCE // SANGREEN HEADQUARTERS SIGNAGE',
        layout: 'full',
      },
    ],
  },
  {
    id: 'logo',
    number: '04',
    title: 'LOGO',
    heading: 'THE SANGREEN LOGO',
    copy: [
      'The Sangreen Logistics logo is the primary identifier of the brand.',
      'It combines a strong typographic wordmark with a distinctive continuous-loop symbol representing movement, connection and continuity.',
      'The logo should always be reproduced accurately and consistently.',
    ],
    category: 'IDENTITY',
    images: [
      {
        src: '/projects/sangreen/imgi_6_image.webp',
        alt: 'Sangreen Logistics primary logo isolated on white',
        caption: '04A — PRIMARY LOGO ON WHITE',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_10_image.webp',
        alt: 'Sangreen Logistics horizontal logo presentation',
        caption: '04B — HORIZONTAL LOGO LOCKUP',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_7_image.webp',
        alt: 'Sangreen Logistics logo anatomy breakdown: Wordmark and Symbol',
        caption: '04C — LOGO ANATOMY (WORDMARK + SYMBOL)',
        layout: 'full',
      },
    ],
  },
  {
    id: 'logo-construction',
    number: '05',
    title: 'LOGO CONSTRUCTION',
    heading: 'BUILT WITH PRECISION.',
    copy: [
      'The construction of the Sangreen logo is based on a carefully balanced relationship between typography and symbol.',
      'Its proportions must remain unchanged across every application.',
    ],
    category: 'IDENTITY',
    images: [
      {
        src: '/projects/sangreen/imgi_9_image.webp',
        alt: 'Sangreen Logistics technical logo construction grid with coordinate axes',
        caption: '05A — GEOMETRIC LOGO GRID & ALIGNMENT MARKERS',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_12_image.webp',
        alt: 'Sangreen Logistics word logo dimensional proportion anatomy',
        caption: '05B — WORDMARK ANATOMY (4.67 IN × 0.66 IN OFFSET)',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_13_image.webp',
        alt: 'Sangreen Logistics monogram logo geometry',
        caption: '05C — MONOGRAM CONTINUOUS-LOOP LOGO SYSTEM',
        layout: 'full',
      },
    ],
  },
  {
    id: 'logo-clear-space',
    number: '06',
    title: 'LOGO CLEAR SPACE',
    heading: 'PROTECT THE MARK.',
    copy: [
      'Clear space ensures that the Sangreen logo remains visually strong and recognisable.',
      'No typography, photography, graphic element or other logo should enter the defined clear-space area.',
    ],
    category: 'IDENTITY',
    images: [
      {
        src: '/projects/sangreen/imgi_14_image.webp',
        alt: 'Sangreen Logistics clear space boundary diagram with X-unit margins',
        caption: '06 — CLEAR SPACE SPECIFICATION // X-UNIT PROPORTIONS',
        layout: 'full',
      },
    ],
  },
  {
    id: 'logo-minimum-size',
    number: '07',
    title: 'LOGO MINIMUM SIZE',
    heading: 'LEGIBILITY AT EVERY SCALE.',
    copy: [
      'The Sangreen logo should always remain large enough to preserve clarity and recognisability.',
      'When reproducing the logo at smaller sizes, maintain sufficient visual separation between the wordmark and surrounding elements.',
    ],
    category: 'IDENTITY',
    images: [
      {
        src: '/projects/sangreen/imgi_15_image.webp',
        alt: 'Sangreen Logistics minimum reproduction size benchmarks (W 240px, W 120px, W 82px)',
        caption: '07 — MINIMUM REPRODUCTION THRESHOLDS // SCREEN & PRINT LIMITS',
        layout: 'full',
      },
    ],
  },
  {
    id: 'logo-colour',
    number: '08',
    title: 'LOGO COLOUR',
    heading: 'THE CORE COLOUR SIGNATURE.',
    copy: [
      'The Sangreen identity relies on a controlled relationship between deep blue and green.',
      'Blue establishes trust, structure and reliability.',
      'Green introduces movement, progress and sustainability.',
      'Together they form the primary visual signature of Sangreen Logistics.',
    ],
    category: 'IDENTITY',
    images: [
      {
        src: '/projects/sangreen/imgi_16_image.webp',
        alt: 'Sangreen Logistics approved logo colour versions: Original, Dark Blue Mono, Forest Green Mono, and Reverse White',
        caption: '08A — FOUR AUTHORIZED COLOUR LOCKUPS',
        layout: 'full',
      },
      {
        src: '/projects/sangreen/imgi_8_image.webp',
        alt: 'Sangreen Logistics core color palette specifications for Dusk Blue and Light Forest Green',
        caption: '08B — DUSK BLUE & LIGHT FOREST GREEN VALUE MATRICES',
        layout: 'full',
      },
    ],
  },
  {
    id: 'logo-misuse',
    number: '09',
    title: 'LOGO MISUSE',
    heading: 'CONSISTENCY IS NON-NEGOTIABLE.',
    copy: [
      'To protect the integrity of the Sangreen identity, the logo must never be altered.',
      'Do not stretch or compress the logo. Do not rotate the logo. Do not change its colours. Do not add effects or drop shadows. Do not alter the symbol, change the typography, place the mark over low-contrast imagery, or rearrange the logo elements.',
    ],
    category: 'IDENTITY',
    images: [
      {
        src: '/projects/sangreen/imgi_17_image.webp',
        alt: 'Sangreen Logistics prohibited logo manipulations showing unapproved rotation, distortion, low-contrast, and reordering',
        caption: '09 — UNAPPROVED ALTERATIONS & RESTRAINTS // RED STRIKE VIOLATIONS',
        layout: 'full',
      },
    ],
  },
  {
    id: 'colour-palette',
    number: '10',
    title: 'COLOUR PALETTE',
    heading: 'A SYSTEM OF TRUST AND PROGRESS.',
    copy: [
      'SANGREEN BLUE (#274482): Deep, confident and structural. The grounding corporate anchor.',
      'SANGREEN GREEN (#459652): Fresh, progressive and sustainability-driven. Signifies momentum and continuity.',
      'WHITE (#FFFFFF): Used extensively to create clarity, breathing room and architectural restraint.',
      'DARK NEUTRAL (#000000): Used for body copy, tabular information, and secondary specifications.',
    ],
    category: 'SYSTEM',
    images: [
      {
        src: '/projects/sangreen/imgi_21_image.webp',
        alt: 'Sangreen Logistics full corporate color palette with typographic swatches',
        caption: '10 — CORPORATE COLOR SYSTEM // DIGITAL & PRINT VALUES',
        layout: 'full',
      },
    ],
  },
  {
    id: 'typography',
    number: '11',
    title: 'TYPOGRAPHY',
    heading: 'TYPOGRAPHY WITH PURPOSE.',
    copy: [
      'Typography should feel clear, contemporary and highly legible across global supply-chain documentation.',
      'The brand utilizes Rubik across its corporate communication:',
      'HEADLINES: Rubik Bold & Black — Strong, confident and concise.',
      'SUBHEADINGS: Rubik Medium — Structured and informative.',
      'BODY COPY: Rubik Regular — Highly readable, objective and neutral.',
      'CAPTIONS & SPECS: Rubik Light & Regular (8pt - 10pt) — Small, functional and precise.',
    ],
    category: 'SYSTEM',
    images: [
      {
        src: '/projects/sangreen/imgi_19_image.webp',
        alt: 'Rubik typeface specimen board showing Light, Regular, Medium, Bold, and Black weights',
        caption: '11A — PRIMARY CORPORATE TYPEFACE // RUBIK SYSTEM',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_20_image.webp',
        alt: 'Sangreen Logistics point size scale: Headings 32pt/28pt, Subheadings 24pt/20pt, Body 18pt/16pt, Captions 10pt/8pt',
        caption: '11B — TYPOGRAPHIC HIERARCHY & POINT SIZES',
        layout: 'half',
      },
    ],
  },
  {
    id: 'corporate-applications',
    number: '12',
    title: 'CORPORATE APPLICATIONS',
    heading: 'THE IDENTITY IN USE.',
    copy: [
      'A strong identity is defined not only by its logo, but by how consistently it appears across everyday business communication.',
      'The Sangreen system extends across stationery, documentation, identification and physical touchpoints.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_18_image.webp',
        alt: 'Sangreen Logistics corporate workplace system overview',
        caption: '12A — WORKPLACE SYSTEM ENVIRONMENT',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_22_image.webp',
        alt: 'Sangreen Logistics corporate application design development',
        caption: '12B — COLLATERAL PLANNING & WIREFRAME DIRECTION',
        layout: 'half',
      },
    ],
  },
  {
    id: 'business-card',
    number: '13',
    title: 'BUSINESS CARD',
    heading: 'BUSINESS CARD',
    copy: [
      'A precise and minimal business card system designed around clarity and hierarchy.',
      'Front: Centered Sangreen logo with grounded blue band and website URL.',
      'Back: Executive credentials (Lorem Ipsum, Sr. Manager – Marketing Communication), direct phone, email, registered office address in Tathwade, Pune, and scannable QR verification code.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_23_image.webp',
        alt: 'Sangreen Logistics business card front and back layout',
        caption: '13A — FRONT & BACK ARTWORK',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_24_image.webp',
        alt: 'Sangreen Logistics business card dimensional specifications (3.5 in × 2.01 in)',
        caption: '13B — PRODUCTION SPECIFICATIONS & SIZES IN INCHES',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_25_image.webp',
        alt: 'Sangreen Logistics business cards in realistic premium printed stack mockup',
        caption: '13C — PRINTED STACK SPECIFICATION MOCKUP',
        layout: 'full',
      },
    ],
  },
  {
    id: 'letterhead',
    number: '14',
    title: 'LETTERHEAD',
    heading: 'LETTERHEAD',
    copy: [
      'The Sangreen letterhead establishes a consistent foundation for formal business communication.',
      'The layout prioritises clear information hierarchy, generous white space, strong logo placement at the upper right, and restrained use of brand colour anchored by a grounded navy footer band.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_26_image.webp',
        alt: 'Sangreen Logistics formal corporate letterhead flat artwork',
        caption: '14A — FLAT ARTWORK WITH CORPORATE IDENTIFIERS',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_27_image.webp',
        alt: 'Sangreen Logistics letterhead dimensional blueprints (8.27 in × 11.69 in, A4)',
        caption: '14B — A4 DIMENSIONAL SPECIFICATIONS (8.27 × 11.69 IN)',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_28_image.webp',
        alt: 'Sangreen Logistics printed paper letterhead folded mockup on textured concrete surface',
        caption: '14C — PRINTED TEXTURE MOCKUP',
        layout: 'full',
      },
    ],
  },
  {
    id: 'envelope',
    number: '15',
    title: 'ENVELOPE',
    heading: 'ENVELOPE',
    copy: [
      'The envelope extends the identity into everyday physical communication.',
      'The design uses restrained branding, allowing the Sangreen logo and contact information to remain immediately identifiable without overwhelming the format.',
      'Available in both standard 12 × 4 inch commercial format and full A4 document mailing format.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_29_image.webp',
        alt: 'Sangreen Logistics 12x4 inch commercial envelope artwork with navy flap',
        caption: '15A — 12×4 INCH ENVELOPE DESIGN',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_30_image.webp',
        alt: 'Sangreen Logistics 12x4 inch envelope technical production dimensions',
        caption: '15B — 12×4 INCH PRODUCTION BLUEPRINT',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_31_image.webp',
        alt: 'Sangreen Logistics 12x4 inch envelope realistic printed studio mockup',
        caption: '15C — 12×4 INCH COMMERCIAL ENVELOPE MOCKUP',
        layout: 'full',
      },
      {
        src: '/projects/sangreen/imgi_32_image.webp',
        alt: 'Sangreen Logistics A4 document envelope flat artwork',
        caption: '15D — A4 DOCUMENT ENVELOPE ARTWORK',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_33_image.webp',
        alt: 'Sangreen Logistics A4 envelope dimensional blueprint (8.28 in × 12.64 in)',
        caption: '15E — A4 ENVELOPE DIMENSIONAL BLUEPRINT',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_34_image.webp',
        alt: 'Sangreen Logistics A4 document envelope realistic physical mockup',
        caption: '15F — A4 DOCUMENT ENVELOPE PHYSICAL MOCKUP',
        layout: 'full',
      },
    ],
  },
  {
    id: 'employee-id-card',
    number: '16',
    title: 'EMPLOYEE ID CARD',
    heading: 'EMPLOYEE ID CARD',
    copy: [
      'Employee identification combines functionality with a strong, recognisable Sangreen presence.',
      'The system uses the brand’s blue and green edge treatment to create a consistent visual signature.',
      'Front: Logo, employee portrait, full name, ID number, blood group, department, emergency contact.',
      'Back: Terms & conditions, office contacts, corporate headquarters address, and secondary logo mark.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_35_image.webp',
        alt: 'Sangreen Logistics employee identification card front and back layout',
        caption: '16A — FRONT & BACK DESIGN WITH DUAL-COLOR EDGE RAILS',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_36_image.webp',
        alt: 'Sangreen Logistics employee ID card dimensional specification (2.1 in × 3.37 in)',
        caption: '16B — CR80 STANDARD DIMENSIONS (2.1 × 3.37 IN)',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_37_image.webp',
        alt: 'Sangreen Logistics ID badge on royal blue custom woven lanyard mockup',
        caption: '16C — LANYARD AND CREDENTIAL PASS MOCKUP',
        layout: 'full',
      },
    ],
  },
  {
    id: 'folder',
    number: '17',
    title: 'FOLDER',
    heading: 'CORPORATE FOLDER',
    copy: [
      'The corporate folder provides a simple, professional container for official documents, tender submittals, and client contracts.',
      'Keep the exterior minimal and brand-led with a crisp white ground and lower-centered mark.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_38_image.webp',
        alt: 'Sangreen Logistics corporate folder closed exterior, open interior, and inserted document',
        caption: '17 — CORPORATE PRESENTATION FOLDER (CLOSED, OPEN, INSERTED)',
        layout: 'full',
      },
    ],
  },
  {
    id: 'name-tag',
    number: '18',
    title: 'NAME TAG',
    heading: 'NAME TAG',
    copy: [
      'A simple workplace identification system designed to remain consistent with the wider Sangreen identity.',
      'Desk-level branding maintains operational authority in conference rooms and executive workstations.',
    ],
    category: 'APPLICATIONS',
    images: [
      {
        src: '/projects/sangreen/imgi_39_image.webp',
        alt: 'Sangreen Logistics executive desk name tag mockup (Lorem Ipsum, Sr. Manager – Marketing Communication)',
        caption: '18 — EXECUTIVE DESK IDENTIFICATION SIGNAGE',
        layout: 'full',
      },
    ],
  },
  {
    id: 'merchandise',
    number: '19',
    title: 'MERCHANDISE',
    heading: 'BRAND BEYOND THE OFFICE.',
    copy: [
      'Sangreen merchandise extends the identity into everyday objects and employee experiences.',
      'Each item should feel like a natural extension of the brand — functional, understated and recognisable.',
    ],
    category: 'MERCHANDISE',
    images: [
      {
        src: '/projects/sangreen/imgi_40_image.webp',
        alt: 'Sangreen Logistics corporate merchandise flat-lay with notebook, badge, and mobile touchpoints',
        caption: '19 — CORPORATE MERCHANDISE OVERVIEW FLAT-LAY',
        layout: 'full',
      },
    ],
  },
  {
    id: 'cap',
    number: '20',
    title: 'CAP',
    heading: 'CAP',
    copy: [
      'The Sangreen cap uses a restrained front-facing logo application while retaining the core blue and green identity.',
      'Features a crisp white crown paired with an ocean blue visor and precision direct embroidery.',
    ],
    category: 'MERCHANDISE',
    images: [
      {
        src: '/projects/sangreen/imgi_42_image.webp',
        alt: 'Sangreen Logistics two-tone cap with embroidered logo on white crown and blue visor',
        caption: '20 — EMBROIDERED TWO-TONE FIELD CAP',
        layout: 'full',
      },
    ],
  },
  {
    id: 'badge',
    number: '21',
    title: 'BADGE',
    heading: 'BADGE',
    copy: [
      'Badges provide a compact and flexible way to extend the Sangreen identity across events, employees and corporate initiatives.',
      'The system encompasses rectangular pin badges as well as white and blue circular button badges with stainless steel fasteners.',
    ],
    category: 'MERCHANDISE',
    images: [
      {
        src: '/projects/sangreen/imgi_41_image.webp',
        alt: 'Sangreen Logistics corporate pin badges: rectangular acrylic, circular white, circular blue',
        caption: '21 — RECTANGULAR & CIRCULAR EVENT PIN BADGES (FRONT & BACK)',
        layout: 'full',
      },
    ],
  },
  {
    id: 'apparel',
    number: '22',
    title: 'APPAREL / LOGO PLACEMENT',
    heading: 'LOGO PLACEMENT',
    copy: [
      'The Sangreen Logistics logo should be placed on the front left side of the chest.',
      'Avoid placing the logo on the back of the neck, stomach, or sleeves during standard production.',
      'For campaigns, events or co-branding, approved sponsor marks may appear on sleeves or the upper back.',
      'Any deviation from the standard logo placement requires approval from the Corporate Communications team.',
    ],
    category: 'MERCHANDISE',
    images: [
      {
        src: '/projects/sangreen/imgi_43_image.webp',
        alt: 'Sangreen Logistics corporate polo apparel placement diagram with correct/incorrect zones and co-branding rules',
        caption: '22 — APPAREL PLACEMENT SPECIFICATION & CO-BRANDING PROTOCOLS',
        layout: 'full',
      },
    ],
  },
  {
    id: 'corporate-gifts',
    number: '23',
    title: 'CORPORATE GIFTS',
    heading: 'CORPORATE GIFTS',
    copy: [
      'Sangreen promotional materials should reflect the same values as the core identity: useful, considered and recognisable.',
      'Applications include: precision swivel USB drive, matte ballpoint pen, ceramic coffee mug, hardcover elastic notebook, and insulated vacuum water bottle.',
      'All logo applications must follow established rules for spacing, colour and sizing on pure white substrates.',
    ],
    category: 'MERCHANDISE',
    images: [
      {
        src: '/projects/sangreen/imgi_44_image.webp',
        alt: 'Sangreen Logistics corporate gift suite: USB drive, pen, mug, notebook, and vacuum bottle',
        caption: '23 — EXECUTIVE GIFT COLLECTION ON WHITE SUBSTRATES',
        layout: 'full',
      },
    ],
  },
  {
    id: 'digital-communication',
    number: '24',
    title: 'DIGITAL COMMUNICATION',
    heading: 'DIGITAL COMMUNICATION',
    copy: [
      'The Sangreen digital presence should feel clear, consistent and purposeful.',
      'Digital communication maintains the same principles as the physical identity: Clarity, Consistency, Hierarchy, Recognition.',
      'Every digital touchpoint should feel unmistakably Sangreen without relying on excessive branding.',
    ],
    category: 'GOVERNANCE',
    images: [
      {
        src: '/projects/sangreen/imgi_45_image.webp',
        alt: 'Sangreen Logistics digital communication channels and multi-screen mobile experience',
        caption: '24 — MULTI-DEVICE DIGITAL COMMUNICATION ECOSYSTEM',
        layout: 'full',
      },
    ],
  },
  {
    id: 'brand-consistency',
    number: '25',
    title: 'BRAND CONSISTENCY',
    heading: 'ONE SYSTEM. EVERY TOUCHPOINT.',
    copy: [
      'From a business card to a digital announcement, every Sangreen touchpoint should feel like part of the same system.',
      'Consistency creates recognition. Recognition creates trust. And trust is fundamental to how Sangreen moves business forward.',
    ],
    category: 'GOVERNANCE',
    images: [
      {
        src: '/projects/sangreen/imgi_16_image.webp',
        alt: 'Sangreen Logistics brand lockup matrix',
        caption: '25A — LOGO MATRIX',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_25_image.webp',
        alt: 'Sangreen Logistics printed collateral',
        caption: '25B — COLLATERAL SUITE',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_37_image.webp',
        alt: 'Sangreen Logistics ID credential pass',
        caption: '25C — PERSONNEL CREDENTIALS',
        layout: 'half',
      },
      {
        src: '/projects/sangreen/imgi_44_image.webp',
        alt: 'Sangreen Logistics executive gifts',
        caption: '25D — TOUCHPOINT HARMONY',
        layout: 'half',
      },
    ],
  },
  {
    id: 'closing',
    number: '26',
    title: 'CLOSING',
    heading: 'BUILT TO MOVE FORWARD.',
    copy: [
      'Sangreen Logistics',
      'A brand system designed for clarity, consistency and continuous movement.',
      'SANGREEN LOGISTICS',
      'MOVEMENT, MADE CLEAR.',
    ],
    category: 'GOVERNANCE',
    images: [
      {
        src: '/projects/sangreen/imgi_46_image.webp',
        alt: 'Sangreen Logistics project closing credit by Bandish Films | Ads | Branding',
        caption: '26 — BRAND GUIDELINES RATIFICATION // BANDISH STUDIOS',
        layout: 'full',
      },
    ],
  },
];
