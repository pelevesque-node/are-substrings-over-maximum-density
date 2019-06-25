[![Build Status](https://travis-ci.org/pelevesque/are-substrings-over-maximum-density.svg?branch=master)](https://travis-ci.org/pelevesque/are-substrings-over-maximum-density)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/are-substrings-over-maximum-density/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/are-substrings-over-maximum-density?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# are-substrings-over-maximum-density

Checks if substrings are over maximum densities in a string.

## Node Repository

https://www.npmjs.com/package/@pelevesque/are-substrings-over-maximum-density

## Installation

`npm install @pelevesque/are-substrings-over-maximum-density`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring

```js
const areSubstringsOverMaximumDensity = require('@pelevesque/are-substrings-over-maximum-density')
```

### One Check

```js
// over density returns true
// 'a' takes up 50% of the string, more than a 25% density
const str = 'aaaabbbb'
const checks = { 'a': 0.25 }
const result = areSubstringsOverMaximumDensity(str, checks)
// result === true
```

```js
// equal to density returns false
const str = 'aaaabbbb'
const checks = { 'a': 0.5 }
const result = areSubstringsOverMaximumDensity(str, checks)
// result === false
```

```js
// under density returns false
const str = 'a man, a hog, and a fly'
const checks = { 'hog': 0.5 }
const result = areSubstringsOverMaximumDensity(str, checks)
// result === false
```

### Multiple Checks

```js
// when one is over density, it returns true ('a' is over 25%)
const str = 'aaaabbbb'
const checks = { 'a': 0.25, 'b': 0.5, 'c': 0.3 }
const result = areSubstringsOverMaximumDensity(str, checks)
// result === true
```

```js
// when all are under or equal to density, it returns false
const str = 'a man, a hog, and a fly'
const checks = { 'a': 0.5, 'hog': 0.5, 'c': 0.3 }
const result = areSubstringsOverMaximumDensity(str, checks)
// result === false
```
