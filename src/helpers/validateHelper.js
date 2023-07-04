const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        // error: error.array()
        errors: error.array().map(error => ({ field: error.path, value: error.value, msg: error.msg }))
      }
    })
  }
}

module.exports = { validateResult }
