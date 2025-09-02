const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false; // production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const port = process.env.PORT || 3000; // port fourni par o2switch
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    // Toutes les requêtes sont gérées par Next.js (pages + app router + API)
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
