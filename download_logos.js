const https = require('https');
const fs = require('fs');

const logos = [
    { name: 'swiggy', url: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg' },
    { name: 'zomato', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Zomato_Logo.svg' },
    { name: 'amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'blinkit', url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Blinkit-yellow-app-icon.svg' },
    { name: 'uber', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
    { name: 'meesho', url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Meesho_Logo.svg' },
    { name: 'dunzo', url: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Dunzo_Logo.svg' }
];

fs.mkdirSync('./public/logos', { recursive: true });

logos.forEach(logo => {
    https.get(logo.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        let rawData = '';
        res.setEncoding('utf8');

        if (logo.url.endsWith('.png')) {
            const w = fs.createWriteStream(`./public/logos/${logo.name}.png`);
            res.pipe(w);
        } else {
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                fs.writeFileSync(`./public/logos/${logo.name}.svg`, rawData);
                console.log('Saved ' + logo.name);
            });
        }
    }).on('error', (e) => {
        console.error(e.message);
    });
});
