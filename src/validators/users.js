const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreateNewUser = [
  check('id')
    .exists()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      req.body.id = value.toUpperCase()
      return true
    }),
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('email')
    .exists()
    .isEmail(),
  check('password')
    .exists()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    }),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

const validateUpdateOneUser = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('email')
    .exists()
    .isEmail(),
  check('password')
    .exists()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    }),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

const validateGetOneUser = [
  check('id')
    .exists()
    .not()
    .isEmpty()
]
module.exports = { validateCreateNewUser, validateUpdateOneUser, validateGetOneUser }
