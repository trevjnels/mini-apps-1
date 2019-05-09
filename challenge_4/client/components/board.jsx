
const React = require('react')
const ReactDOM = require('react-dom')
const Square = require('./square.jsx')
const Column = require('./rColumn.jsx')

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
    currentPlayer: "black",
    }


  }
  // for(let i = 0; i<=6; i++){
  //       //render 6 rows?
  // }

  render(){
      return (<div className="flex flex-col board">
      <Column id="Column1" currentPlayer={this.state.currentPlayer} column={this.state.matrix[0]}/>
      <Column id="Column2" currentPlayer={this.state.currentPlayer} column={this.state.matrix[1]}/>
      <Column id="Column3" currentPlayer={this.state.currentPlayer} column={this.state.matrix[2]}/>
      <Column id="Column4" currentPlayer={this.state.currentPlayer} column={this.state.matrix[3]}/>
      <Column id="Column5" currentPlayer={this.state.currentPlayer} column={this.state.matrix[4]}/>
      <Column id="Column6" currentPlayer={this.state.currentPlayer} column={this.state.matrix[5]}/>
      </div>)
  }
}

module.exports = Board

// 7 wide 6 deep 

{/* <div class="board flex flex-col">
        <div class="flex-row flex row">
            <div class="square"></div><div class="square"></div><div class="square"></div><div class= square"></div><div class="square"></div><div class="square"></div><div class="square"></div> <div class="square"></div></div> */}