const http = require('http');

function check(url) {
  return new Promise(resolve => {
    http.get(url, res => resolve({ url, status: res.statusCode })).on('error', e => resolve({ url, error: e.message }));
  });
}

async function testAll() {
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/projects/social-media-creatives/04-centralpark-mockup.png',
    'http://localhost:3000/projects/social-media-creatives/05-centralpark-grid.png',
    'http://localhost:3000/projects/social-media-creatives/06-parcestique-mockup.png',
    'http://localhost:3000/projects/social-media-creatives/07-smartbazaar-mockup.png',
    'http://localhost:3000/projects/social-media-creatives/08-bandish-mockup.png',
    'http://localhost:3000/projects/social-media-creatives/09-bandish-grid.png',
    'http://localhost:3000/projects/social-media-creatives/live/ig_asset_20.jpg',
  ];
  for (const u of urls) {
    const res = await check(u);
    console.log(res.status === 200 ? 'OK' : 'ERR', res.status, u);
  }
}
testAll();
