module.exports = {
  vhosts: {
    '/': {
      exchanges: [
        'user.update.exchange'
      ],
      queues: [
        'user.update.queue'
      ],
      bindings: [
        'user.update.exchange[kuali] -> user.update.queue'
      ],
      publications: {
        'user.update.exchange': {
          exchange: 'user.update.exchange'
        }
      },
      subscriptions: {
        'user.update.queue': {
          queue: 'user.update.queue'
        }
      }
    }
  }
}
