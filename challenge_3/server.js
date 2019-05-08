

const express = require('express')
const bodyParser = require('body-parser')
const  sequelize = require('sequelize')
const path = require('path')

const port = 8080
const app = express();
app.use(express.static("public"))


app.get('/', function(req, res) {
 res.sendFile(path.join( __dirname + '/public/index.html')) 
})

app.listen(port, ()=> {
  console.log("server casually rollerskating at port: ", port)
});//