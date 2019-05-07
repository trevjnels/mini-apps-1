const express = require('express')
const app = express();
const bodyParser  = require('body-parser')
const fs = require('fs')

const port = 3000
const path = require('path')
var num = 0;


app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => res.status(200).sendFile("/client/index.html"))

app.post('/', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("request is - - - - -- - -- - -- - - - ", req.body)
      var jsonObj = req.body
      var CSVstringPath = jsonToCSV(jsonObj)

      fs.readFile(path.join(__dirname + CSVstringPath), {encoding: 'utf8'}, (err, data)=>{
        if(err){
          console.log("THERE WAS AN ERROR serverSide", err)
        } else {
          console.log(data, " * * * *  ** * * *  ** * * *  ** * * *  ** * * *  *data")
        }
        res.status(200).send(`${data}`)

      })
      
      // console.log("post request received")
    }
)
app.listen(port, () => {
  console.log('server is lightly joggin on port: ', port)
})



//receive post requests and return data like the csv below

//post may be in URL weirdly?

var sample= {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};


var jsonToCSV = function(data) {
  num++
  var keys = Object.keys(data);
  keys.pop()
  var joinedK = keys.join(",")
  fs.writeFileSync(`./file${num}`, joinedK)

  var recurser = function(obj) {
    var values = keys.map(key => {
      return obj[key];
    })
   //removes children before string parsing
    var joinedV = "\n" + values.join(",")
    // console.log("keys are ", joinedV)
    fs.appendFileSync(`./file${num}`, joinedV)
    if(obj.children.length){
      obj.children.map(child => {
        recurser(child)
      })
    }
  }
  recurser(data)
 return `/file${num}`;
}


var sampleCSV = 
`firstName,lastName,county,city,role,sales
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
Allen,Price,San Mateo,Burlingame,Sales Person,2500000
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000`;


module.exports = app;

