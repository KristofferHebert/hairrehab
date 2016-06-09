var express = require('express')

const PORT = 3000
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.listen(PORT, () => {
  console.log('listing on', PORT)
})
