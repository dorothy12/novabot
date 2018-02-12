const StellarSDK = require('stellar-sdk')
const Cursor = require('../models/cursor')
const log = require('../log')

let instance = null

class StellarListener {
  constructor() {
    if(instance) return instance
    this.server = new StellarSDK.Server(process.env.STELLAR_SERVER)
    instance = this
    this._start()
  }

  // Listen to Stellar transactions
  // Message format:
  //
  // stellarMessage: {
  //   "_links": {
  //     "self": {
  //       "href": "https://horizon-testnet.stellar.org/operations/31326525089386497"
  //     },
  //     "transaction": {
  //       "href": "https://horizon-testnet.stellar.org/transactions/c3f69fbbde8537d5bcd7ce2ab59b1b337cc454559567e660f79e815d2d31522d"
  //     },
  //     "effects": {
  //       "href": "https://horizon-testnet.stellar.org/operations/31326525089386497/effects"
  //     },
  //     "succeeds": {
  //       "href": "https://horizon-testnet.stellar.org/effects?order=desc&cursor=31326525089386497"
  //     },
  //     "precedes": {
  //       "href": "https://horizon-testnet.stellar.org/effects?order=asc&cursor=31326525089386497"
  //     }
  //   },
  //   "id": "31326525089386497",
  //   "paging_token": "31326525089386497",
  //   "source_account": "GD2SSLHYWSNBGIMRQVPVDNUGHSWEMZJXTPXVABESJIV2Y2ZJOR5AM6KQ",
  //   "type": "payment",
  //   "type_i": 1,
  //   "created_at": "2018-02-12T01:22:46Z",
  //   "transaction_hash": "c3f69fbbde8537d5bcd7ce2ab59b1b337cc454559567e660f79e815d2d31522d",
  //   "asset_type": "native",
  //   "from": "GD2SSLHYWSNBGIMRQVPVDNUGHSWEMZJXTPXVABESJIV2Y2ZJOR5AM6KQ",
  //   "to": "GBTFU5DBANNJII73SF2S5ZOCLYJK73Y3774CYAE36W4SVMRJ6NR5ZEUT",
  //   "amount": "1.0000000"
  // }
  _start() {
    Cursor.getPagingToken()
      .then(this._paymentsSinceCursor)
      .catch(err => {
        log.error(err)
      })
  }

  _paymentsSinceCursor(cursor) {
    if(!cursor || !cursor.token) {
      throw new Error("Unable to initialize Stellar payments listener with cursor")
    }
    log.info(`Watching Stellar account: ${process.env.STELLAR_ACC_PUBLIC_KEY} at cursor: ${cursor.token}`)
    instance.server.payments()
      .forAccount(process.env.STELLAR_ACC_PUBLIC_KEY)
      .cursor(cursor.token)
      .stream({ onmessage: instance._processPayment })
  }

  _processPayment(message) {
    log.info({ stellarMessage: message })
  }
}

module.exports = new StellarListener()