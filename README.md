![puppy-placeholder](https://user-images.githubusercontent.com/1298086/77470457-14ad5c00-6de7-11ea-9ab7-4c8f092657e7.png)

# {{ Your Next Great Prototype }} ![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg) ![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg)

> {{ Your next great prototype description }}

## 📜 About

- Pages are authored in HTML or, optionally, [Twig](https://github.com/twigjs/twig.js/wiki) and live in the [`src/pages`](src/pages) directory.
- Twig templates and partials live in [`src/templates`](src/templates).
- Site data files live in [`src/data`](src/data). Drop any `.json`, `.yml`, or `.js` file exporting a function into this directory and access the resulting data in Twig templates using `{{ site.data['path/to/file.ext'] }}`. Powered by [Puppy](https://www.npmjs.com/package/@upstatement/puppy).
- Styles are authored with [Sass](https://sass-lang.com/) and live in [`src/scss`](src/scss).
- Javascripts live in [`src/js`](src/js). They are transipiled at build time with [Babel](https://babeljs.io/) so that they can take advantage of [modern JS syntax](https://babeljs.io/docs/en/learn)
- Any files in the [`public`](public) directory are copied to the web root recursively at build time.
- Static assets are bundled at build time using [Webpack](https://webpack.js.org/).
- All source assets are pulled together with [Gulp](https://gulpjs.com/) and used to generate a static site in the `dist` directory.

## ✨ Install

```sh
# Install Node & NPM with [NVM](https://github.com/nvm-sh/nvm)
nvm install

# Install project dependencies
npm install
```

## 👩‍💻 Usage

### Development

```sh
# Start a local dev server
npm start

# Check for JS/SCSS style violations prior to commit
npm run lint

# Fix the fixable linter violations
npm run lint:fix

# Format code with Prettier
npm run format
```

### Production

```sh
# Build for production
npm run build

# Serve locally using `serve`
npx serve dist
```

#### Thumbnail Previews

You can capture screenshots of your pages by setting the `thumbnail` attribute to `auto` in your page's front matter header:

```yml
thumbnail: auto
```

The next time you run `npm run build` a screenshot will be generated for that page and displayed in the prototype index.

If the automated screenshots aren't cutting it, you can provide your own by dropping an image into the `public/thumbnails` directory and referencing its name in your page's front matter header:

**Page**: src/pages/example.html

**Thumbnail**: public/screenshots/example.png

**Front Matter**:

```yml
thumbnail: example.png
```

### Deployment

The output of `npm run build` is a static site. You can drop the resulting `dist` directory on any web server.

An excellent choice is [Netlify](https://www.netlify.com/).

You can deploy your work to Netlify with their [CLI tool](https://github.com/netlify/cli).

```
npm install netlify-cli -g
netlify init
netlify deploy
```

## Examples & Links

* Visit the [Puppy Demo](https://puppy-demo.upstatement.com/) to see what a sample project https://puppy-demo.upstatement.com/
* Read the [tutorial](https://puppy-template.upstatement.com/tutorial.html) to get up and running
* View the [default template](https://puppy-template.upstatement.com/): this is the starting place once you clone and run Puppy for the first time.

![Overview](https://user-images.githubusercontent.com/1298086/85171525-2b741b00-b23d-11ea-9542-0d223cd0ef2d.png)


## 📝 License

Copyright &copy; 2020 Upstatement, LLC

---

A [Puppy](https://github.com/Upstatement/puppy) 🐶 powered project
