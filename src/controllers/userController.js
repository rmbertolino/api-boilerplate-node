const userService = require('../services/userService')

class UserController {
  async getAllUsers (req, res) {
    const { mode } = req.query
    try {
      const allUsers = await userService.getAllUsers({ mode })
      res.send({ status: 'OK', data: allUsers })
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
  }

  async getOneUser (req, res) {
    const { params: { userId } } = req

    if (!userId) {
      res.status(400).send({
        status: 'FAILED',
        data: { error: "Parameter ':userId' can not be empty" }
      })
      return
    }

    try {
      const user = await userService.getOneUser(userId)

      res.send({ status: 'OK', data: user })
    } catch (error) {
      if (error.message === 'Error getting user: User not found') {
        res.status(404).send({ status: 'FAILED', data: { error: error.message } })
      } else {
        res.status(error?.status || 500).send({ status: 'FAILED', data: { error: error?.message || error } })
      }
    }
  }

  async createNewUser (req, res) {
    let { id } = req.body
    const { name, email, password } = req.body

    id = id.toUpperCase() // TODO: pasarlo a validators.users

    const newUser = {
      id,
      name,
      email,
      password
    }

    try {
      const createdUser = await userService.createNewUser(newUser)
      res.status(201).send({ status: 'OK', data: createdUser })
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
  }

  async updateOneUser (req, res) {
    const {
      body,
      params: { userId }
    } = req

    if (!userId) {
      res.status(400).send({
        status: 'FAILED',
        data: { error: "Parameter ':userId' can not be empty" }
      })
    }

    try {
      const updatedUser = await userService.updateOneUser(userId, body)
      res.send({ status: 'OK', data: updatedUser })
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
  }

  async deleteOneUser (req, res) {
    const {
      params: { userId }
    } = req

    if (!userId) {
      res.status(400).send({
        status: 'FAILED',
        data: { error: "Parameter ':userId' can not be empty" }
      })
    }

    try {
      await userService.deleteOneUser(userId)
      res.status(204).send({ status: 'OK' })
    } catch (error) {
      if (error.message === 'Failed to delete user: User not found') {
        res.status(404).send({ status: 'FAILED', data: { error: error.message } })
      } else {
        res.status(error?.status || 500).send({ status: 'FAILED', data: { error: error?.message || error } })
      }
    }
  }
}

module.exports = new UserController()
