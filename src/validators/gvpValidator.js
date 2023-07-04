const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreateNewLog = [
  check('timestamp')
    .notEmpty().withMessage('The timestamp field is required')
    .isLength({ max: 255 }).withMessage('Timestamps must have a maximum of 255 characters'),
  check('callid')
    .notEmpty().withMessage('The callid field is required')
    .isLength({ max: 255 }).withMessage('callid must have a maximum of 255 characters'),
  check('fecha')
    .notEmpty().withMessage('The fecha field is required')
    .isLength({ max: 255 }).withMessage('fecha must have a maximum of 255 characters'),
  check('hora')
    .notEmpty().withMessage('The hora field is required')
    .isLength({ max: 255 }).withMessage('hora must have a maximum of 255 characters'),
  check('horaFin')
    .notEmpty().withMessage('The horaFin field is required')
    .isLength({ max: 255 }).withMessage('horaFin must have a maximum of 255 characters'),
  check('origen')
    .notEmpty().withMessage('The origen field is required')
    .isLength({ max: 255 }).withMessage('origen must have a maximum of 255 characters'),
  check('aniRed')
    .notEmpty().withMessage('The aniRed field is required')
    .isLength({ max: 255 }).withMessage('aniRed must have a maximum of 255 characters'),
  check('mercado')
    .notEmpty().withMessage('The mercado field is required')
    .isLength({ max: 255 }).withMessage('mercado must have a maximum of 255 characters'),
  check('waypoint')
    .notEmpty().withMessage('The waypoint field is required')
    .isLength({ max: 255 }).withMessage('waypoint must have a maximum of 255 characters'),
  check('dni')
    .notEmpty().withMessage('The dni field is required')
    .isLength({ max: 255 }).withMessage('dni must have a maximum of 255 characters'),
  check('msp')
    .notEmpty().withMessage('The msp field is required')
    .isLength({ max: 255 }).withMessage('msp must have a maximum of 255 characters'),
  check('segmento')
    .notEmpty().withMessage('The segmento field is required')
    .isLength({ max: 255 }).withMessage('segmento must have a maximum of 255 characters'),
  check('score')
    .notEmpty().withMessage('The score field is required')
    .isLength({ max: 255 }).withMessage('score must have a maximum of 255 characters'),
  check('routingPoint')
    .notEmpty().withMessage('The routingPoint field is required')
    .isLength({ max: 255 }).withMessage('routingPoint must have a maximum of 255 characters'),
  check('dnsOrigen')
    .notEmpty().withMessage('The dnsOrigen field is required')
    .isLength({ max: 255 }).withMessage('dnsOrigen must have a maximum of 255 characters'),
  check('tpoCorte')
    .notEmpty().withMessage('The tpoCorte field is required')
    .isLength({ max: 255 }).withMessage('tpoCorte must have a maximum of 255 characters'),
  check('sessionID')
    .notEmpty().withMessage('The sessionID field is required')
    .isLength({ max: 255 }).withMessage('sessionID must have a maximum of 255 characters'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

const validateGetOneLog = [
  check('id')
    .exists()
    .not()
    .isEmpty()
]

module.exports = { validateCreateNewLog, validateGetOneLog }
