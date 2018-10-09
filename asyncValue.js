const util = require('util')

module.exports = (payload, paramOne, paramTwo) => {
  console.log('──────────────────')
  console.log(util.inspect(payload.originalConfig, false, null, true))
  console.log('CLI options', payload.opts)
  console.log('paramOne', paramOne)
  console.log('paramTwo', paramTwo)
  // simulate remote config fetch
  return fetchSecretsFromRemoteStore()
}

function fetchSecretsFromRemoteStore() {
  return delay(1000).then(() => {
    return Promise.resolve('Async value from SECRET STORE')
  })
}

function delay(t, v) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, v), t)
  })
}
