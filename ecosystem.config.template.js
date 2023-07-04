module.exports = {
  apps: [{
    name: 'gestionivr-api',
    script: './src/index.js',
    env_production: {
      NODE_ENV: 'production',
      GIVR_API_PORT: '4000',
      GIVR_API_DB_HOST: '127.0.0.1',
      GIVR_API_DB_NAME: '',
      GIVR_API_DB_USER: '',
      GIVR_API_DB_PASSWORD: '',
      GIVR_API_DB_DIALECT: 'mariadb',
      GIVR_API_JWT_SECRET: '',
      GIVR_API_LOG_DIRECTORY: './',
      GIVR_API_TZ: 'America/Argentina/Buenos_Aires'
    },
    env_uat: {
      NODE_ENV: 'uat',
      GIVR_API_PORT: '4000',
      GIVR_API_DB_HOST: '127.0.0.1',
      GIVR_API_DB_NAME: '',
      GIVR_API_DB_USER: '',
      GIVR_API_DB_PASSWORD: '',
      GIVR_API_DB_DIALECT: 'mariadb',
      GIVR_API_JWT_SECRET: '',
      GIVR_API_LOG_DIRECTORY: './',
      GIVR_API_TZ: 'America/Argentina/Buenos_Aires'
    },
    env_local: {
      NODE_ENV: 'local',
      GIVR_API_PORT: '4000',
      GIVR_API_DB_HOST: '127.0.0.1',
      GIVR_API_DB_NAME: '',
      GIVR_API_DB_USER: '',
      GIVR_API_DB_PASSWORD: '',
      GIVR_API_DB_DIALECT: 'mariadb',
      GIVR_API_JWT_SECRET: '',
      GIVR_API_LOG_DIRECTORY: './',
      GIVR_API_TZ: 'America/Argentina/Buenos_Aires'
    }
  }]
}
