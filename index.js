const path = require('path')
const util = require('util')
// const Configorama = require('configorama')
const Configorama = require('../../configorama/lib')

process.env.MY_SECRET = 'SECRET HERE'
process.env.TWILIO_TOKEN = 'xyz123'

const args = {
  stage: 'dev',
}

const configFile = path.join(__dirname, 'netlify.toml')
const configorama = new Configorama(configFile, args)

configorama.init(args).then((config) => {
  console.log(`-------------`)
  console.log(util.inspect(config, false, null, true /* enable colors */))
  console.log(`-------------`)
}).catch((error) => {
  console.log('config error', error)
})
