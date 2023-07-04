function convertTimestamp (timestamp) {
/**
 * From 1686342253434
 * to 2023-06-09 17:24:13
 */
  const date = new Date(parseInt(timestamp))
  const adjustedDate = new Date(date.getTime() - (3 * 60 * 60 * 1000)) // Ajuste para UTC-3
  const formattedDate = adjustedDate.toISOString().replace('T', ' ').replace('Z', '').slice(0, -4)

  return formattedDate
}

module.exports = {
  convertTimestamp
}
