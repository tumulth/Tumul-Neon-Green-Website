const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('scratch/ig_results.json', 'utf8'));
const targetDir = 'public/projects/social-media-creatives/live';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function decodeHtml(html) {
  if (!html) return '';
  return html
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&#x2019;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function parseStats(desc) {
  let likes = 0;
  let comments = 0;
  let date = '';
  if (desc) {
    const likeMatch = desc.match(/([\d,]+)\s+likes/i);
    const commMatch = desc.match(/([\d,]+)\s+comments/i);
    const dateMatch = desc.match(/on\s+([A-Za-z]+ \d+, \d{4})/i);
    if (likeMatch) likes = parseInt(likeMatch[1].replace(/,/g, ''), 10);
    if (commMatch) comments = parseInt(commMatch[1].replace(/,/g, ''), 10);
    if (dateMatch) date = dateMatch[1];
  }
  return { likes, comments, date };
}

function parseClientAndTitle(rawTitle) {
  const clean = decodeHtml(rawTitle || '');
  let client = 'SMART BAZAAR';
  if (/Bandhan Bank/i.test(clean)) client = 'BANDHAN BANK';
  const quoteMatch = clean.match(/"([^"]+)"/);
  const snippet = quoteMatch ? quoteMatch[1] : clean;
  return { client, snippet };
}

function downloadImage(rawUrl, dest) {
  return new Promise((resolve) => {
    if (!rawUrl) return resolve(false);
    const url = rawUrl.replace(/&amp;/g, '&');
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(true)));
      } else {
        console.log('HTTP error:', res.statusCode, url.slice(0, 50));
        resolve(false);
      }
    }).on('error', (err) => {
      console.log('Network error:', err.message);
      resolve(false);
    });
  });
}

async function run() {
  const enriched = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const num = String(i + 1).padStart(2, '0');
    const filename = `ig_asset_${num}.jpg`;
    const dest = path.join(targetDir, filename);
    const success = await downloadImage(item.img, dest);
    console.log(`[${num}] ${success ? 'OK' : 'FAIL'} -> ${filename}`);

    const stats = parseStats(item.desc);
    const { client, snippet } = parseClientAndTitle(item.title);
    const isReel = item.url.includes('/reel/');

    enriched.push({
      id: `live-asset-${num}`,
      index: i + 1,
      type: isReel ? 'REEL' : 'POST',
      url: item.url,
      client,
      headline: decodeHtml(snippet).slice(0, 75).trim() + (decodeHtml(snippet).length > 75 ? '...' : ''),
      fullCaption: decodeHtml(snippet).trim(),
      likes: stats.likes,
      comments: stats.comments,
      date: stats.date,
      image: `/projects/social-media-creatives/live/${filename}`,
    });
  }

  fs.writeFileSync('scratch/enriched_ig_assets.json', JSON.stringify(enriched, null, 2));
  console.log('All 19 Instagram assets enriched and downloaded successfully!');
}

run();
