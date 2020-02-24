const express = require('express')
const app = express()
const port = 3000
var clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => {
  res.sendFile(clientDir +'index.html')
})
app.get('/hej.css', (req, res) => {
  res.sendFile(clientDir +'hej.css')
})
app.get('/this', (req, res) => {
  res.sendFile(clientDir +'hejjj.jpg')
})
app.post('/form', (req, res) => {
  const name = req.body.name; 
  console.log(name)});

app.listen(port, () => console.log(`Example app listening on port port!`))