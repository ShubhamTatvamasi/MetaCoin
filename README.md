# MetaCoin

[![Build Status](https://travis-ci.org/ShubhamTatvamasi/MetaCoin.svg)](https://travis-ci.org/ShubhamTatvamasi/MetaCoin)
[![Coverage Status](https://img.shields.io/coveralls/github/ShubhamTatvamasi/MetaCoin.svg)](https://coveralls.io/github/ShubhamTatvamasi/MetaCoin)
[![Known Vulnerabilities](https://snyk.io/test/github/ShubhamTatvamasi/MetaCoin/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ShubhamTatvamasi/MetaCoin?targetFile=package.json)

Install ganache for local blockchain development

https://truffleframework.com/ganache

It integrates with Truffle, an Ethereum development environment. Please install Truffle.
```
npm install -g truffle
```

Install NPM Packages
```
npm i
```
---

Start ganache, in setting your port should be `8545`

To test to Contract
```
npm run test
```

To Deploy on local network
```
npm run migrate
```

To Deploy on rinkeby network
```
npm run rinkeby
```
> If you want to use your own address, change the `mnemonic` value in *truffle-config.js* 

For generating coverage report:
```
npm run coverage
```

Rename coverage folder
```
mv coverage docs
```
