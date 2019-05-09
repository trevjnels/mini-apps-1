const React = require('react')
const ReactDOM = require('react-dom')
const square = require('./square.jsx')


class Board extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
      return (<h3>Aloha world</h3>)
  }
}

module.exports = Board

// 7 wide 6 deep 

        // <div class="flex-row flex row">
        //     <div class="square"></div><div class="square"></div><div class="square"></div><div class= square"></div><div class="square"></div><div class="square"></div><div class="square"></div> <div class="square"></div></div>