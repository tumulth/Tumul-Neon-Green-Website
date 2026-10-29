// Everything the site says about Tumul that isn't a project. The pages and the
// prerendered head (title, JSON-LD, llms.txt, sitemap) all read from here.

export const SITE = {
  // The live address. Change this one line when a custom domain is connected in Vercel.
  url: 'https://tumul-neon-green-website.vercel.app',
  name: 'Tumul Thakur',
  jobTitle: 'Brand identity and website designer',
  title: 'Tumul Thakur — Brand & Website Designer in Pune',
  description:
    'Tumul Thakur is a brand identity and website designer in Pune. Logos, brand guidelines, websites and campaigns for companies in Pune, Mumbai and beyond.',
  email: 'tumul41@gmail.com',
  city: 'Pune',
  region: 'Maharashtra',
  country: 'India',
  since: 2020,
  portrait: '/tumul-thakur-designer-pune.jpg',
  ogImage: '/og.jpg',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tumul-thakur-814a6624b/' },
    { label: 'Instagram', url: 'https://www.instagram.com/tumulbut.thefakeone/' },
    { label: 'Behance', url: 'https://www.behance.net/tumulthakur' },
  ],
};

export interface Service {
  name: string;
  includes: string;
  examples: { label: string; projectId: string }[];
}

export const SERVICES: Service[] = [
  {
    name: 'Brand identity',
    includes: 'Logo, colours, type, stationery',
    examples: [
      { label: 'Soma Cafe', projectId: 'soma-cafe' },
      { label: 'Bimacme', projectId: 'bimacme' },
    ],
  },
  {
    name: 'Brand guidelines',
    includes: 'Rules your printers and team can follow',
    examples: [{ label: 'Sangreen Logistics', projectId: 'sangreen-logistics' }],
  },
  {
    name: 'Websites',
    includes: 'Designed, built, ready for search',
    examples: [
      { label: 'Subculture', projectId: 'subculture' },
      { label: 'Mi Cocina', projectId: 'mi-cocina' },
    ],
  },
  {
    name: 'Campaigns and social',
    includes: 'Launch looks, posts and reel templates',
    examples: [
      { label: 'Krisala × Hiranandani', projectId: 'krisala-hiranandani' },
      { label: 'Smart Bazaar', projectId: 'social-media-creatives' },
    ],
  },
  {
    name: 'Motion and video',
    includes: 'Explainers, reels and logo animation',
    examples: [{ label: 'Bimacme films', projectId: 'bimacme' }],
  },
  {
    name: 'Print and spaces',
    includes: 'Signage, office walls, stands, packaging',
    examples: [{ label: 'Sangreen Renewables', projectId: 'sangreen-future-renewables' }],
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  work: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Really liked how the entire brand identity came together. The work felt clean, professional and aligned with what we wanted to communicate.',
    author: 'Bimacme',
    work: 'Brand identity',
  },
  {
    quote:
      'Tumul understood the vibe we were going for and brought some really good ideas to the table. The creatives have been great to work with.',
    author: 'Butta Burger',
    work: 'Creative direction',
  },
  {
    quote:
      'Working with Tumul was smooth and easy. He understood the vision and put together work that felt thoughtful and well executed.',
    author: 'Nikhil Kapahi',
    work: 'Client',
  },
  {
    quote: 'Loved the creativity and attention to detail. The designs feel on brand and give us a much stronger visual presence.',
    author: 'Burgyard',
    work: 'Visual design',
  },
  {
    quote:
      'Great experience working together. Tumul understood the brief well and translated our ideas into designs that felt right for the brand.',
    author: 'Buyers Match',
    work: 'Brand design',
  },
  {
    quote:
      'Really enjoyed working with Tumul. He brought a fresh perspective to the project and was great at translating ideas into visuals.',
    author: 'Masala Chai with Rahul Mahajan',
    work: 'Visual concepts',
  },
];

export interface Job {
  role: string;
  company: string;
  years: string;
}

export const EXPERIENCE: Job[] = [
  { role: 'Freelance brand and web designer', company: 'Independent, Pune', years: '2025 – now' },
  { role: 'Senior Visualiser', company: 'Bandish Studios, Pune', years: '2024 – 2025' },
  { role: 'Video Editor and Junior Graphic Designer', company: 'House of Content, Pune', years: '2022 – 2024' },
  { role: 'Graphic Design Intern', company: 'Team Ranuver, Pune', years: '2021 – 2022' },
  { role: 'Graphic Design Intern', company: 'Paycrunch, remote', years: '2020 – 2021' },
];

export const CLIENTS: string[] = [
  'Bimacme',
  'Krisala Developers',
  'Hiranandani Communities',
  'Bandhan Bank',
  'Smart Bazaar',
  'The Central Park Hotel',
  'Sangreen Logistics',
  'Sangreen Future Renewables',
  'Siddhivinayak Precast',
  'Subculture',
  'Mi Cocina',
  'Butta Burger',
  'Burgyard',
  'Buyers Match',
];

export const TOOLS = 'Figma, Illustrator, Photoshop, After Effects, Premiere Pro';

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'Who is Tumul Thakur?',
    a: 'Tumul Thakur is a brand identity and website designer based in Pune, Maharashtra. Since 2020 he has designed logos, brand guidelines, websites, social campaigns and video for clients including Bimacme, Krisala Developers with Hiranandani Communities, Bandhan Bank and Smart Bazaar.',
  },
  {
    q: 'Are you looking for a brand designer in Pune?',
    a: 'Then we should talk. I work from Pune and have designed for cafés in Aundh and Baner, a township in Hinjawadi and engineering firms across the city. Meeting in person is easy, and so is working entirely online.',
  },
  {
    q: 'Do you work with clients in Mumbai?',
    a: 'Yes. Most of my work happens over calls and shared files, so a client in Mumbai is no different from one in Pune. I have worked on campaigns for Mumbai brands such as Hiranandani Communities and Smart Bazaar.',
  },
  {
    q: 'Do you work with companies outside India?',
    a: 'Yes. Bimacme sells to contractors in the UK, and its website and identity were made for that audience. I work in IST, which overlaps with the UK working day every afternoon.',
  },
  {
    q: 'What does a brand identity include?',
    a: 'Usually a logo and its versions, colours, typefaces, stationery and a short guide to using them. Larger companies add a full brand guidelines book; the one for Sangreen Logistics runs to 26 sections.',
  },
  {
    q: 'Do you design and build websites?',
    a: 'Yes. I design the site and build it, so what you approve is what goes live. Subculture, Mi Cocina and Bimacme were all designed and built by me in 2026, with their menus, services and addresses as real text that search engines can read.',
  },
  {
    q: 'How long does a project take?',
    a: 'A brand identity usually takes four to six weeks. A website takes three to five weeks once the content is ready. Brand guidelines add two to four weeks to an identity.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on what you need. After a short call I send a fixed price and a timeline in writing, before any work starts.',
  },
  {
    q: 'Are you open to full-time roles?',
    a: 'Yes. I am open to full-time brand, visual and web design roles at studios, agencies and in-house teams in Pune or Mumbai, and to remote roles. My CV is available on request.',
  },
  {
    q: 'Which tools do you use?',
    a: `${TOOLS}. Websites are designed first and then built, with performance and search in mind.`,
  },
];
