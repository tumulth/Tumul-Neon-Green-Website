export interface SomaImageItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'storefront' | 'identity' | 'stationery' | 'culinary' | 'packaging';
  aspectRatio?: string;
}

export interface SomaColorSwatch {
  name: string;
  hex: string;
  cmyk: string;
  pantone: string;
  role: string;
  description: string;
}

export const SOMA_COLOR_PALETTE: SomaColorSwatch[] = [
  {
    name: 'Soma Forest Green',
    hex: '#234133',
    cmyk: '80 / 45 / 70 / 48',
    pantone: 'PANTONE 5535 C',
    role: 'Primary Identity Anchor',
    description: 'Grounding, serene, and deep. Evokes botanical tranquility, architectural permanence, and timeless hospitality.',
  },
  {
    name: 'Warm Antique Cream',
    hex: '#FAF8F5',
    cmyk: '2 / 2 / 4 / 0',
    pantone: 'PANTONE Warm White',
    role: 'Substrate & Negative Space',
    description: 'Uncoated fine cotton paper and expansive negative space that lets food photography and typography breathe.',
  },
  {
    name: 'Brushed Brass / Gold',
    hex: '#C5A059',
    cmyk: '25 / 35 / 75 / 5',
    pantone: 'PANTONE 871 C Metallic',
    role: 'Architectural & Foil Accent',
    description: 'Hand-finished exterior lettering, illuminated entryway lantern frames, and hot-stamped stationery details.',
  },
  {
    name: 'Charcoal Ink',
    hex: '#1C1E1B',
    cmyk: '65 / 55 / 60 / 75',
    pantone: 'PANTONE Black 7 C',
    role: 'Typographic Contrast',
    description: 'High-contrast editorial serif headlines and delicate caption hierarchies with zero artificial glare.',
  },
  {
    name: 'Pastry Caramel Gold',
    hex: '#D4A373',
    cmyk: '20 / 40 / 65 / 5',
    pantone: 'PANTONE 7514 C',
    role: 'Culinary Natural Tone',
    description: 'Freshly baked lamination tones, caramelized cruffin glaze, and rich single-origin espresso extraction.',
  },
];

export const SOMA_PROJECT_METADATA = {
  id: 'soma-cafe',
  number: '07',
  title: 'Soma Cafe',
  client: 'Soma / Soma Cafe',
  category: 'VISUAL IDENTITY / HOSPITALITY BRANDING',
  categoryTag: 'Hospitality & Culinary Craft',
  year: '2024 — 2025',
  location: 'Pune, India',
  services: [
    'Brand Identity System',
    'Architectural Signage & Facade',
    'Typographic Drafting & Construction',
    'Tactile Stationery & Business Cards',
    'Custom Lined Envelope Suites',
    'Custom Ceramic Tableware & Monogram',
    'Packaging & Parchment Systems',
    'Art Direction & Culinary Styling',
  ],
  chefDetails: {
    name: 'Vansh Sharma',
    title: 'Head Chef & Culinary Director',
    role: 'Gastronomic craft, viennoiserie lamination, and all-day dining curation.',
  },
  heroStatement: 'WARMTH, REFINED.',
  heroTagline: 'A tactile hospitality identity spanning geometric logo drafting, brass facade signage, and custom dining tableware.',
  narrativeObjective:
    'The serif wordmark uses generous character spacing and a restrained monogram drafted on concentric circular guides. The same proportions carry through from the brushed brass storefront lettering and duplexed 350gsm business cards down to the greaseproof parchment and custom-glazed ceramic dining plates.',
};

export const SOMA_ASSETS: Record<string, SomaImageItem> = {
  storefrontHero: {
    id: 'storefront-hero',
    src: '/projects/soma-cafe/01-storefront-hero.jpg',
    alt: 'Soma Cafe exterior storefront facade in deep forest green with gold serif signage',
    caption: 'Architectural Storefront Presence · Deep forest green facade, brushed brass serif lettering, and bilingual "सोमा" detailing.',
    category: 'storefront',
  },
  wordmarkMonogram: {
    id: 'wordmark-monogram',
    src: '/projects/soma-cafe/02-wordmark-monogram.jpg',
    alt: 'Soma serif wordmark and delicate S monogram on deep green canvas',
    caption: 'The Primary Wordmark & Monogram · High-contrast serif letterforms anchored on grounding forest green.',
    category: 'identity',
  },
  logoConstruction: {
    id: 'logo-construction',
    src: '/projects/soma-cafe/03-logo-construction.jpg',
    alt: 'Logo construction drafting diagram showing circular guides and geometric grids',
    caption: 'Geometric Drafting & Blueprint · Compass arcs, optical kerning, and golden proportion curves behind the S monogram.',
    category: 'identity',
  },
  businessCards: {
    id: 'business-cards',
    src: '/projects/soma-cafe/04-business-cards.jpg',
    alt: 'Vansh Sharma Head Chef business cards in crisp white and deep green textured stocks',
    caption: 'Tactile Business Cards · Vansh Sharma "Head Chef" cards highlighting crisp textured white against deep brand green on pleated paper.',
    category: 'stationery',
  },
  envelopes: {
    id: 'envelopes',
    src: '/projects/soma-cafe/05-envelopes.jpg',
    alt: 'Custom green envelopes open and closed showing delicate internal flap ornamental lining',
    caption: 'Custom Correspondence Suite · Deep green envelope suite featuring intricate ornamental pattern flap lining.',
    category: 'stationery',
  },
  sidewalkCruffin: {
    id: 'sidewalk-cruffin',
    src: '/projects/soma-cafe/06-sidewalk-cruffin.jpg',
    alt: 'Hand holding glazed cruffin pastry with green Soma A-frame sidewalk sign blurred in background',
    caption: 'The Sidewalk Greeting · Hand-held glazed cruffin framed against the forest green branded A-frame sidewalk sign.',
    category: 'culinary',
  },
  diningTableware: {
    id: 'dining-tableware',
    src: '/projects/soma-cafe/07-dining-tableware.jpg',
    alt: 'Overhead dining flatlay of pasta, bread, and coffee on custom monogram ceramic plates',
    caption: 'The Dining Experience · Custom ceramic tableware featuring deep green rim detailing and centered "S" monogram.',
    category: 'culinary',
  },
  chefVansh: {
    id: 'chef-vansh',
    src: '/projects/soma-cafe/08-chef-vansh.png',
    alt: 'Head Chef Vansh Sharma in forest green apron arranging artisan pastries behind counter',
    caption: 'Culinary Direction · Chef Vansh Sharma curating fresh viennoiserie in branded green linen apparel.',
    category: 'culinary',
  },
  bakerCraft: {
    id: 'baker-craft',
    src: '/projects/soma-cafe/09-baker-craft.png',
    alt: 'Baker dusting powdered sugar over freshly baked golden cruffins',
    caption: 'Artisanal Craft · Delicate sugar dusting over freshly baked laminated cruffins in the baking studio.',
    category: 'culinary',
  },
  platedAsparagus: {
    id: 'plated-asparagus',
    src: '/projects/soma-cafe/10-plated-asparagus.jpg',
    alt: 'Grilled asparagus with velvet cream sauce and edible purple botanical flowers',
    caption: 'Plated Craft · Grilled asparagus with emulsion and botanical viola petals on custom ceramic plate.',
    category: 'culinary',
  },
  artisanBurger: {
    id: 'artisan-burger',
    src: '/projects/soma-cafe/11-artisan-burger.jpg',
    alt: 'Artisan burger on Soma monogram parchment paper served with fries',
    caption: 'Table Setting · Artisan burger presented on custom greaseproof monogram parchment paper.',
    category: 'culinary',
  },
  dessertPastry: {
    id: 'dessert-pastry',
    src: '/projects/soma-cafe/12-dessert-pastry.jpg',
    alt: 'French macarons and raspberry pastry on branded monogram parchment paper',
    caption: 'Patisserie Service · Assorted macarons and rolled pastry served on delicate branded greaseproof parchment.',
    category: 'culinary',
  },
  takeawayTote: {
    id: 'takeaway-tote',
    src: '/projects/soma-cafe/13-takeaway-tote.jpg',
    alt: 'Guest holding forest green Soma branded takeaway shopping bag',
    caption: 'Guest Takeaway Touchpoints · Forest green heavy-gauge shopping bag carrying the hospitality warmth into the city.',
    category: 'packaging',
  },
  teaService: {
    id: 'tea-service',
    src: '/projects/soma-cafe/14-tea-service.jpg',
    alt: 'Afternoon tea poured from glass teapot alongside fresh cruffin',
    caption: 'Afternoon Rituals · Hand-poured artisan tea service paired with flaky cruffin viennoiserie.',
    category: 'culinary',
  },
  packagedCruffin: {
    id: 'packaged-cruffin',
    src: '/projects/soma-cafe/15-packaged-cruffin.jpg',
    alt: 'Cruffin in clear bag sealed with embossed circular green Soma monogram sticker',
    caption: 'Tactile Packaging · Clear bakery pouch sealed with circular embossed forest green monogram label.',
    category: 'packaging',
  },
  instagramShowcase: {
    id: 'instagram-showcase',
    src: '/projects/soma-cafe/16-instagram-showcase.png',
    alt: 'iPhone mockup displaying @soma.cafe Instagram profile with 237k community',
    caption: 'Digital Presence · Curated Instagram channel with 237k community members celebrating daily bakery drops.',
    category: 'identity',
  },
};
