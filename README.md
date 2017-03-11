[![npm package](https://badge.fury.io/js/httpr.svg)](https://badge.fury.io/js/httpr)
[![Build Status](https://travis-ci.org/RecuencoJones/httpr.png?branch=develop)](https://travis-ci.org/RecuencoJones/httpr)

# httpr

A simple library for working with HTTP requests in any environment, independent of the implementation.

Httpr is not just another HTTP provider, in fact it is an abstraction from other HTTP providers like XHR,
jquery, fetch, etc.

Httpr provides a common interface to all of them, featuring also interceptors, which
offer powerful options for managing HTTP requests, from adding headers and query parameters, to middleware
caches or formatting requests and responses as needed.

## Import

The library requires a peer of Lodash, and you should also include es6-promise polyfill if necessary.

### ES6 import

```
import {Httpr} from 'httpr';

const http = new Httpr();
```

### Commonjs

```
const Httpr = require('httpr').Httpr;

const http = new Httpr();
```

### Browser

```
<script src="path/to/lodash.js"></script>
<script src="path/to/dist/httpr[.min].js"></script>

<script>
  var http = new httpr.Httpr();
</script>
```

## Type Definitions

For TypeScript usage, a file with type definitions is bundled in npm.

This file is generated using [barrel-defgen](https://github.com/RecuencoJones/barrel-defgen).

## Building

```
npm install
npm run build
```

These commands will setup the package and generate the distributable files as well as the type definitions.

Other tasks:

- `npm run build:umd` - generate library bundle.
- `npm run build:min` - generate minified library bundle.
- `npm run build:defs` - generate definitions from barrel to `defs` directory.
- `npm run clean` - remove generated directories.
- `npm run lint` - check style of source files.
- `npm run doc` - generate documentation from sources to `doc` directory.
- `npm run test` - run all test suites.
- `npm run test:unit` - run unit tests only.
