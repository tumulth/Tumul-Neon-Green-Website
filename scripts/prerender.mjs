// Renders every route to static HTML after `vite build`, so search engines and AI
// crawlers that don't run JavaScript still read the full page. Also writes the
// sitemap and llms.txt from the same data the pages use.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const server = join(root, 'dist-ssr', 'entry-server.js');

const { render, ROUTES, buildSitemap, buildLlmsTxt, buildRobotsTxt, CASE_STUDY_FONTS } = await import(pathToFileURL(server).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const HEAD = /<!--head:start-->[\s\S]*?<!--head:end-->/;
if (!HEAD.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--head:start/end--> or <!--app-html--> markers');
}

for (const route of ROUTES) {
  const { html, head } = render(route);
  // Project pages use the case-study faces; ask for them up front there.
  const extra = route.startsWith('/work/') ? `\n    <link rel="stylesheet" href="${CASE_STUDY_FONTS}" />` : '';
  const page = template.replace(HEAD, head + extra).replace('<!--app-html-->', html);
  // With Vercel's cleanUrls, /work/subculture serves work/subculture.html.
  const file = route === '/' ? join(dist, 'index.html') : join(dist, `${route.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
  console.log('prerendered', route);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(dist, 'sitemap.xml'), buildSitemap(today));
writeFileSync(join(dist, 'llms.txt'), buildLlmsTxt());
writeFileSync(join(dist, 'robots.txt'), buildRobotsTxt());
rmSync(join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('wrote sitemap.xml, llms.txt and robots.txt');
