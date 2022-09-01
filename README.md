# hamongts

<!-- badges: start -->

[![CodeQL](https://github.com/mong/hamongts/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/mong/hamongts/actions/workflows/codeql-analysis.yml)
[![Deploy app to AWS](https://github.com/mong/hamongts/actions/workflows/aws_deploy.yml/badge.svg)](https://github.com/mong/hamongts/actions/workflows/aws_deploy.yml)
[![Node.js CI](https://github.com/mong/hamongts/actions/workflows/node.js.yml/badge.svg)](https://github.com/mong/hamongts/actions/workflows/node.js.yml)
[![Codecov test coverage](https://codecov.io/gh/mong/hamongts/branch/develop/graph/badge.svg)](https://codecov.io/gh/mong/hamongts?branch=develop)
[![GitHub open issues](https://img.shields.io/github/issues/mong/hamongts.svg)](https://github.com/mong/hamongts/issues)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

<!-- badges: end -->

This is the [Next.js](https://nextjs.org/) app behind [helseatlas](https://www.skde.no/helseatlas) web page.

## Development

There is two long-lived branches in this repository: `main` and `develop`. All changes to `main` will update [www.skde.no/helseatlas](https://www.skde.no/helseatlas). All changes to `develop` will update [test.skde.no/helseatlas](https://test.skde.no/helseatlas).

New features and changes goes into the `develop` branch through a _Pull Request_ (PR). Before these changes go into the `main` branch, the webpage [test.skde.no/helseatlas](https://test.skde.no/helseatlas) has to be checked for errors.

The `develop` branch will then be merged into the `main` branch with

```bash
git checkout main
git fetch origin develop:develop
git merge --no-ff develop
git push
```

Changes directly commited to the `main` branch (for instance new _News_ posts) have to be merged into the `develop` branch:

```bash
git checkout develop
git fetch origin main:main
git merge main # with fast forward, if possible
git push
```

### Run and develop it locally

Run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000/helseatlas](http://localhost:3000/helseatlas) with your browser to see the result.

### Run CMS locally

Start up `netlify-cms-proxy-server` from the root directory of the repository

```bash
cd hamongts
npx netlify-cms-proxy-server
```

Run the helseatlas page locally

```bash
cd hamongts
yarn install && yarn run dev
```

Open the admin page locally her: http://localhost:3000/helseatlas/admin/index.html
