const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vic:G7h6k296kZfwrnQf@cms-cluster0.y1gul.mongodb.net/rush9', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', error => console.error('connection error:', error))
db.once('open', function () {
  console.log('Connected to MongoDB')

  //   const silence = new Kitten({ name: 'Silence' })
  //   silence.save((err, data) => {
  //     if (err) return console.error(err)
  //     console.log('silence on save', data)
  //   })
})
