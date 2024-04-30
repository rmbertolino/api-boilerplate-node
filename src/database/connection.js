const { Sequelize } = require('sequelize')
const config = require('../config/env')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)

const db = new Sequelize(
  config.API_DB_MYSQL.DATABASE,
  config.API_DB_MYSQL.USER,
  config.API_DB_MYSQL.PASSWORD,
  {
    host: config.API_DB_MYSQL.HOST,
    dialect: config.API_DB_MYSQL.DIALECT,
    timezone: config.API_TZ,
    define: {
      freezeTableName: true,
      tableName: function (tableName) {
        return config.API_DB_MYSQL.DATABASE + '.' + tableName
      },
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      getterMethods: {
        createdAt () {
          return dayjs(this.getDataValue('createdAt')).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD HH:mm:ss')
        },
        updatedAt () {
          return dayjs(this.getDataValue('updatedAt')).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD HH:mm:ss')
        }
      }
    }
  })

module.exports = db
