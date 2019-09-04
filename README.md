# Welcome to Puppy Starter 👋

> The quickest way to a data-driven Twig based prototype

This starter kit features...

- A static prototyping framework (powered by Puppy) with Twig templates
- Data fixtures
- Sass
- Webpack
- PostCSS / Autoprefixer
- Modernizr
- Babel
- Linters

## Prerequisites
![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg)

## Install

```sh
nvm install
npm install
```

> Note: `@upstatement/puppy` is a private repository. If you are not logged into NPM locally, `npm install` will return the following error: `npm ERR! 404 Not Found - GET https://registry.npmjs.org/@upstatement/puppy/...`. To fix, run `npm login` using the credentials for NPM in 1Password (email is tech@upstatement.com). This will automatically generate a new `.npmrc` file at the root of your user directory `(~/.npmrc)`. Once logged in, you can re-run `npm install`.

## Usage

### Development

```sh
npm start
```

### Production

```sh
npm run build
npx serve dist
```

## 🤝Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/upstatement/puppy-starter/issues).

## 📝License

Copyright &copy; 2019 Upstatement, LLC

***

A [Puppy](https://github.com/Upstatement/puppy) 🐶 powered project
