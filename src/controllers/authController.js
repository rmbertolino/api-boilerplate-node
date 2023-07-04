const authService = require('../services/authService')

class AuthController {
  async auth (req, res) {
    const { username, password } = req.body

    try {
      const result = await authService.authenticate(username, password)

      res.send({ status: 'OK', token: result.token, expDate: result.expDate })
    } catch (error) {
      res
        .status(error?.status || 401)
        .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
  }
}

module.exports = new AuthController()
