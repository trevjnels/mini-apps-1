
const React = require('react')
const ReactDOM = require('react-dom')
const Square = require('./square.jsx')
const Column = require('./rColumn.jsx')

class Board extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      matrix: [
        ["","","","","","",], //r1
        ["","","","","","",], //r2
        ["","","","","","",], //r3
        ["","","","","","",], //c
        ["","","","","","",], //l3
        ["","","","","","",], //l2
        ["","","","","","",], //l1
    ],
    turn: 0,
    currentPlayer: "black",
    spaceId: 0
    }
    this.handleClick = this.handleClick.bind(this)
//refactor the board to just usa  loop from & also move state to app. 

  }
  handleClick(e) { 
    console.log(e)
    // console.log("olumn clicked" e)
    // figure out which column was clicked
    // take in which palyer is up and credit them  in the matrix 
 
    // functions (row/column/major/minor )----- really just call one function that runs all of them -----
    //if column fails anywhere have it make mention somehow so that we can turn off click listners there
    //trigger rerender in case we need it 
    //if winenr, declair winner
    //if tie declair tie

    //literally swtich player in here and take it in at the top of handle click
    //else switch player (keep this on state but do not delver to componenets. They dont need to know. )
   //

  }
  // for(let i = 0; i<=6; i++){
  //       //render 6 rows?
  // }

  render(){
      return (<div className="flex flex-col board">
      <Column className="column flex flex-row" num="0" id="Column1" click={this.handleClick}spaceCounter={this.state.counter} currentPlayer={this.state.currentPlayer} key="0" column={this.state.matrix[0]}/> {/*right1 */}

      <Column className="column flex flex-row"num="0" id="Column2" currentPlayer={this.state.currentPlayer} key="1" column={this.state.matrix[1]}/> {/*right2 */}

      <Column className="column flex flex-row"num="0" id="Column3" currentPlayer={this.state.currentPlayer} key="2" column={this.state.matrix[2]}/> {/*right3 */}

      <Column className="column flex flex-row"num="0" id="Column4" currentPlayer={this.state.currentPlayer} key="3" column={this.state.matrix[3]}/> {/*center */}

      <Column className="column flex flex-row"num="0" id="Column5" currentPlayer={this.state.currentPlayer} key="4" column={this.state.matrix[4]}/>{/* left3 */}

      <Column className="column flex flex-row"num="0" id="Column6" currentPlayer={this.state.currentPlayer} key="5" column={this.state.matrix[5]}/>{/* left2 */}

      <Column className="column flex flex-row"num="0" id="Column7"  currentPlayer={this.state.currentPlayer} key="6" column={this.state.matrix[6]}/>{/* left1 */}

      </div>)
  }
}

module.exports = Board

// 7 wide 6 deep 

{/* <div class="board flex flex-col">
        <div class="flex-row flex row">
            <div class="square"></div><div class="square"></div><div class="square"></div><div class= square"></div><div class="square"></div><div class="square"></div><div class="square"></div> <div class="square"></div></div> */}