const Rascal = require('rascal')
const config = require('./config')

async function run() {
  try {
    const broker = await Rascal.BrokerAsPromised.create(Rascal.withDefaultConfig(config))
    const subscription = await broker.subscribe('user.update.queue')
    subscription.on('message', (message, content, ackOrNack) => {
      console.log({ content, routingKey: message.fields.routingKey })
      ackOrNack()
    })
  } catch (error) {
    console.log(error)
  }
}

run()