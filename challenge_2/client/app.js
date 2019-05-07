
// const https = require('https')


//take in text input for JSON and do not disrupt the auto refresh while still getting the post request out there

var newData = JSON.stringify({
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
})

var options = {
  post: {
    hostname: '',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}
var formListner = () => {

  console.log("Yo" , newData)
    var form = Array.from(document.getElementsByClassName('jToC'))
    var elem =  form[0]

    elem.onclick = function(){
      // var jsonD = JSON.stringify(sampleJSON)
      fetch('/', {
      
          method: 'POST',
          body: newData,
          headers: {"Content-Type": "application/json"},
        }).then(res => {
          console.log(res)
        }).catch(anythingElse => {
          console.log("what is"  , anythingElse)
        })
    }
}
formListner()
// form[0].onclick(function(){
// fetch('/', {
//   headers: {"Content-Type": "application/json; charset=utf8"},
//   method: 'POST',
//   body: JSON.stringify(sampleJSON)
// }).then(res => {
//   console.log(res)
// }).catch(anythingElse => {
//   console.log("what is"  , anythingElse)
// })
// })







//will receive CSV formatted result 




//page relodes upon receipt with csv file and input feild, ready to go. No refresh tho.





//eventually add a link to download the csv file
//can use jquery to manipulate dom now and ajax etc
