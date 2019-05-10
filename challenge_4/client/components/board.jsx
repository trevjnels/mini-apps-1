
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
    var row = e.target.className.slice(6,7) -1
    if(this.state.matrix[row].indexOf("") !==-1) {
    var square = e.target.className.slice(8,10).trim()
    var sliced = this.state.matrix.slice();
    var player = this.state.currentPlayer
    // console.log(sliced[row])
    var emptySpace = (sliced[row].lastIndexOf(""))
    sliced[row].splice(emptySpace, 1, this.state.currentPlayer)
    var nextPlayer = this.state.currentPlayer === "red" ? "black": "red"
    this.setState({
     matrix: sliced,
     currentPlayer: nextPlayer
    })
    var winner = this.rowChecker(this.state.matrix[row])
      if(winner) {
        console.log("winner: ", winner)
      }
      // var colWinner = this.colChecker(this.state.matrix)
      // if(colWinner) {
      //   console.log("winner: ", colWinner)
      // }
      // var majorwinner = this.majorDiagChecker(this.state.matrix)
      // if(majorwinner) {
      //   console.log("winner: ", majorwinner)
      // }
    
      // var minorwinner = this.minorDiagChecker(this.state.matrix)
      // if(minorwinner) {
      //   console.log("winner: ", minorwinner)
      // }
    
    


    // console.log(this.state.matrix)
  }  else {
    alert("try another row, wiseguy")
  }
 
 
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
  rowChecker(row) {
    for(let i = 0; i< row.length; i++) {
      var space0 = row[i];
      var space2 = row[i+1]
      var space3 = row[i+2]
      var space4 = row[i+3]
      


   
      if(space0 === space2 && space2 === space3 && space3 ===space4){
        if(space0 === "black" || space0 === "red"){
         return space0;
        }
      }
    }
    return false;
  }
  render(){
      return (<div className="flex flex-col board">
      <Column className="column flex flex-row" num="0" id="Column1" click={this.handleClick} spaceCounter={this.state.spaceId} currentPlayer={this.state.currentPlayer} key="0" column={this.state.matrix[0]}/> {/*right1 */}

      <Column className="column flex flex-row"num="0" id="Column2" click={this.handleClick} spaceCounter={this.state.spaceId}  currentPlayer={this.state.currentPlayer} key="1" column={this.state.matrix[1]}/> {/*right2 */}

      <Column className="column flex flex-row"num="0" id="Column3"  click={this.handleClick} spaceCounter={this.state.spaceId} currentPlayer={this.state.currentPlayer} key="2" column={this.state.matrix[2]}/> {/*right3 */}

      <Column className="column flex flex-row"num="0" id="Column4" click={this.handleClick} spaceCounter={this.state.spaceId}  currentPlayer={this.state.currentPlayer} key="3" column={this.state.matrix[3]}/> {/*center */}

      <Column className="column flex flex-row"num="0" id="Column5"  click={this.handleClick} spaceCounter={this.state.spaceId} currentPlayer={this.state.currentPlayer} key="4" column={this.state.matrix[4]}/>{/* left3 */}

      <Column className="column flex flex-row"num="0" id="Column6"  click={this.handleClick} spaceCounter={this.state.spaceId} currentPlayer={this.state.currentPlayer} key="5" column={this.state.matrix[5]}/>{/* left2 */}

      <Column className="column flex flex-row"num="0" id="Column7"  click={this.handleClick} spaceCounter={this.state.spaceId}  currentPlayer={this.state.currentPlayer} key="6" column={this.state.matrix[6]}/>{/* left1 */}

      </div>)
  }
}

module.exports = Board

// 7 wide 6 deep 

{/* <div class="board flex flex-col">
        <div class="flex-row flex row">
            <div class="square"></div><div class="square"></div><div class="square"></div><div class= square"></div><div class="square"></div><div class="square"></div><div class="square"></div> <div class="square"></div></div> */}