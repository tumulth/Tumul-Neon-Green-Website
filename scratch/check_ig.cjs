const https = require('https');
const fs = require('fs');

const links = [
  'https://www.instagram.com/p/DBS7QeINbDo/',
  'https://www.instagram.com/p/DBA5swWIHdT/',
  'https://www.instagram.com/p/DA-aTgBJktv/',
  'https://www.instagram.com/p/DBK_JWKpgti/',
  'https://www.instagram.com/p/DAu4JE5KLj8/',
  'https://www.instagram.com/p/DAvMu_mvJU9/',
  'https://www.instagram.com/p/DAvoMXqt4e4/',
  'https://www.instagram.com/p/DAxWDtKJCR6/',
  'https://www.instagram.com/p/DAc2kaovGAK/',
  'https://www.instagram.com/reel/DG4oGguivL8/',
  'https://www.instagram.com/reel/DG2KGj_B4ao/',
  'https://www.instagram.com/reel/DGzsNLEsc_L/',
  'https://www.instagram.com/reel/DGzXqB_IKLX/',
  'https://www.instagram.com/reel/DGZnquRsspd/',
  'https://www.instagram.com/reel/DFrRW_RMBir/',
  'https://www.instagram.com/reel/DFoe3MfPGvA/',
  'https://www.instagram.com/reel/DFWq_z0NnzE/',
  'https://www.instagram.com/reel/DB5A9MiP_ax/',
  'https://www.instagram.com/reel/DBxnDylAzO1/'
];

async function fetchOne(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'facebookexternalhit/1.1; (+http://www.facebook.com/externalhit_uatext.php)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleM = data.match(/<meta property="og:title" content="([^"]+)"/);
        const descM = data.match(/<meta property="og:description" content="([^"]+)"/);
        const imgM = data.match(/<meta property="og:image" content="([^"]+)"/);
        resolve({
          url,
          title: titleM ? titleM[1] : null,
          desc: descM ? descM[1] : null,
          img: imgM ? imgM[1] : null
        });
      });
    }).on('error', () => resolve({ url, error: true }));
  });
}

async function main() {
  const results = [];
  for (const l of links) {
    const res = await fetchOne(l);
    console.log(res.url, res.title, res.desc);
    results.push(res);
  }
  fs.writeFileSync('scratch/ig_results.json', JSON.stringify(results, null, 2));
}

main();
