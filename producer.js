const Rascal = require('rascal')
const config = require('./config')

async function run() {
  try {
    const broker = await Rascal.BrokerAsPromised.create(Rascal.withDefaultConfig(config))
    setInterval(async () => {
      await broker.publish('user.update.exchange', `im alive ${Date.now()}`, 'kuali')
    }, 1000)
  } catch (error) {
    console.log(error)
  }
}

run()
