const jwt = require('jsonwebtoken')
const userService = require('./userService')
const bcrypt = require('bcrypt')

class AuthService {
  async authenticate (username, password) {
    try {
      const userFound = await userService.getOneUser(username)

      if (userFound === null) {
        throw new Error('User not found')
      }

      const isCorrectPassword = await bcrypt.compare(
        password,
        userFound.password
      )

      if (!isCorrectPassword) {
        throw new Error('Incorrect password')
      }

      const payload = { username }
      const secret = process.env.GIVR_API_JWT_SECRET
      const options = { expiresIn: '10h' }

      const token = jwt.sign(payload, secret, options)
      const expDate = new Date((jwt.decode(token).exp) * 1000).toUTCString()

      return { token, expDate }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = new AuthService()
