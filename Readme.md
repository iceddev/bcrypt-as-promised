bcrypt-as-promised
==================

[![Build Status](https://travis-ci.org/iceddev/bcrypt-as-promised.svg?branch=master)](https://travis-ci.org/iceddev/bcrypt-as-promised)

A promisified version of [bcrypt](https://github.com/ncb000gt/node.bcrypt.js)

## Install via NPM
```
npm install bcrypt-as-promised
```

## Basic Usage

hashing:
```js
bcrypt.hash('my password', 10)
  .then(console.log, console.error)
```

comparing:
```js
bcrypt.compare('my password', someHash)
  .then(console.log, console.error)
```

__Note: an invalid password/hash combo errors as a rejected promise__

The rejection can be checked against `instanceof bcrypt.MISMATCH_ERROR`

```js
bcrypt.compare('invalid password', someHash)
  .then(handleValidPassword)
  .catch(bcrypt.MISMATCH_ERROR, handleInvalidPassword)
  .catch(handleOtherErrors);
```

generating a salt:
```js
bcrypt.genSalt(10)
  .then(console.log, console.error)
```

calculating the rounds used in a salt:
```js
bcrypt.getRounds(someHash)
  .then(console.log, console.error)
```
