
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile("index.html")
})

app.listen(port, ()=> {
  console.log("- - - - - - -  - - -  - - -  - - server is speedwalking at Port: ", port)
})