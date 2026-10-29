export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryTag: string;
  /** Short discipline label shown in indexes, e.g. "Website". */
  discipline: string;
  /** Where the work lives, when it is a real place. */
  place?: string;
  /** Agency the work was done with, if any. */
  agency?: string;
  year: string;
  client: string;
  role: string[];
  deliverables: string[];
  heroTagline: string;
  /** One sentence, used in indexes and as the page's meta description. */
  summary: string;
  /** The <title> of the project's own page. */
  seoTitle: string;
  /** 4:3 cover image used in indexes and social previews. */
  cover: string;
  coverAlt: string;
  liveUrl?: string;
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
    id: 'subculture',
    number: '01',
    title: 'Subculture',
    category: 'WEBSITE DESIGN',
    categoryTag: 'Café website, Aundh',
    discipline: 'Website',
    place: 'Aundh, Pune',
    year: '2026',
    client: 'Subculture, a creative coffee community',
    role: ['Website design', 'UI/UX', 'Build', 'Art direction'],
    deliverables: ['Responsive website', 'Full menu with prices', 'Bar and kitchen sections', 'Visit, hours and directions'],
    heroTagline: 'A website for a café in Aundh that puts the whole menu, with prices, in the café’s own cobalt blue.',
    summary:
      'Website for Subculture, a café in Aundh, Pune: the full menu with prices, designed and built around the café’s cobalt blue.',
    seoTitle: 'Subculture café website, Aundh, Pune — Tumul Thakur',
    cover: '/covers/subculture.jpg',
    coverAlt: 'Subculture café website home screen: a latte in a blue Subculture cup on a cobalt field',
    liveUrl: 'https://subculture-website-03out.vercel.app/',
    challenge:
      'Subculture is a café and kitchen in Aundh that calls itself a creative coffee community. Most café websites are a logo, a few photos and an Instagram link, which leaves the questions people actually have unanswered: what’s on the menu, what it costs, when it’s open and how to get there.',
    approach:
      'I built the site around the café’s cobalt blue and its own product photography. The menu is the main content: every drink and dish with its price, split the way the café is, into the bar and the kitchen. A ticker shows what’s being poured, the café’s five ideals sit in a list you can open, and the address, hours and directions close every visit.',
    visualSystem: {
      fontPairing: 'Archivo for display, Geist Mono for labels, Inter for text',
      primaryColors: [
        { name: 'Cobalt', hex: '#33379D', role: 'The café’s blue: grounds and cups' },
        { name: 'Night', hex: '#0C0C0E', role: 'Bar and kitchen menus' },
        { name: 'Stone', hex: '#BAB3A9', role: 'The introduction' },
        { name: 'Lilac white', hex: '#DCDCE8', role: 'Type on blue' },
      ],
      gridConcept: 'A menu board: item on the left, price on the right',
      designPhilosophy: 'Answer the customer’s questions on the first scroll.',
    },
    applications: [
      { title: 'The bar', category: 'Menu', description: 'Hot, iced, boba and bottled drinks, each with its price, grouped the way they are ordered.' },
      { title: 'The kitchen', category: 'Menu', description: 'Burgers, sandwiches, small plates and desserts, from ₹200 to ₹480, listed in full.' },
      { title: 'Ideals', category: 'Story', description: 'Five short ideals, from carefully sourced to every creative welcome, set as an open list.' },
      { title: 'Visit', category: 'Practical', description: 'Raagdhari Apartments, Aundh. Open 8am to 11pm, with directions and Instagram.' },
    ],
    outcome:
      'The site is live. Every item on the menu, its price and the café’s hours are on the page as real text, so they can be found by search and read on a phone.',
    featured: true,
    accentColor: '#33379D',
  },
  {
    id: 'bimacme-website',
    number: '02',
    title: 'Bimacme',
    category: 'WEBSITE DESIGN',
    categoryTag: 'Engineering website, Pune and London',
    discipline: 'Website',
    place: 'Pune · London',
    year: '2026',
    client: 'Bimacme Engineering Services',
    role: ['Website design', 'UI/UX', 'Build', 'Art direction'],
    deliverables: ['Responsive website', 'Fifteen service sections', 'Project stories', 'Technical journal'],
    heroTagline: 'A website for a Pune engineering firm that sells MEP BIM coordination to contractors in the UK.',
    summary:
      'Website for Bimacme, a Pune MEP BIM consultancy with offices in London and the USA: fifteen services, project stories and a technical journal.',
    seoTitle: 'Bimacme engineering website, Pune and London — Tumul Thakur',
    cover: '/covers/bimacme-website.jpg',
    coverAlt: 'Bimacme website home screen: a city skyline under construction at dusk with the line “Original & creative in thinking”',
    liveUrl: 'https://bimacme-website.vercel.app/',
    challenge:
      'Bimacme is a Pune company that does MEP BIM coordination and modelling, with offices in London and the USA. Its buyers are MEP directors and BIM managers at UK contractors. They want three answers quickly: which services, which projects, and whether this team can be trusted with their drawings.',
    approach:
      'I designed the site in the order those buyers read. Services come first, fifteen of them, split into core services and MEP trades. Then real projects in London and the UK, each a full-screen picture with the scope underneath. Then client logos, testimonials from UK engineers, and a journal of technical articles written for search. The navy and the split-A mark from the identity I made for Bimacme carry through.',
    visualSystem: {
      fontPairing: 'Switzer for text and display, Newsreader for figures and quotes',
      primaryColors: [
        { name: 'Navy', hex: '#081433', role: 'Headers, footer and project panels' },
        { name: 'Datum blue', hex: '#3D7FE2', role: 'Links and the mark' },
        { name: 'Mist', hex: '#E8F1F6', role: 'Service and journal grounds' },
        { name: 'Paper', hex: '#F5F9FB', role: 'Page ground' },
      ],
      gridConcept: 'Full-screen project panels between calm text sections',
      designPhilosophy: 'Show the buildings; let the engineering speak through them.',
    },
    applications: [
      { title: 'Services', category: 'Structure', description: 'Fifteen services, from BIM coordination and staff augmentation to fire safety, shop drawings and data centres.' },
      { title: 'Projects', category: 'Proof', description: 'Manor Road, The Portal, a UK aparthotel and Belgrave Village, each with location, scope and result.' },
      { title: 'Journal', category: 'Search', description: 'Articles answering what UK mechanical contractors search for, from RIBA stages to shop drawings.' },
      { title: 'Book a meeting', category: 'Conversion', description: 'A meeting link in the first screen, in the menu and at the end of every page.' },
    ],
    outcome:
      'The site is live: fifteen services, four project stories and a growing journal, written and structured to be found by UK contractors searching for MEP BIM coordination.',
    featured: true,
    accentColor: '#3D7FE2',
  },
  {
    id: 'mi-cocina',
    number: '03',
    title: 'Mi Cocina',
    category: 'WEBSITE DESIGN',
    categoryTag: 'Restaurant website, Baner',
    discipline: 'Website',
    place: 'Baner, Pune',
    year: '2026',
    client: 'Mi Cocina, Mexican restaurant and bar',
    role: ['Website design', 'UI/UX', 'Build', 'Art direction'],
    deliverables: ['Responsive website', 'Table booking', 'Menu by course', 'Events and kitchen takeovers'],
    heroTagline: 'A website for a new Mexican restaurant in Baner that gets people to book a table.',
    summary:
      'Website for Mi Cocina, a Mexican restaurant and bar in Baner, Pune: bookings, the menu and events in the restaurant’s green, red and marigold.',
    seoTitle: 'Mi Cocina restaurant website, Baner, Pune — Tumul Thakur',
    cover: '/covers/mi-cocina.jpg',
    coverAlt: 'Mi Cocina website home screen: “Your neighbourhood Mexican kitchen in Pune” beside an illustrated taco',
    liveUrl: 'https://micocina-website.vercel.app/',
    challenge:
      'Mi Cocina is a new Mexican restaurant and bar in Baner. A new restaurant’s website has three jobs: tell people it exists, show them the food, and get them to book. It also had a kitchen takeover with two Michelin-honoured chefs to announce.',
    approach:
      'I gave the site the restaurant’s own colours: deep green, chilli red and marigold, with papel picado bunting across the top and illustrated tacos, chillies and avocados. “Book a table” is in the first screen and again at the end. The menu is grouped the way people order, from chips and dips to drinks, and a short “Hello!” section says what to expect: food is cooked to order in 20 to 25 minutes, and the kitchen lists its allergens.',
    visualSystem: {
      fontPairing: 'Lilita One for display, Quicksand for text',
      primaryColors: [
        { name: 'Cocina green', hex: '#114920', role: 'Page ground' },
        { name: 'Chilli red', hex: '#B93423', role: 'Hero and feature panels' },
        { name: 'Marigold', hex: '#FEB640', role: 'Headlines and buttons' },
        { name: 'Masa cream', hex: '#F6EAD3', role: 'Text' },
      ],
      gridConcept: 'Bold panels of colour, one idea each',
      designPhilosophy: 'Loud, warm and easy to book.',
    },
    applications: [
      { title: 'Book a table', category: 'Conversion', description: 'The booking button sits in the first screen, the menu section and the footer.' },
      { title: 'The menu', category: 'Menu', description: 'Seven courses, from chips and dips to drinks, each a large link to the full menu.' },
      { title: 'Events', category: 'News', description: 'The “Taste of Mexico” kitchen takeover with two Michelin-honoured chefs, and what’s next.' },
      { title: 'Hello!', category: 'Practical', description: 'Cooked to order in 20–25 minutes, veg and non-veg markers, and the allergens the kitchen handles.' },
    ],
    outcome:
      'The site is live, with bookings, the menu, events and the restaurant’s Instagram in one place, in colours you would recognise from the dining room.',
    featured: true,
    accentColor: '#B93423',
  },
  {
    id: 'soma-cafe',
    number: '04',
    title: 'Soma Cafe',
    category: 'BRAND IDENTITY / HOSPITALITY',
    categoryTag: 'Café brand identity',
    discipline: 'Brand identity',
    year: '2025',
    client: 'Soma Cafe',
    role: ['Brand identity', 'Logo and monogram', 'Signage', 'Stationery and packaging', 'Tableware'],
    deliverables: [
      'Wordmark and S monogram',
      'Shopfront signage in brass',
      'Logo construction drawings',
      'Business cards and envelopes',
      'Plates, cups and takeaway bags',
      'Sidewalk A-frame and menus',
    ],
    heroTagline: 'A café identity that starts at the shopfront and ends on the plate: a serif wordmark, an S monogram, brass letters and green glaze.',
    summary:
      'Brand identity for Soma Cafe: a serif wordmark and S monogram, brass shopfront letters, stationery, packaging and tableware.',
    seoTitle: 'Soma Cafe brand identity — Tumul Thakur, brand designer in Pune',
    cover: '/covers/soma-cafe.jpg',
    coverAlt: 'Soma Cafe shopfront in forest green with brushed brass lettering',
    challenge:
      'A new café had to feel warm and personal without looking homemade. The identity had to work in brass on a shopfront, on a paper bag, on a business card and in the glaze of a plate: four very different materials.',
    approach:
      'I drew a high-contrast serif wordmark and an S monogram built from circles, so the same geometry scales from a facade to a coffee cup. Forest green (#234133) and antique cream (#FAF8F5) do most of the work, with brushed brass for signage and foil. I specified the shopfront lettering, 350gsm duplex business cards, lined envelopes, and plates with a green rim and a centred monogram.',
    visualSystem: {
      fontPairing: 'High-contrast serif with a neutral sans',
      primaryColors: [
        { name: 'Soma green', hex: '#234133', role: 'The main colour' },
        { name: 'Antique cream', hex: '#FAF8F5', role: 'Paper and space' },
        { name: 'Brushed brass', hex: '#C5A059', role: 'Signage and foil' },
        { name: 'Charcoal', hex: '#1C1E1B', role: 'Text' },
      ],
      gridConcept: 'A monogram drawn from concentric circles',
      designPhilosophy: 'Feel made by hand, built from geometry.',
    },
    applications: [
      { title: 'Shopfront signage', category: 'Signage', description: 'A matte green facade with brushed brass letters and the name in Devanagari, सोमा.' },
      { title: 'Stationery', category: 'Print', description: '350gsm duplex business cards and envelopes lined with a pattern.' },
      { title: 'Tableware', category: 'Objects', description: 'White plates with a deep green rim and the S monogram in the centre.' },
    ],
    outcome:
      'A complete café identity, from construction drawings to signage, stationery, packaging and tableware, that holds together from the street to the table.',
    featured: true,
    accentColor: '#234133',
  },
  {
    id: 'bimacme',
    number: '05',
    title: 'Bimacme',
    category: 'BRAND IDENTITY',
    categoryTag: 'Engineering brand identity',
    discipline: 'Brand identity',
    place: 'Pune · London',
    year: '2025',
    client: 'Bimacme Engineering Services',
    role: ['Brand strategy', 'Visual identity', 'Brand applications', 'Social media', 'Video editing'],
    deliverables: [
      'Logo and visual identity',
      'Brand guidelines and stationery',
      'Presentation folders',
      'ID cards, lanyards and site gear',
      'Three video case studies',
    ],
    heroTagline:
      'An identity for a Pune engineering firm that coordinates building services for UK contractors: a split-A mark, a navy palette, and stationery, ID cards and site gear.',
    summary:
      'Brand identity for Bimacme, a Pune MEP BIM consultancy: a split-A mark, navy palette, stationery, ID cards, site gear and video.',
    seoTitle: 'Bimacme brand identity, Pune — Tumul Thakur',
    cover: '/covers/bimacme.jpg',
    coverAlt: 'Bimacme employee ID card on a blue lanyard',
    challenge:
      'Bimacme does MEP BIM coordination: it models ducts, pipes and cables in 3D so they don’t clash on site. Its competitors all use the same blue cubes and wireframe buildings. Bimacme needed to look precise and senior to UK engineers without looking cold.',
    approach:
      'I built a split-A mark from two interlocking facets, with the gap between them standing for the coordination work: services threaded through a building. Marine navy (#0C1D49) and a brighter datum blue (#3D7FE2) carry the brand, with Effra and Switzer for type. I applied it to stationery, presentation folders, ID cards and lanyards, helmets and vests, and edited three video case studies about their modelling and clash-detection work.',
    visualSystem: {
      fontPairing: 'Effra and Switzer',
      primaryColors: [
        { name: 'Marine navy', hex: '#0C1D49', role: 'The main colour' },
        { name: 'Datum blue', hex: '#3D7FE2', role: 'Accent and screens' },
        { name: 'Blue charcoal', hex: '#010F1C', role: 'Deep contrast' },
        { name: 'Chrome white', hex: '#E8F1F6', role: 'Ground' },
      ],
      gridConcept: 'A coordinate grid behind the split-A mark',
      designPhilosophy: 'Precise, but never cold.',
    },
    applications: [
      { title: 'Stationery and folders', category: 'Print', description: 'Presentation folders, envelopes and letterheads with strict margins and quiet type.' },
      { title: 'ID cards and lanyards', category: 'Team', description: 'CR80 ID cards and woven lanyards for teams in Pune and London.' },
      { title: 'Video case studies', category: 'Motion', description: 'Three edited films on constructible modelling, clash detection and builder’s work.' },
    ],
    outcome:
      'Bimacme now has one consistent look across print, site and screen, and the same identity runs through the website I later designed for them.',
    featured: true,
    accentColor: '#3D7FE2',
  },
  {
    id: 'krisala-hiranandani',
    number: '06',
    title: 'Krisala × Hiranandani',
    category: 'ART DIRECTION / MOTION / CAMPAIGN',
    categoryTag: 'Township launch campaign',
    discipline: 'Campaign and motion',
    place: 'Hinjawadi, Pune',
    agency: 'Bandish Studios',
    year: '2025',
    client: 'Krisala Developers × Hiranandani Communities (with Bandish Studios)',
    role: ['Art direction', 'Motion graphics', 'Campaign design', 'Film graphics', 'Social media'],
    deliverables: [
      '“Ideas in White” campaign look',
      'On-screen graphics for the 4K launch film',
      'Eleven social posts and reels',
      'Architectural line drawings',
    ],
    heroTagline:
      '“Ideas in White”: on-screen graphics for the launch film and an eleven-post social campaign for a 105-acre township in North Hinjawadi.',
    summary:
      'Launch campaign for a 105-acre Krisala × Hiranandani township in Hinjawadi, Pune: film graphics, line drawings and eleven social posts.',
    seoTitle: 'Krisala × Hiranandani township campaign, Hinjawadi, Pune — Tumul Thakur',
    cover: '/covers/krisala-hiranandani.jpg',
    coverAlt: 'Ideas in White title card from the Krisala and Hiranandani launch film',
    challenge:
      'Krisala and Hiranandani were launching a 105-acre township in North Hinjawadi, Pune. The launch film had to explain smart-city features, from sensors to renewable energy and green corridors, without burying the architecture under charts.',
    approach:
      'Working with Bandish Studios, I designed the film’s on-screen graphics: thin line drawings that trace the buildings, and short data cards that appear, explain and leave. I carried the same look into eleven social posts and reels, set in Instrument Serif with a forest-green accent on white: the campaign’s “Ideas in White”.',
    visualSystem: {
      fontPairing: 'Instrument Serif with a technical sans',
      primaryColors: [
        { name: 'White', hex: '#FFFFFF', role: '“Ideas in White”' },
        { name: 'Slate', hex: '#151719', role: 'Type' },
        { name: 'Forest green', hex: '#2D6A4F', role: 'Accent' },
        { name: 'Concrete grey', hex: '#EAEAEA', role: 'Grounds' },
      ],
      gridConcept: '16:9 film frames with wide margins',
      designPhilosophy: 'Let the buildings lead; graphics arrive, explain and leave.',
    },
    applications: [
      { title: 'Launch film graphics', category: 'Motion', description: 'Line drawings and data cards that explain the township’s smart-city features over the film.' },
      { title: 'Social campaign', category: 'Social', description: 'Eleven posts and reels that carry “Ideas in White” onto phones.' },
      { title: 'Line drawings', category: 'Illustration', description: 'Fine elevations of the buildings, used in the film and the posts.' },
    ],
    outcome:
      'On-screen graphics for the 4K launch film and an eleven-post campaign that reached over 1,00,000 organic impressions during the preview launch.',
    featured: true,
    accentColor: '#2D6A4F',
  },
  {
    id: 'sangreen-logistics',
    number: '07',
    title: 'Sangreen Logistics',
    category: 'BRAND GUIDELINES',
    categoryTag: 'Logistics brand guidelines',
    discipline: 'Brand guidelines',
    year: '2025',
    client: 'Sangreen Logistics Pvt. Ltd.',
    role: ['Brand guidelines', 'Logo system', 'Stationery and ID cards', 'Merchandise and uniforms', 'Vehicle graphics'],
    deliverables: [
      '26-section brand guidelines',
      'Logo construction and clear space',
      'Full stationery set',
      'ID cards and uniforms',
      'Merchandise specs',
    ],
    heroTagline: 'A 26-section brand guidelines book for a freight and warehousing company: one set of rules from the letterhead to the side of a truck.',
    summary:
      'A 26-section brand guidelines book for Sangreen Logistics: logo rules, Rubik type, stationery, ID cards, uniforms and vehicle graphics.',
    seoTitle: 'Sangreen Logistics brand guidelines — Tumul Thakur, brand designer in Pune',
    cover: '/covers/sangreen-logistics.jpg',
    coverAlt: 'Sangreen Logistics horizontal logo in blue and green',
    challenge:
      'Sangreen Logistics moves freight by road and rail and runs warehouses across India. Its logo was being stretched on trailers, retyped on letterheads and recoloured by every printer. It needed one document that any vendor could follow.',
    approach:
      'I wrote and designed a 26-section brand guidelines book around the loop mark, dusk blue (#274482) and forest green (#459652). It sets clear space and minimum sizes, the Rubik type family, and exact specs for business cards, A4 letterheads, two envelope sizes, CR80 ID cards, embroidered caps and polos, and vehicle graphics.',
    visualSystem: {
      fontPairing: 'Rubik, from Light to Black',
      primaryColors: [
        { name: 'Dusk blue', hex: '#274482', role: 'Trust and structure' },
        { name: 'Forest green', hex: '#459652', role: 'Growth and movement' },
        { name: 'White', hex: '#FFFFFF', role: 'Space' },
        { name: 'Black', hex: '#000000', role: 'Text' },
      ],
      gridConcept: 'Clear space measured in units of the mark',
      designPhilosophy: 'One rulebook for the boardroom and the highway.',
    },
    applications: [
      { title: 'Stationery', category: 'Print', description: 'Business cards (3.5 × 2 in), A4 letterheads and two envelope sizes.' },
      { title: 'ID cards', category: 'Team', description: 'CR80 ID cards, woven lanyards and desk name plates.' },
      { title: 'Merchandise and uniforms', category: 'Objects', description: 'Embroidered caps, pin badges, gift sets and polo placement rules.' },
    ],
    outcome:
      'Printers, uniform suppliers and vehicle-wrap fabricators now work from the same 26-section book, so the brand looks the same in a boardroom and on a highway.',
    featured: true,
    accentColor: '#274482',
  },
  {
    id: 'sangreen-future-renewables',
    number: '08',
    title: 'Sangreen Renewables',
    category: 'BRAND IDENTITY / ENVIRONMENTAL',
    categoryTag: 'Renewable energy brand',
    discipline: 'Brand and spaces',
    agency: 'Bandish Studios',
    year: '2025',
    client: 'Sangreen Future Renewables (with Bandish Studios)',
    role: ['Brand identity', 'Brand guidelines', 'Office graphics', 'Brochure', 'Exhibition stand'],
    deliverables: [
      'Brand identity and construction',
      'Brand guidelines, 2025 edition',
      'Capabilities brochure',
      'Office wall graphics and signage',
      'Trade exhibition stand',
      'Stationery and ID cards',
    ],
    heroTagline: 'Brand guidelines, a capabilities brochure, office wall graphics and an exhibition stand for a wind and solar infrastructure company.',
    summary:
      'Brand guidelines, brochure, office wall graphics and an exhibition stand for Sangreen Future Renewables, a wind and solar infrastructure company.',
    seoTitle: 'Sangreen Future Renewables brand and office graphics — Tumul Thakur',
    cover: '/covers/sangreen-future-renewables.jpg',
    coverAlt: 'Sangreen Future Renewables wall graphic of wind turbines being installed in an office',
    challenge:
      'Sangreen Future Renewables builds the balance of plant for wind and solar farms: the civil, electrical and mechanical work around the turbines. It needed to look credible in a dense technical brochure and on an office wall.',
    approach:
      'With Bandish Studios, I designed the 2025 brand guidelines, a capabilities brochure, line illustrations of turbines and the office’s wall graphics. Light sea green (#3FACA2) and architectural greys carry the system, and the turbine drawings replace the usual leaf-and-sun clichés.',
    visualSystem: {
      fontPairing: 'Rubik, from 300 to 900',
      primaryColors: [
        { name: 'Sea green', hex: '#3FACA2', role: 'The main colour' },
        { name: 'Light grey', hex: '#D9D9D9', role: 'Grounds and tints' },
        { name: 'Carbon', hex: '#111111', role: 'Text' },
        { name: 'White', hex: '#FFFFFF', role: 'Space' },
      ],
      gridConcept: 'Turbine drawings on a 12-column layout',
      designPhilosophy: 'Engineering drawings instead of eco clichés.',
    },
    applications: [
      { title: 'Office wall graphics', category: 'Spaces', description: 'Full-height wall graphics and turbine illustrations for offices and corridors.' },
      { title: 'Capabilities brochure', category: 'Print', description: 'Civil, electrical and mechanical capabilities, with the wind pipeline in figures.' },
      { title: 'Brand guidelines', category: 'Rules', description: 'Symbol geometry, clear space, minimum sizes, Rubik type and how to apply them.' },
      { title: 'Exhibition stand', category: 'Events', description: 'Branded louvres, a meeting area and backlit panels for trade shows.' },
    ],
    outcome:
      'A 2025 brand guidelines book, a capabilities brochure, wall graphics installed in the office and modular panels for trade exhibitions.',
    featured: true,
    accentColor: '#3FACA2',
  },
  {
    id: 'sidhivinayak-precast',
    number: '09',
    title: 'Siddhivinayak Precast',
    category: 'BRAND IDENTITY / INDUSTRIAL',
    categoryTag: 'Precast concrete brand kit',
    discipline: 'Brand identity',
    agency: 'Bandish Studios',
    year: '2024',
    client: 'Siddhivinayak Precast Pipes (with Bandish Studios)',
    role: ['Brand identity', 'Brand guidelines', 'Industrial communication', 'Stationery'],
    deliverables: [
      'Brand kit and guidelines',
      'Infinity mark and clear space',
      'Business cards',
      'Letterhead and A4 envelope',
      'Site ID cards',
      'Tender and site communication',
    ],
    heroTagline: 'A brand kit for a maker of precast concrete pipes: an infinity mark, carrot orange and slate, and stationery that survives a factory yard.',
    summary:
      'Brand kit for Siddhivinayak Precast, a maker of concrete pipes: an infinity mark, orange and slate colours, Ubuntu type and stationery.',
    seoTitle: 'Siddhivinayak Precast brand kit — Tumul Thakur, brand designer in Pune',
    cover: '/covers/sidhivinayak-precast.jpg',
    coverAlt: 'Siddhivinayak Precast business cards on a dark ridged surface',
    challenge:
      'Siddhivinayak makes precast concrete pipes and drainage for civil projects. It had no vector logo, no rules and no templates, so every tender and letter looked different.',
    approach:
      'With Bandish Studios, I built a brand kit around a continuous infinity mark, for strength that lasts, in deep carrot orange (#EC6E2F) and dark slate (#28585D), set in Ubuntu. Then the applications: double-sided business cards, a letterhead, an A4 envelope and site ID cards on orange lanyards.',
    visualSystem: {
      fontPairing: 'Ubuntu, from Light to Bold',
      primaryColors: [
        { name: 'Carrot orange', hex: '#EC6E2F', role: 'High-visibility accent' },
        { name: 'Dark slate', hex: '#28585D', role: 'The main colour' },
        { name: 'Sonic silver', hex: '#737476', role: 'Concrete and steel' },
        { name: 'Raisin black', hex: '#231F20', role: 'Text' },
        { name: 'Anti-flash white', hex: '#F2F2F3', role: 'Ground' },
      ],
      gridConcept: 'Heavy blocks and wide margins, like formwork',
      designPhilosophy: 'Built to look as solid as the product.',
    },
    applications: [
      { title: 'Business cards', category: 'Stationery', description: 'Double-sided cards with a QR code.' },
      { title: 'Letterhead', category: 'Correspondence', description: 'A formal letterhead for tenders and site letters.' },
      { title: 'Site ID card', category: 'Team', description: 'ID cards on carrot-orange woven lanyards, easy to spot on site.' },
      { title: 'A4 envelope', category: 'Mail', description: 'A clean layout with a full orange flap.' },
    ],
    outcome:
      'Production-ready logo files, type and colour rules, and print templates for everything from the factory yard to government tenders.',
    featured: true,
    accentColor: '#EC6E2F',
  },
  {
    id: 'social-media-creatives',
    number: '10',
    title: 'Social Media Creatives',
    category: 'SOCIAL MEDIA DESIGN',
    categoryTag: 'Banking, retail and hospitality',
    discipline: 'Social media',
    agency: 'Bandish Studios',
    year: '2024 — 2025',
    client: 'Bandhan Bank · Smart Bazaar · The Central Park Hotel · Bandish Studios',
    role: ['Social media design', 'Motion graphics', 'Campaign design', 'Content planning'],
    deliverables: ['Campaigns for four brands', 'Post and reel templates', 'Instagram reels', 'Carousel and grid layouts'],
    heroTagline: 'Posts, carousels and reels for Bandhan Bank, Smart Bazaar and The Central Park Hotel: more than 100 pieces across very different brands.',
    summary:
      'Social media posts, carousels and reels for Bandhan Bank, Smart Bazaar and The Central Park Hotel: 100+ pieces and 90 million views.',
    seoTitle: 'Social media design for Bandhan Bank and Smart Bazaar — Tumul Thakur',
    cover: '/covers/social-media-creatives.jpg',
    coverAlt: 'Smart Bazaar Instagram posts shown on a phone and beside it',
    challenge:
      'Four brands, four voices and daily deadlines: a national bank that has to sound trustworthy, a hypermarket chain running festival offers, a hotel selling food and events, and the agency’s own feed.',
    approach:
      'With Bandish Studios, I built separate post and reel templates (4:5 and 9:16) for each brand. For Bandhan Bank: clear hierarchy, numbers first. For Smart Bazaar: big offer lockups that read in a thumb-scroll. For The Central Park Hotel: food photography and event typography.',
    visualSystem: {
      fontPairing: 'Each brand’s own type, on shared grids',
      primaryColors: [
        { name: 'Bandish yellow', hex: '#FFE600', role: 'Agency feed' },
        { name: 'Bandhan blue', hex: '#003B70', role: 'Banking' },
        { name: 'Retail red', hex: '#D32F2F', role: 'Offers' },
        { name: 'Pitch dark', hex: '#121417', role: 'Ground' },
      ],
      gridConcept: '4:5 feed posts and 9:16 reels',
      designPhilosophy: 'Fast to make, clear in a thumb-scroll.',
    },
    applications: [
      { title: 'Bandhan Bank', category: 'Banking', description: 'Clear type and simple hierarchy for financial products.' },
      { title: 'The Central Park Hotel', category: 'Hospitality', description: 'Food photography, event typography and offers for the hotel’s restaurants.' },
      { title: 'Smart Bazaar', category: 'Retail', description: 'Festival greetings and offers that stop the scroll, at national scale.' },
    ],
    outcome:
      'More than 100 published pieces across banking, retail and hospitality. The tracked posts and reels in this case study add up to over 300,000 likes and 90 million views.',
    featured: true,
    accentColor: '#D84A38',
  },
];

export const getProject = (id: string) => PROJECTS.find((p) => p.id === id);

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
    role: 'Senior Visualiser',
    company: 'Bandish Studios',
    location: 'Pune, India',
    type: 'Agency',
    description:
      'Designed brand identities, brand guidelines, office graphics, campaigns and social media for clients across infrastructure, real estate, banking and retail.',
    keyWork: [
      'Identities and brand guidelines for Sangreen Logistics, Bimacme and Siddhivinayak Precast',
      'Launch film graphics and social campaign for Krisala × Hiranandani',
      'Social media for Bandhan Bank and Smart Bazaar',
    ],
  },
  {
    period: '2022 — 2024',
    role: 'Video Editor and Junior Graphic Designer',
    company: 'House of Content',
    location: 'Pune, India',
    type: 'Agency',
    description: 'Edited promotional videos, animated type and designed marketing material for consumer and technology brands.',
    keyWork: [
      'Edited promotional videos in Premiere Pro and After Effects',
      'Animated reels and social templates',
      'Designed presentations and brand assets',
    ],
  },
  {
    period: '2021 — 2022',
    role: 'Graphic Design Intern',
    company: 'Team Ranuver',
    location: 'Pune, India',
    type: 'Design studio',
    description: 'Helped with logo concepts, layouts and print-ready stationery for commercial clients.',
    keyWork: ['Drew wordmarks, logos and layout grids', 'Prepared print-ready files and stationery templates'],
  },
  {
    period: '2020 — 2021',
    role: 'Graphic Design Intern',
    company: 'Paycrunch',
    location: 'Remote, India',
    type: 'Fintech startup',
    description: 'Made marketing graphics and social posts for a mobile fintech app.',
    keyWork: ['Designed in-app banners and social graphics', 'Made posts that explain financial ideas simply'],
  },
];

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  /** Project id shown as the example for this service. */
  associatedProject: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'BRAND IDENTITY',
    tagline: 'A logo, colours and type that work everywhere your business shows up.',
    description:
      'Logos, monograms and wordmarks with the colours, typefaces and stationery to go with them, for businesses in Pune, Mumbai and beyond.',
    capabilities: ['Logos and monograms', 'Colour and type', 'Business cards and stationery', 'Signage', 'Packaging'],
    associatedProject: 'soma-cafe',
  },
  {
    number: '02',
    title: 'WEBSITES',
    tagline: 'Designed and built, fast on a phone, and easy for Google to read.',
    description:
      'I design the site and build it, so what you approve is what goes live. Menus, services and addresses go on the page as real text that people and search engines can read.',
    capabilities: ['Website design (UI/UX)', 'Build and launch', 'Mobile-first layouts', 'Search-ready content', 'Art direction'],
    associatedProject: 'subculture',
  },
  {
    number: '03',
    title: 'BRAND GUIDELINES',
    tagline: 'One rulebook your printers, agencies and team can follow.',
    description:
      'Brand guidelines that set clear space, colours, type and exact specs for stationery, ID cards, uniforms, vehicles and signage.',
    capabilities: ['Brand guideline books', 'Stationery specs', 'ID cards and uniforms', 'Vehicle graphics', 'Print specs'],
    associatedProject: 'sangreen-logistics',
  },
  {
    number: '04',
    title: 'CAMPAIGNS AND ART DIRECTION',
    tagline: 'A launch look that carries from the film to the feed.',
    description:
      'Campaign looks, on-screen graphics for launch films and the social posts that go with them, for real estate and consumer brands.',
    capabilities: ['Campaign looks', 'Film graphics', 'Launch posts and reels', 'Line illustrations', 'Storyboards'],
    associatedProject: 'krisala-hiranandani',
  },
  {
    number: '05',
    title: 'SOCIAL MEDIA',
    tagline: 'Posts and reels that stay on brand at daily speed.',
    description:
      'Post, carousel and reel templates (4:5 and 9:16) for banks, retail chains, hotels and cafés that post every day.',
    capabilities: ['Post and carousel templates', 'Reels and stories', 'Offer and festival posts', 'Campaign kits'],
    associatedProject: 'social-media-creatives',
  },
  {
    number: '06',
    title: 'MOTION AND VIDEO',
    tagline: 'Explainers, reels and logo animations that make complex work clear.',
    description:
      'I edit and animate case-study films, promotional reels and logo animations in After Effects and Premiere Pro.',
    capabilities: ['Explainer edits', 'Kinetic type', 'Logo animation', 'Social video'],
    associatedProject: 'bimacme',
  },
];
