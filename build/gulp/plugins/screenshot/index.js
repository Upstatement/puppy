const through = require('through2');
const http = require('http');
const puppeteer = require('puppeteer');
const handle = require('serve-handler');
const capture = require('./capture');

module.exports = (
  options = {
    width: 1200,
    height: 600,
    deviceScaleFactor: 1,
  },
) => through.obj(async function(file, enc, cb) {
  const server = startServer();
  const browser = await startBrowser();

  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  const image = await capture({ file, baseUrl, browser, options });
  this.push(image);

  browser.close();
  server.close();

  cb();
});

function startServer() {
  return http.createServer((req, resp) => handle(req, resp, { public: 'dist' })).listen(0);
}

function startBrowser() {
  return puppeteer.launch({ headless: true });
}
