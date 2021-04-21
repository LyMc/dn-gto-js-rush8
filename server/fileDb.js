const fs = require('fs').promises

const getAll = () => {
  return fs
    .readFile('db.json', 'utf8')
    .then(content => {
      const obj = JSON.parse(content)
      return obj
    })
    .catch(error => {
      console.error('File read error', error)
      throw error
    })
}

const setAll = data => {
  return fs
    .writeFile('db.json', JSON.stringify(data))
    .then(() => console.log('File was written successfully'))
    .catch(error => console.error('File write error', error))
}

module.exports = { getAll, setAll }
