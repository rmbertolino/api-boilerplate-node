const { DataTypes } = require('sequelize')
const db = require('../database/connection')

const User = db.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
})

module.exports = User
