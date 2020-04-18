![puppy-placeholder](https://user-images.githubusercontent.com/1298086/77470457-14ad5c00-6de7-11ea-9ab7-4c8f092657e7.png)

# {{ Your Next Great Prototype }} ![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg) ![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg)

> {{ Your next great prototype description }}

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

## 📝 License

Copyright &copy; 2020 Upstatement, LLC

---

A [Puppy](https://github.com/Upstatement/puppy) 🐶 powered project
