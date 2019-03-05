module.exports = {
  
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },

    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x52C3a9B0f293CaC8C1bAAbE5B62524A71211a616", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  },

  compilers: {
    solc: {
      version: "0.5.4"
    }
  }

};
