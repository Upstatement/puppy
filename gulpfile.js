const { src, dest, watch, series } = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')();
const log = require('gulplog');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const puppy = require('@upstatement/puppy');
const gulpScreenshot = require('@upstatement/puppy/lib/gulp/screenshots');
const stream = require('stream');
const util = require('util');

const isProduction = process.env.NODE_ENV === 'production';
const bundler = webpack(webpackConfig);
const pipeline = util.promisify(stream.pipeline);

log.info('Build Mode: %s', isProduction ? 'Production' : 'Development');

/**
 * Compile HTML
 *
 * - Extract site/page meta with Puppy
 * - Compile Twig templates
 * - Minify HTML for optimized builds
 */
const html = async function() {
  const pages = await puppy({
    publicPath: '/',
    pages: 'src/pages/**/*',
    data: 'src/data/**/*',
    screenshots: 'dist/thumbnails/**/*',
  });

  const twig = $.twig({
    namespaces: { templates: 'src/templates' },
    useFileContents: true,
  });

  const minify = $.if(
    isProduction,
    $.if(
      '*.html',
      $.htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }),
    ),
  );
  const dist = dest('dist');

  return pipeline(pages, twig, minify, dist);
};

/**
 * Copy public assets to build directory
 */
const publicFiles = function() {
  return src('public/**/*').pipe(dest('dist'));
};

/**
 * Bundle scripts and styles with Webpack.
 */
const bundle = function() {
  return new Promise((resolve, reject) => {
    bundler.run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        log.info(
          stats.toString({
            chunks: false,
            colors: true,
          }),
        );
        resolve();
      }
    });
  });
};

/**
 * Serve for local development.
 */
const serve = function() {
  browserSync.init({
    notify: false,
    reloadDelay: 500,
    open: false,
    server: {
      baseDir: 'dist',
    },
    middleware: [
      webpackDevMiddleware(bundler, {
        stats: 'minimal',
        writeToDisk: true,
      }),
    ],
    plugins: ['bs-fullscreen-message'],
  });

  function reload(done) {
    browserSync.reload();
    done();
  }

  // Reload browser after Webpack compilation.
  bundler.hooks.done.tap('serve', stats => {
    if (stats.hasErrors() || stats.hasWarnings()) {
      browserSync.sockets.emit('fullscreen:message', {
        title: 'Webpack Error',
        body: stats.toString(),
        timeout: 100000,
      });
      return;
    }
    browserSync.reload();
  });

  // Recompile templates if any content changes.
  watch(['src/pages/**/*', 'src/templates/**/*', 'src/data/**/*'], series(html, reload));

  // Trigger static task when files in the public directory are changed.
  watch('public/**/*', series(publicFiles, reload));
};

/**
 * Generate page screenshots.
 */
const capture = async function() {
  const pages = await puppy({ pages: 'src/pages/**/*' });
  const screenshot = gulpScreenshot({
    viewport: {
      width: 1000,
      height: 750,
    },
    exclude: page => page.thumbnail || page.thumbnail === false || page.menu === false,
  });
  return pipeline(pages, screenshot, dest('dist/thumbnails'));
};

/**
 * Clean build directory
 */
const clean = function() {
  return del(['dist']);
};

/**
 * Helper for skipping tasks.
 *
 *
 * @param {String} name
 * @param {String} message
 */
const skipTask = function(name, message = '') {
  return {
    [name]: function(cb) {
      if (message) {
        log.info(message);
      }
      cb();
    },
  }[name];
};

/**
 * Exported tasks.
 */
const screenshot = process.env.DISABLE_SCREENSHOTS
  ? skipTask(
    'screenshot',
    `Skipping task! Reason: process.env.DISABLE_SCREENSHOTS=${process.env.DISABLE_SCREENSHOTS}`,
  )
  : series(capture, publicFiles, html);
const build = series(clean, publicFiles, bundle, html, screenshot);

module.exports = {
  clean,
  build,
  serve,
  default: series(build, serve),
};
