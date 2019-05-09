
const React = require('react')
const ReactDOM = require('react-dom')
const square = require('./square.jsx')


class Board extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      matrix: [
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
    ],
    turn: 0,
    currentPlayer: "black"
    }
  }


  render(){
      return (<h3>Aloha world</h3>)
  }
}

module.exports = Board

// 7 wide 6 deep 