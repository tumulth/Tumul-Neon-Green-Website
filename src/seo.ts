import { PROJECTS, getProject, Project } from './data/projects';
import { SITE, SERVICES, FAQS, CLIENTS, EXPERIENCE } from './data/site';
import { parsePath } from './router';

// One place decides what every URL tells search engines and AI assistants:
// the title, description, canonical link, social image and structured data.
// The prerender step writes it into each page's HTML; the client keeps the tab title in step.

export interface Head {
  title: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  type: 'website' | 'article' | 'profile';
  jsonLd: object;
}

const abs = (path: string) => SITE.url + path;
const PERSON_ID = abs('/#person');
const BUSINESS_ID = abs('/#business');
const WEBSITE_ID = abs('/#website');

const address = {
  '@type': 'PostalAddress',
  addressLocality: SITE.city,
  addressRegion: SITE.region,
  addressCountry: 'IN',
};

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.name,
  jobTitle: SITE.jobTitle,
  description: FAQS[0].a,
  url: abs('/'),
  image: abs(SITE.portrait),
  email: `mailto:${SITE.email}`,
  address,
  homeLocation: { '@type': 'City', name: 'Pune' },
  sameAs: SITE.socials.map((s) => s.url),
  knowsAbout: [
    'Brand identity design',
    'Logo design',
    'Brand guidelines',
    'Website design',
    'UI/UX design',
    'Art direction',
    'Social media design',
    'Motion graphics',
    'Video editing',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Brand identity and website designer',
    occupationLocation: { '@type': 'City', name: 'Pune' },
  },
};

const business = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: `${SITE.name}, brand and website design`,
  description: SITE.description,
  url: abs('/'),
  image: abs(SITE.portrait),
  email: SITE.email,
  founder: { '@id': PERSON_ID },
  address,
  geo: { '@type': 'GeoCoordinates', latitude: 18.5204, longitude: 73.8567 },
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'State', name: 'Maharashtra' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  sameAs: SITE.socials.map((s) => s.url),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Design services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.includes, areaServed: 'Pune, Mumbai, India' },
    })),
  },
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: abs('/'),
  name: SITE.name,
  inLanguage: 'en-IN',
  publisher: { '@id': PERSON_ID },
};

const projectItem = (p: Project, i: number) => ({
  '@type': 'ListItem',
  position: i + 1,
  url: abs(`/work/${p.id}`),
  name: `${p.title}: ${p.discipline}`,
});

const creativeWork = (p: Project) => ({
  '@type': p.liveUrl ? ['CreativeWork', 'WebSite'] : 'CreativeWork',
  '@id': abs(`/work/${p.id}#work`),
  name: `${p.title}: ${p.discipline}`,
  headline: p.heroTagline,
  description: p.summary,
  url: abs(`/work/${p.id}`),
  image: abs(p.cover),
  dateCreated: p.year.slice(0, 4),
  creator: { '@id': PERSON_ID },
  about: { '@type': 'Organization', name: p.client.replace(/\s*\(with .*\)$/, '') },
  ...(p.place ? { locationCreated: { '@type': 'Place', name: p.place } } : {}),
  ...(p.liveUrl ? { sameAs: p.liveUrl } : {}),
  keywords: [p.discipline, ...p.role].join(', '),
});

const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});

export const buildHead = (path: string): Head => {
  const route = parsePath(path);

  if (route.name === 'project') {
    const p = getProject(route.id);
    if (p) {
      const url = abs(`/work/${p.id}`);
      return {
        title: p.seoTitle,
        description: p.summary,
        canonical: url,
        image: abs(p.cover),
        imageAlt: p.coverAlt,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            person,
            website,
            {
              '@type': 'WebPage',
              '@id': url,
              url,
              name: p.seoTitle,
              description: p.summary,
              isPartOf: { '@id': WEBSITE_ID },
              mainEntity: { '@id': `${url}#work` },
              inLanguage: 'en-IN',
            },
            creativeWork(p),
            breadcrumbs([
              { name: 'Home', path: '/' },
              { name: 'Work', path: '/work' },
              { name: p.title, path: `/work/${p.id}` },
            ]),
          ],
        },
      };
    }
  }

  if (route.name === 'work') {
    const url = abs('/work');
    const title = 'Work — brand identities, websites and campaigns | Tumul Thakur, Pune';
    const description = `${PROJECTS.length} projects by Tumul Thakur, brand and website designer in Pune: websites for Subculture and Mi Cocina, identities for Soma Cafe and Bimacme, guidelines for Sangreen Logistics.`;
    return {
      title,
      description,
      canonical: url,
      image: abs(SITE.ogImage),
      imageAlt: 'Tumul Thakur, brand and website designer in Pune',
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          person,
          website,
          {
            '@type': 'CollectionPage',
            '@id': url,
            url,
            name: title,
            description,
            isPartOf: { '@id': WEBSITE_ID },
            mainEntity: { '@type': 'ItemList', itemListElement: PROJECTS.map(projectItem) },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
          ]),
        ],
      },
    };
  }

  const url = abs('/');
  return {
    title: SITE.title,
    description: SITE.description,
    canonical: url,
    image: abs(SITE.ogImage),
    imageAlt: 'Tumul Thakur, brand and website designer in Pune',
    type: 'profile',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        person,
        business,
        website,
        {
          '@type': 'ProfilePage',
          '@id': url,
          url,
          name: SITE.title,
          description: SITE.description,
          isPartOf: { '@id': WEBSITE_ID },
          mainEntity: { '@id': PERSON_ID },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'ItemList',
          name: 'Selected work',
          itemListElement: PROJECTS.map(projectItem),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQS.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    },
  };
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export const renderHeadTags = (h: Head) =>
  [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<link rel="canonical" href="${h.canonical}" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:type" content="${h.type}" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${h.canonical}" />`,
    `<meta property="og:image" content="${h.image}" />`,
    `<meta property="og:image:alt" content="${esc(h.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${h.image}" />`,
    `<script type="application/ld+json">${JSON.stringify(h.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');

export const ROUTES = ['/', '/work', ...PROJECTS.map((p) => `/work/${p.id}`)];

export const buildSitemap = (date: string) => {
  const entry = (path: string, priority: string, image?: { loc: string; title: string }) =>
    [
      '  <url>',
      `    <loc>${abs(path === '/' ? '/' : path)}</loc>`,
      `    <lastmod>${date}</lastmod>`,
      `    <priority>${priority}</priority>`,
      image ? `    <image:image><image:loc>${abs(image.loc)}</image:loc><image:title>${esc(image.title)}</image:title></image:image>` : '',
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n');
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    entry('/', '1.0', { loc: SITE.portrait, title: 'Tumul Thakur, brand and website designer in Pune' }),
    entry('/work', '0.9'),
    ...PROJECTS.map((p) => entry(`/work/${p.id}`, '0.8', { loc: p.cover, title: p.coverAlt })),
    '</urlset>',
    '',
  ].join('\n');
};

// A plain-text summary for AI assistants (https://llmstxt.org).
export const buildLlmsTxt = () =>
  [
    `# ${SITE.name}`,
    '',
    `> ${FAQS[0].a}`,
    '',
    `Based in ${SITE.city}, ${SITE.region}, ${SITE.country}. Works with companies in Pune, Mumbai, across India and in the UK. Open to freelance projects and full-time roles.`,
    '',
    `Contact: ${SITE.email}`,
    ...SITE.socials.map((s) => `${s.label}: ${s.url}`),
    '',
    '## Services',
    '',
    ...SERVICES.map((s) => `- ${s.name}: ${s.includes}`),
    '',
    '## Work',
    '',
    ...PROJECTS.map(
      (p) => `- [${p.title}: ${p.discipline}](${abs(`/work/${p.id}`)}): ${p.summary}${p.liveUrl ? ` Live site: ${p.liveUrl}` : ''}`
    ),
    '',
    '## Experience',
    '',
    ...EXPERIENCE.map((j) => `- ${j.role}, ${j.company} (${j.years})`),
    '',
    '## Clients',
    '',
    CLIENTS.join(', '),
    '',
    '## Questions and answers',
    '',
    ...FAQS.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
  ].join('\n');
