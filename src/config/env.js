const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  API_PORT: process.env.API_PORT || 4000,
  API_JWT_SECRET: process.env.API_JWT_SECRET,
  API_LOG_DIRECTORY: process.env.API_LOG_DIRECTORY,
  API_TZ: process.env.API_TZ,
  API_DB_MYSQL: {
    HOST: process.env.API_DB_MYSQL_HOST,
    PORT: process.env.API_DB_MYSQL_PORT,
    USER: process.env.API_DB_MYSQL_USER,
    PASSWORD: process.env.API_DB_MYSQL_PASSWORD,
    DATABASE: process.env.API_DB_MYSQL_DATABASE,
    DIALECT: process.env.API_DB_MYSQL_DIALECT
  },
  API_DB_MSSQL: {
    HOST: process.env.API_DB_SQLSERVER_HOST,
    PORT: process.env.API_DB_SQLSERVER_PORT,
    USER: process.env.API_DB_SQLSERVER_USER,
    PASSWORD: process.env.API_DB_SQLSERVER_PASSWORD,
    DATABASE: process.env.API_DB_SQLSERVER_DATABASE,
    DIALECT: process.env.API_DB_SQLSERVER_DIALECT
  },
  API_DB_POSTGRESQL: {
    HOST: process.env.API_DB_POSTGRES_HOST,
    PORT: process.env.API_DB_POSTGRES_PORT,
    USER: process.env.API_DB_POSTGRES_USER,
    PASSWORD: process.env.API_DB_POSTGRES_PASSWORD,
    DATABASE: process.env.API_DB_POSTGRES_DATABASE,
    DIALECT: process.env.API_DB_POSTGRES_DIALECT
  },
  API_DB_MARIADB: {
    HOST: process.env.API_DB_MARIADB_HOST,
    PORT: process.env.API_DB_MARIADB_PORT,
    USER: process.env.API_DB_MARIADB_USER,
    PASSWORD: process.env.API_DB_MARIADB_PASSWORD,
    DATABASE: process.env.API_DB_MARIADB_DATABASE,
    DIALECT: process.env.API_DB_MARIADB_DIALECT
  },
  API_DB_REDIS: {
    HOST: process.env.API_DB_REDIS_HOST,
    PORT: process.env.API_DB_REDIS_PORT,
    PASSWORD: process.env.API_DB_REDIS_PASSWORD
  },
  API_DB_INFLUXDB: {
    HOST: process.env.API_DB_INFLUXDB_HOST,
    PORT: process.env.API_DB_INFLUXDB_PORT,
    USER: process.env.API_DB_INFLUXDB_USER,
    PASSWORD: process.env.API_DB_INFLUXDB_PASSWORD,
    DATABASE: process.env.API_DB_INFLUXDB_DATABASE
  }
};
