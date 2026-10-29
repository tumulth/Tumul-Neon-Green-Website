export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export interface WebsiteStudy {
  /** The site's own colours, used for the phone band. */
  field: string;
  fieldInk: string;
  /** A real scroll through the site on a phone, played in place of the first phone shot. */
  video?: string;
  desktop: Shot[];
  phones: Shot[];
}

const d = (id: string, n: number) => `/projects/${id}/desktop-0${n}.jpg`;
const m = (id: string, n: number) => `/projects/${id}/phone-0${n}.jpg`;

export const WEBSITE_STUDIES: Record<string, WebsiteStudy> = {
  subculture: {
    field: '#33379D',
    fieldInk: '#DCDCE8',
    video: '/projects/subculture/scroll.mp4',
    desktop: [
      { src: d('subculture', 1), alt: 'Subculture home screen with a latte in a blue cup on cobalt', caption: 'The first screen: the café’s cup, its blue, and what’s being poured right now.' },
      { src: d('subculture', 2), alt: 'Subculture introduction on a stone-coloured ground', caption: 'The introduction, in the café’s own words, on the colour of its walls.' },
      { src: d('subculture', 3), alt: 'Photograph of the Subculture slow coffee bar in Aundh', caption: 'The slow coffee bar at Raagdhari Apartments, Aundh, full width.' },
      { src: d('subculture', 4), alt: 'Subculture menu cards of drinks and food on blue', caption: 'A strip of menu items you can drag through, each with its price.' },
      { src: d('subculture', 7), alt: 'Subculture bar menu with hot drinks and prices', caption: 'The bar: every hot drink, from espresso at ₹130, priced like a menu board.' },
      { src: d('subculture', 6), alt: 'Subculture ideals list on cobalt', caption: 'Five ideals, from carefully sourced to every creative welcome.' },
    ],
    phones: [
      { src: m('subculture', 1), alt: 'Subculture website first screen on a phone', caption: 'First screen' },
      { src: m('subculture', 2), alt: 'Subculture introduction on a phone', caption: 'Introduction' },
      { src: m('subculture', 3), alt: 'Subculture links to the menu and directions on a phone', caption: 'Menu and directions' },
    ],
  },
  'mi-cocina': {
    field: '#114920',
    fieldInk: '#F6EAD3',
    desktop: [
      { src: d('mi-cocina', 1), alt: 'Mi Cocina home screen: Your neighbourhood Mexican kitchen in Pune', caption: 'The first screen says what it is, where it is, and offers a table.' },
      { src: d('mi-cocina', 3), alt: 'Mi Cocina menu courses and the Taste of Mexico event', caption: 'The menu by course beside the kitchen takeover with two Michelin-honoured chefs.' },
      { src: d('mi-cocina', 2), alt: 'Mi Cocina band of food photography with a booking button', caption: 'Tacos, tamales, green mole and churros, with the booking button never far away.' },
      { src: d('mi-cocina', 4), alt: 'Mi Cocina Hello section with three practical notes', caption: '“Hello!” sets expectations: cooked to order, veg and non-veg markers, allergens.' },
      { src: d('mi-cocina', 5), alt: 'Mi Cocina Join the Party panel with food photography', caption: 'Join the party: new dishes, takeovers and nights, on Instagram.' },
      { src: d('mi-cocina', 6), alt: 'Mi Cocina footer with address and booking', caption: 'The close: book a table, find Baner, follow along.' },
    ],
    phones: [
      { src: m('mi-cocina', 1), alt: 'Mi Cocina first screen on a phone', caption: 'First screen' },
      { src: m('mi-cocina', 2), alt: 'Mi Cocina menu and events on a phone', caption: 'Menu and events' },
      { src: m('mi-cocina', 3), alt: 'Mi Cocina Hello section on a phone', caption: 'Before you order' },
    ],
  },
  'bimacme-website': {
    field: '#081433',
    fieldInk: '#F5F9FB',
    desktop: [
      { src: d('bimacme-website', 1), alt: 'Bimacme home screen: a city under construction at dusk', caption: 'The first screen: buildings, not cubes.' },
      { src: d('bimacme-website', 2), alt: 'Bimacme core services as photo cards', caption: 'Core services first, with the people who do the work.' },
      { src: d('bimacme-website', 3), alt: 'Bimacme project panel: Manor Road, London', caption: 'Each project gets a full screen: Manor Road, London.' },
      { src: d('bimacme-website', 4), alt: 'Bimacme project panel: UK Aparthotel with a coordinated model', caption: 'The UK aparthotel, with the coordinated model laid over the building.' },
      { src: d('bimacme-website', 5), alt: 'Bimacme client logos', caption: 'Clients, from Johnson Controls to SIS MEP.' },
      { src: d('bimacme-website', 6), alt: 'Bimacme why choose us and testimonials', caption: 'Why choose us, then what UK engineers say.' },
      { src: d('bimacme-website', 7), alt: 'Bimacme journal of technical articles', caption: 'The journal: technical articles written for what UK contractors search.' },
      { src: d('bimacme-website', 8), alt: 'Bimacme team photo and closing call to action', caption: 'The close: the team, and a 30-minute meeting.' },
    ],
    phones: [
      { src: m('bimacme-website', 1), alt: 'Bimacme first screen on a phone', caption: 'First screen' },
      { src: m('bimacme-website', 2), alt: 'Bimacme introduction and services on a phone', caption: 'Services' },
      { src: m('bimacme-website', 3), alt: 'Bimacme Manor Road project on a phone', caption: 'Projects' },
    ],
  },
};
