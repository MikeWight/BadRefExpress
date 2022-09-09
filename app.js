const express = require('express')
const cors = require('cors')
const user = require('./users')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json(user);
})

app.get('/users', (req, res) => {
  console.log(req.admin)
  res.send('Users Page')
})

app.listen(3001, () => console.log('Server Started'))