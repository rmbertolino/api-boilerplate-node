const jwt = require('jsonwebtoken')

class AuthMiddleware {
  constructor (secret) {
    this.secret = secret
  }

  middleware () {
    return (req, res, next) => {
      try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, this.secret)
        req.userData = decoded // { username: 'rodolfo', iat: 1682208415, exp: 1682212015 }
        next()
      } catch (error) {
        return res.status(401).json({
          message: 'Access denied, token expired or incorrect'
        })
      }
    }
  }
}

module.exports = AuthMiddleware
