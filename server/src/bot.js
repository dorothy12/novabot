var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'theStellarBot'});

const TwitchBot = require('twitch-bot')
const bot = new TwitchBot({
  username: 'theStellarBot',
  oauth: process.env.TWITCH_BOT_OAUTH
})

bot.on('join', channel => {
  log.info('Bot joined: %s', JSON.stringify(channel))

  bot.on('message', chatter => {
    log.info({ message: chatter })
    bot.say(chatter.message, chatter.channel)
  })
})

module.exports = bot