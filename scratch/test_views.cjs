const https = require('https');

function checkViews(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'facebookexternalhit/1.1; (+http://www.facebook.com/externalhit_uatext.php)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const descMatch = data.match(/<meta property="og:description" content="([^"]+)"/);
        resolve({ url, desc: descMatch ? descMatch[1] : null, full: data.length });
      });
    }).on('error', () => resolve({ url, error: true }));
  });
}

async function run() {
  const r1 = await checkViews('https://www.instagram.com/reel/DBxnDylAzO1/');
  console.log('Reel DBxnDylAzO1 desc:', r1.desc);
  const r2 = await checkViews('https://www.instagram.com/p/DAK1Aq6sNB6/');
  console.log('Reel DAK1Aq6sNB6 desc:', r2.desc);
}
run();
