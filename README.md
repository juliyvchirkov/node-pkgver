# node-pkgver

**Get the current version of your NodeJs project**

<img src="https://img.shields.io/npm/dm/node-pkgver?color=seagreen&logo=npm&logoColor=beige"> <img src="https://img.shields.io/github/languages/top/juliyvchirkov/node-pkgver?color=crimson&logo=codenewbie&logoColor=beige"> <img src="https://img.shields.io/static/v1?label=NodeJs&message=%3E%3D10.12.0&color=blueviolet&logo=node.js&logoColor=white"> <img src="https://img.shields.io/npm/l/node-pkgver?color=white&logo=coursera&logoColor=beige"> <img src="https://img.shields.io/maintenance/yes/2022?color=orange&logo=ubuntu&logoColor=beige">

This module will return the version string for the current (running)
`NodeJs` application. The version string is extracted out of `version`
property of appʼs `package.json`

## Whatʼs the catch of one more implementation?

-   lightweight, clean and simple
-   zero dependencies
-   no external calls to `npm` or whatever
-   modern `ES module` format
-   `NodeJs` v10.12.0 or higher
-   ease of use

## Install

``` bash
npm install node-pkgver
```

## Usage

``` javascript
import version from 'node-pkgver'
```

Thatʼs all!

From now on constant `version` keeps the version string of your project,
i.e. current (running) `NodeJs` application, extracted out of `version`
property of appʼs `package.json`

Or `null` if `version` property is empty or missing from appʼs
`package.json`, or appʼs `package.json` is missing per se

## Bugs and oversights

If youʼve faced some bug or oversight, please [follow this link to
create the issue](https://github.com/juliyvchirkov/node-pkgver/issues),
and thank you for your time and contribution in advance!

------------------------------------------------------------------------

### **Glory to Ukraine!** 🇺🇦

Juliy V. Chirkov,
[twitter.com/juliychirkov](https://twitter.com/juliychirkov)
