const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://www.instagram.com/p/DAK1Aq6sNB6/';

https.get(url, { headers: { 'User-Agent': 'facebookexternalhit/1.1; (+http://www.facebook.com/externalhit_uatext.php)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const titleM = data.match(/<meta property="og:title" content="([^"]+)"/);
    const descM = data.match(/<meta property="og:description" content="([^"]+)"/);
    const imgM = data.match(/<meta property="og:image" content="([^"]+)"/);
    console.log('Title:', titleM ? titleM[1] : null);
    console.log('Desc:', descM ? descM[1] : null);
    console.log('Img:', imgM ? imgM[1] : null);

    if (imgM && imgM[1]) {
      const imgUrl = imgM[1].replace(/&amp;/g, '&');
      const proto = imgUrl.startsWith('https') ? https : http;
      proto.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (imgRes) => {
        if (imgRes.statusCode === 200) {
          const file = fs.createWriteStream('public/projects/social-media-creatives/live/ig_asset_20.jpg');
          imgRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('SUCCESS: Saved to public/projects/social-media-creatives/live/ig_asset_20.jpg');
          });
        } else {
          console.log('Failed to download image, status:', imgRes.statusCode);
        }
      });
    }
  });
}).on('error', (e) => console.error(e));
