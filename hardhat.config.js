require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    C1Token: {
      url: 'https://obscure-eureka-66g7ww4xprqhrggg-9650.app.github.dev/ext/bc/status/rpc.bitfinity.network',
      accounts: ['56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027'],
      chainId: 95268,
      timeout: 120000,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
