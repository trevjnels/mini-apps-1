


var board = {

     board: [
          ["","",""],
          ["","",""],
          ['','',''],
      ],
    count: 0,
  currentPlayer: "player1",
  players: {
    key: {
      player1: "x",
      player2: "o"
    },
    src: {
      "player1": "https://media3.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif",
      "player2": "https://media.giphy.com/media/l3q2NvqacEdhTJ6Mw/giphy.gif"
    },
    score: {
      player1: 0,
      payer2: 0
    },
}
}


var boardRender = function(){
  // delete board.board;
  var board = Array.from(document.getElementsByClassName("board"))
  board[0].innerHTML =`
  <div class="flex row"> 
  <div id="00"class="flex row square square-a"></div>
  <div id="01"class="flex row square square-b"></div>
  <div id="02"class="flex row square square-c"></div>
</div>
<div class="flex row"> 
  <div id="10"class="flex flex-row square square-d"></div>
  <div id="11"class="flex flex-row square square-e"></div>
  <div id="12"class="flex flex-row square square-f"></div>
</div>
<div class="flex row"> 
  <div id="20"class="flex flex-row square square-g"></div>
  <div id="21"class="flex flex-row square square-h"></div>
  <div id="22"class="flex flex-row square square-i"></div>
</div>`

};



// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - 



var buttonsListner = function(){

  var reset = Array.from(document.getElementsByClassName('reset'));
  console.log(reset[0])
    reset.map(elem => {

      elem.onclick = function(e) {

        boardRender();
        headerRender({ lastWinner: board.currentPlayer})
        sliced = board.board.slice()
        board.board.map(row => {
          row.pop()
          row.pop()
          row.pop()
        })
        board.board.map(row => {
          row.push("")
          row.push("")
          row.push("")
        })
        board.count = 0;
        squareListner(board)

      } 
   })
  
  
}

var tieCatch = function(count){
  if(count === 9){
    squareListner(board, true) //turns all board click handlers off
    headerRender({'tie': true})
  }
}

var playerToggle = function(obj){
if(obj.currentPlayer === "player1") {
  obj.currentPlayer = "player2"
} else {
  obj.currentPlayer = "player1"
}
}

var headerRender = function(input) {
  if(Object.keys(input)[0] === 'lastWinner'){
    var header = document.getElementsByClassName("title")
    header[0].innerHTML = `<h1 style="color: red">Player ${board.players.key[input.lastWinner].toUpperCase()} You're up first because youre awesome!</h1>`
  }

  if(input) {
if(Object.keys(input)[0] ===  "win"){
  var header = document.getElementsByClassName("title")
  header[0].innerHTML = `<h1 style="color: red">Player ${input.win.toUpperCase()} WINS</h1>`
}
if(Object.keys(input)[0] === 'tie'){
  var header = document.getElementsByClassName("title")
  header[0].innerHTML = `<h1 style="color: red">Tic Tac Toe is almost always Tied. Reset to play again!</h1>`
}
  }

// changes header from f
//Tic tac toe (title)
//to firstPlayer - you go first
//back to tic tac toe
// to winningPlayer "WINS!!"

}
var scoreRender = function(){
  //optional
}

var squareListner = function(board, off){
  if(off){
    var squareNodes = Array.from(document.getElementsByClassName("square"));
  squareNodes.map(elem => {
    elem.onclick = null;
    return squareNodes;
  })
  } else {
      var squareNodes = Array.from(document.getElementsByClassName("square"));
      squareNodes.map(elem => {

        elem.onclick = function(e) {
          console.log(board.board)
          var resultsBoard = board.board.slice()
          var clicked = elem.id
          
          var {currentPlayer, players} = board;
          var playerLetter = players.key[currentPlayer];

          var split = clicked.split("")
        
          resultsBoard[split[0]][split[1]] = playerLetter;
        
    
          board.board = resultsBoard;
          elem.onclick = null;

          elem.innerHTML = `<img class="selected-${playerLetter}" src = ${players.src[currentPlayer]} / >`
          if(boardChecker(board.board, playerLetter)){
            headerRender({win: playerLetter})
            players.score[currentPlayer] ++ 
            board.currentPlayer = currentPlayer;
            squareListner(board, true)
          } else {
            board.count++
            tieCatch(board.count)
          playerToggle(board);
          }
        }
      })
}
  }









// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - 




var boardChecker = function(board, player){
  if(diagChecker(board, player)){
    // alert(`${player} wins! diag`)
    return true;
  }
  var num =0
  while(num <3) {
   var row = rowChecker(board[num], player)
   var cols = colChecker(board, num, player)
    num++
    if(row || cols){
      // alert(`${player} wins! col/row`)
      return true;
    }
  }
  return false;
}
var rowChecker = function(row, player){
  var totalX = 0
  for(var box of row){
    if(box === player){
      totalX ++
    }
  }
  
  if(totalX === 3){
    return true;
  }
  else {
    return false;
  }
}
var colChecker = function(board, col, player){
  var totalX = 0
  board.forEach(row => {
    var box = row[col]
    if(box === player){
      totalX++
    }
  })
  if(totalX === 3){
    return true;
  }
  else {
    return false;
  }
}
var diagChecker = function(board, player){
  playerThree = player+player+player
  if((board[0][0] + board[1][1] + board[2][2]) === playerThree) {
    
    return true
  }
  if((board[2][0] + board[1][1]  + board[0][2])=== playerThree) {
   
    return true
  }
  return false
}

// console.log(boardChecker(board.board, 'o'))


var starter = function () {
console.log('starter is starting')
boardRender();
squareListner(board)
buttonsListner()


}
starter()