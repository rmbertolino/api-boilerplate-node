const { Sequelize } = require('sequelize')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)

const db = new Sequelize(
  process.env.GIVR_API_DB_NAME,
  process.env.GIVR_API_DB_USER,
  process.env.GIVR_API_DB_PASSWORD,
  {
    host: process.env.GIVR_API_DB_HOST,
    dialect: process.env.GIVR_API_DB_DIALECT,
    timezone: process.env.GIVR_API_TZ,
    define: {
      freezeTableName: true,
      tableName: function (tableName) {
        return process.env.GIVR_API_DB_NAME + '.' + tableName
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
