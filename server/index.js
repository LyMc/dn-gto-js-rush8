const express = require('express')
const db = require('./fileDb')
const request = require('./request')
require('./db')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

const Kitten = mongoose.model('Kitten', {
  name: String,
})

app.get('/kittens', async (req, res) => {
  try {
    // create a new kitten
    const kitten = new Kitten({ name: req.query.name })
    await kitten.save()

    // get all the kittens
    const kittens = await Kitten.find({}, 'name -_id').exec()
    res.send(kittens)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

app.get('/json', async (req, res) => {
  try {
    const data = await db.getAll()
    const author = { id: data.authors.length, name: req.query.name, age: req.query.age }
    data.authors.push(author)
    await db.setAll(data)
    res.send(data)
  } catch (e) {
    res.sendStatus(500)
  }
})

app.get('/pokemon/:name', async (req, res) => {
  try {
    const pokemon = await request.getPokemon(req.params.name)
    res.send(pokemon)
  } catch (e) {
    res.sendStatus(500)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
