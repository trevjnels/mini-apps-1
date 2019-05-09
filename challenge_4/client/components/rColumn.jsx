const React = require('react')
const ReactDOM = require('react-dom')
const Square = require('./square.jsx')


const Column = (props)=>(


<div className="flex-row flex row">
  {props.column.map(space => {
    return <Square  key={props.num++} stuff={props}/>
  })
  }

</div>
)


module.exports = Column

// 7 wide 6 deep 

        // <div class="flex-row flex row">
        //     <div class="square"></div><div class="square"></div><div class="square"></div><div class= square"></div><div class="square"></div><div class="square"></div><div class="square"></div> <div class="square"></div></div>