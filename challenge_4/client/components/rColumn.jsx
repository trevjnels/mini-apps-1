const React = require('react')
const ReactDOM = require('react-dom')
const Square = require('./square.jsx')
var num = -1

const Column = (props)=>(


<div name="column" onClick={props.click} className={props.id+ " flex-row flex row"}>
  {props.column.map((space, index) => {
    {/* console.log("space is " ,space) */}
    var color = space
    {/* console.log(color) */}
    num += 1
    return <Square parent={props.id} num={num} key={props.id + " " + num} stuff={props} color={color}/>
  })
  }

</div>
)


module.exports = Column

// 7 wide 6 deep 

        // <div class="flex-row flex row">
        //     <div class="square"></div><div class="square"></div><div class="square"></div><div class= square"></div><div class="square"></div><div class="square"></div><div class="square"></div> <div class="square"></div></div>