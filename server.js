const dados = require('./teste.json')
var cors = require('cors')



const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())



app.get('/', function (req, res, next) {
   return res.json(dados)
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  