const User = require('../models/User')
const bcrypt = require('bcrypt')

class UserService {
  async getAllUsers () {
    try {
      const users = await User.findAll()
      return users
    } catch (error) {
      throw new Error('Error getting users')
    }
  }

  async getOneUser (userId) {
    try {
      const user = await User.findByPk(userId)

      if (user === null) {
        throw new Error('User not found')
      }

      return user
    } catch (error) {
      throw new Error('Error getting user: ' + error.message)
    }
  }

  async createNewUser (userData) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(userData.password, salt)

      userData.password = hash

      const user = await User.create(userData)
      return user
    } catch (error) {
      throw new Error('Error creating user')
    }
  }

  async updateOneUser (id, changes) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(changes.password, salt)

      changes.password = hash

      const updatedUser = await User.findByPk(id)
      if (updatedUser === null) {
        throw new Error('User not found')
      }
      await updatedUser.update(changes)
      return updatedUser
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message)
    }
  }

  async deleteOneUser (userId) {
    try {
      const user = await User.findByPk(userId)
      if (user === null) {
        throw new Error('User not found')
      }

      await user.destroy()
    } catch (error) {
      throw new Error('Failed to delete user: ' + error.message)
    }
  }
}

module.exports = new UserService()
