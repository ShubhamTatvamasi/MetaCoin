const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "model jar shed wall faint security surge script great glove find book";

module.exports = {
  
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/")
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  },

  compilers: {
    solc: {
      version: "0.5.4"
    }
  }

};
