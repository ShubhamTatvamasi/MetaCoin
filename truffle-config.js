const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "model jar shed wall faint security surge script great glove find book";
// 0xE32B48a42BFeBAB813209C8D444904C6bb8CDCeB
// https://rinkeby.etherscan.io/address/0xE32B48a42BFeBAB813209C8D444904C6bb8CDCeB

module.exports = {
  
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },

    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,         // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01      // <-- Use this low gas price
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/c813678fcc8d4145ba4111d7a9d565b8")
      },
      network_id: 4,
      gas: 1e6,
      gasPrice: 1e10
    }
  },

  compilers: {
    solc: {
      version: "0.5.8",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }

};
