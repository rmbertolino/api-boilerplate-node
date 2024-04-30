const fs = require('fs')
const path = require('path')

const rootPath = process.env.API_LOG_DIRECTORY

class Log {
  constructor () {
    const currentDate = new Date().toISOString().slice(0, 10)
    const logDirectory = path.join(rootPath, 'logs')
    const logFileName = `access-${currentDate}.log`
    const logFilePath = path.join(logDirectory, logFileName)

    if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory)
    }

    this.stream = fs.createWriteStream(logFilePath, { flags: 'a' })
  }

  write (message) {
    this.stream.write(message)
    // example: log.write('El usuario X accedió a la página /ruta')
  }
}

module.exports = Log
