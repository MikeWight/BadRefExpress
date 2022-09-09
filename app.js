const express = require('express')
const users = require('./users')
const app = express()


app.get('/', (req, res) => {
  res.json(users);
})

app.get('/users', (req, res) => {
  console.log(req.admin)
  res.send('Users Page')
})

app.listen(3001, () => console.log('Server Started'))