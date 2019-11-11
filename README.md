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
- Lightweight test coverage with [AVA](https://github.com/avajs/ava)

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
# Start a dev server
npm start

# Check for JS/SCSS style violations prior to commit
npm run lint
```

### Production

```sh
npm run build
npx serve dist
```

## 🤝Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/upstatement/puppy-starter/issues).

### Testing

This project includes lightweight test coverage to ensure that dependency updates don't break anything. It uses the [ava](https://github.com/avajs/ava) test runner, with tests executed on every PR using [Travis CI](http://travis-ci.org/).

To run the tests locally:

```sh
npm test
```

Tests utilize [snapshot testing](https://github.com/avajs/ava/blob/master/docs/04-snapshot-testing.md) to ensure that generated files don't change in unexpected ways.

If you're making updates to the starter template and _are_ expecting changes to generated files, you can run `npm test -- -u` to update test snapshots.

### Dependabot

Node dependencies are managed automatically using [Depandabot](https://dependabot.com/).

It will submit a PR to the repo updating dependencies whenever updates within the specified version constraints are available.

## 📝License

Copyright &copy; 2019 Upstatement, LLC

***

A [Puppy](https://github.com/Upstatement/puppy) 🐶 powered project
