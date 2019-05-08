
// const https = require('https')
var form = document.getElementById('form')



var state = {
  objURL: ""
}

var obj = {
  "firstName": "ahhh",
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
}


var fetcher = function (form) {
  fetch('/', {
    method: 'POST',
    body:  form,// form.value,
    headers: {"Content-Type": "application/json"},
  }).then(res => {
        return res.blob()
  })
  .then(info => {
    // var element = document.createElement()
    // element.setAttribute("href", "data:text/plain;charset=utf-8", encodeURIComponent(res.bl)
  var objectURL = URL.createObjectURL(info)
    // var download = document.querySelector("a");
    // delete state.objURL;
  state.objURL = objectURL
   bodyRender()
  }).catch(anythingElse => {
    console.log("what is"  , anythingElse)
  })
}


//take in text input for JSON and do not disrupt the auto refresh while still getting the post request out 
var formListner = () => {
  

form.onsubmit = function(e){
  // e.preventDefault()
    var x = document.forms["myForm"]["json-input"].value

      console.log("FORM VALUE: ", x)
      // setinterval(2000)
      fetcher(x)
    }
}

var bodyRender = function () { 
  var body = document.querySelector("body")
  if(state.objURL.length){
  var link =  document.getElementById("link")
  link.innerHTML = `<a href="${state.objURL}" class="download">download your results here!</a>`
  }
}

var initializer = function (){
  bodyRender()
  formListner()
} 



initializer()
