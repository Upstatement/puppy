# Welcome to Puppy Starter 👋

> The quickest way to a data-driven Twig based prototype

This starter kit features...

- A static prototyping framework (powered by [Puppy](https://github.com/Upstatement/puppy)) with Twig templates
- Data fixtures
- Sass
- Webpack
- PostCSS / Autoprefixer
- Modernizr
- Babel
- JS linting with [eslint](https://eslint.org/)
- SCSS linting with [stylelint](https://github.com/stylelint/stylelint)
- Code formatting with [prettier](https://prettier.io/)

## Prerequisites

![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg)

## Install

```sh
nvm install
npm install
```

## Usage

### Development

```sh
# Start a dev server
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

Publish the resulting `dist` directory to a static web server and you're done!

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

---

A [Puppy](https://github.com/Upstatement/puppy) 🐶 powered project
