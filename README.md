# MetaCoin

Install ganache for local blockchain development

https://truffleframework.com/ganache

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
