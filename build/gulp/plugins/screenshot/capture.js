const Vinyl = require('vinyl');

/**
 * Capture screenshot with Puppeteer.
 *
 * @return Vinyl
 */
module.exports = async ({ file, browser, baseUrl, options }) => {
  const page = await browser.newPage();
  await page.setViewport(options);

  const url = `${baseUrl}/${file.relative}`;
  await page.goto(url);
  const screenshot = await page.screenshot();

  return new Vinyl({
    cwd: file.cwd,
    path: `static/screenshots/${file.relative}.png`,
    contents: screenshot,
  });
};
