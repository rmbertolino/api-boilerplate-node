const express = require('express')
const router = express.Router()

const UserController = require('../../controllers/userController')
const { validateCreateNewUser, validateUpdateOneUser, validateGetOneUser } = require('../../validators/users')

router.get('/', UserController.getAllUsers)

router.get('/:userId', validateGetOneUser, UserController.getOneUser)

router.post('/', validateCreateNewUser, UserController.createNewUser)

router.patch('/:userId', validateUpdateOneUser, UserController.updateOneUser)

router.delete('/:userId', UserController.deleteOneUser)

module.exports = router
