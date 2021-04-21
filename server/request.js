const fetch = require('node-fetch')
const API = 'https://pokeapi.co/api/v2/pokemon'

const getPokemon = name => {
  return fetch(`${API}/${name}`)
    .then(req => req.json())
    .then(data => {
      const { name, height, weight } = data
      return { name, height, weight }
    })
}

module.exports = { getPokemon }
