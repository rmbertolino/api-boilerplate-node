const express = require('express')
const config = require('./config/env')

const Middlewares = require('./middlewares/appMiddleware')
const AuthMiddleware = require('./middlewares/authMiddleware')
const db = require('./database/connection')

const v1UserRouter = require('./v1/routes/userRoutes')
const v1AuthRouter = require('./v1/routes/authRoutes')

// app
const app = express()
const PORT = config.API_PORT

// middlewares
const auth = new AuthMiddleware(config.API_JWT_SECRET)
const appMiddlewares = new Middlewares()
app.use(appMiddlewares.getMiddlewares())

// routes
app.use('/api/v1/users', auth.middleware(), v1UserRouter)
app.use('/api/v1/auth', v1AuthRouter)

// server
const main = async () => {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
    app.listen(PORT, () => {
      console.log(`🚀 API is listening on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error.message)
  }
}

main()
