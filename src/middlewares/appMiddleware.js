const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Log = require('../helpers/logger')

class Middlewares {
  constructor () {
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json())

    const log = new Log()

    morgan.token('body', (req, res) => JSON.stringify(req.body))
    this.app.use(morgan(':date[iso] :method :url :status :user-agent (:response-time ms) - :remote-addr - in: :body - (:req[content-length] bytes)', { stream: log.stream }))
  }

  getMiddlewares () {
    return this.app
  }
}

module.exports = Middlewares
