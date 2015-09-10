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
```javascript
    bcyrpt.hash('my password', 10)
      .then(console.log, console.error)
```

comparing:
```javascript
    bcyrpt.compare('my password', someHash)
      .then(console.log, console.error)
```

generating a salt:
```javascript
    bcyrpt.genSalt(10)
      .then(console.log, console.error)
```

calculating the rounds used in a salt:
```javascript
    bcyrpt.getRounds(someHash)
      .then(console.log, console.error)
```
