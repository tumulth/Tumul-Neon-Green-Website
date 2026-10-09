export interface CaseStudyAsset {
  id: string;
  number: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  layout?: 'full' | 'half' | 'wide' | 'contained';
}

export interface VideoCaseStudyItem {
  id: string;
  number: string;
  title: string;
  label: string;
  youtubeId: string;
  url: string;
  description?: string;
}

export const BIMACME_IMAGE_ASSETS: CaseStudyAsset[] = [
  {
    id: 'image-01',
    number: '01',
    title: 'PRIMARY IDENTITY',
    caption: 'The BIMACME logo and its core visual expression.',
    src: '/projects/bimacme/image-01.jpg',
    alt: 'BIMACME primary logo hero visual on radiant blue background',
    layout: 'full',
  },
  {
    id: 'image-02',
    number: '02',
    title: 'BRAND FOUNDATION',
    caption: 'Vision, mission, and the strategic foundation behind the identity.',
    src: '/projects/bimacme/image-02.jpg',
    alt: 'BIMACME brand foundation, vision and mission presentation',
    layout: 'half',
  },
  {
    id: 'image-03',
    number: '03',
    title: 'LOGO CONSTRUCTION',
    caption: 'The geometric logic and proportions that define the mark.',
    src: '/projects/bimacme/image-03.jpg',
    alt: 'BIMACME logo geometric construction and coordinate grid system',
    layout: 'half',
  },
  {
    id: 'image-04',
    number: '04',
    title: 'IDENTITY ANATOMY',
    caption: 'Breaking down the symbol, negative space, typography, and meaning behind the logo.',
    src: '/projects/bimacme/image-04.jpg',
    alt: 'BIMACME logo anatomy, split-A icon, negative space path and typography',
    layout: 'full',
  },
  {
    id: 'image-05',
    number: '05',
    title: 'COLOUR SYSTEM',
    caption: 'A structured palette of navy, blue, charcoal, and white creates the foundation for the identity.',
    src: '/projects/bimacme/image-05.jpg',
    alt: 'BIMACME brand colour palette swatches and specifications',
    layout: 'half',
  },
  {
    id: 'image-06',
    number: '06',
    title: 'TYPOGRAPHY',
    caption: 'Effra Sans Serif and Switzer create the primary typographic hierarchy.',
    src: '/projects/bimacme/image-06.jpg',
    alt: 'BIMACME typography specimen featuring Effra Sans Serif and Switzer Regular',
    layout: 'half',
  },
  {
    id: 'image-07',
    number: '07',
    title: 'CORPORATE STATIONERY',
    caption: 'Extending the identity into everyday business communication.',
    src: '/projects/bimacme/image-07.jpg',
    alt: 'BIMACME corporate stationery and envelope design',
    layout: 'half',
  },
  {
    id: 'image-08',
    number: '08',
    title: 'CORPORATE MATERIALS',
    caption: 'Using the visual system across branded collateral.',
    src: '/projects/bimacme/image-08.jpg',
    alt: 'BIMACME presentation folder and branded collateral',
    layout: 'half',
  },
  {
    id: 'image-09',
    number: '09',
    title: 'EMPLOYEE IDENTIFICATION',
    caption: 'A functional application of the identity within the organisation.',
    src: '/projects/bimacme/image-09.jpg',
    alt: 'BIMACME employee identification cards and lanyard system',
    layout: 'half',
  },
  {
    id: 'image-10',
    number: '10',
    title: 'SOCIAL MEDIA',
    caption: "Bringing the brand into BIMACME's digital communication ecosystem.",
    src: '/projects/bimacme/image-10.jpg',
    alt: 'BIMACME social media and Instagram visual system',
    layout: 'half',
  },
  {
    id: 'image-11',
    number: '11',
    title: 'DIGITAL TOUCHPOINT',
    caption: 'Extending the system into web presence, browser interfaces, and favicon identity.',
    src: '/projects/bimacme/image-11.jpg',
    alt: 'BIMACME web presence, browser interface and favicon',
    layout: 'half',
  },
  {
    id: 'image-12',
    number: '12',
    title: 'ON-SITE BRANDING',
    caption: 'High-visibility safety apparel and hardhat branding for active construction environments.',
    src: '/projects/bimacme/image-12.jpg',
    alt: 'BIMACME high-visibility safety vest and hardhat site branding',
    layout: 'half',
  },
];

export const BIMACME_VIDEO_CASE_STUDIES: VideoCaseStudyItem[] = [
  {
    id: 'video-01',
    number: '01',
    title: 'BUILDER WORKS COORDINATION',
    label: 'Video Case Study',
    youtubeId: 'O6aeSKlZiJE',
    url: 'https://youtu.be/O6aeSKlZiJE?si=C6JE3HTu3y1HCCHy',
    description: 'Advanced builderswork coordination and conflict resolution workflows.',
  },
  {
    id: 'video-02',
    number: '02',
    title: 'CONSTRUCTIBLE MODELING',
    label: 'Video Case Study',
    youtubeId: 'tg9CZbdCrHY',
    url: 'https://www.youtube.com/watch?v=tg9CZbdCrHY',
    description: 'Constructible model versus clash-free model execution in structural engineering.',
  },
  {
    id: 'video-03',
    number: '03',
    title: 'ENGINEERING TOMORROW: MEP & BIM',
    label: 'Video Case Study',
    youtubeId: 'RuLSCmYYwkQ',
    url: 'https://www.youtube.com/watch?v=RuLSCmYYwkQ',
    description: 'How BIMACME is redefining MEP & BIM digital construction delivery.',
  },
];
