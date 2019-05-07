


var board = {

     board: [
          ["","",""],
          ["","",""],
          ['','',' '],
      ],

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





var rowLooper = [board.board.row1, board.board.row2, board.board.row3,]

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - 




var playerToggle = function(obj){
if(obj.currentPlayer === "player1") {
  obj.currentPlayer = "player2"
} else {
  obj.currentPlayer = "player1"
}
}

var headerRender = function(input) {

  if(input) {
if(Object.keys(input)[0] ===  "win"){
  var header = document.getElementsByClassName("title")
  header[0].innerHTML = `<h1 style="color: red">Player ${input.win.toUpperCase()} WINS</h1>`
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

var squareListner = function(board){
  var squareNodes = Array.from(document.getElementsByClassName("square"));
  squareNodes.map(elem => {

    elem.onclick = function(e) {
      var resultsBoard = board.board.slice()
      var clicked = elem.id
      
      var {currentPlayer, players} = board;
      var playerLetter = players.key[currentPlayer];
      console.log("player letter is ", typeof playerLetter)
      console.log("****** spaceKey = ", clicked)
      var split = clicked.split("")
    
      resultsBoard[split[0]][split[1]] = playerLetter;
     
      console.log(JSON.stringify( resultsBoard));
      board.board = resultsBoard;
      elem.onclick = null;

      elem.innerHTML = `<img class="selected-${playerLetter}" src = ${players.src[currentPlayer]} / >`
      if(boardChecker(board.board, playerLetter)){
        headerRender({win: playerLetter})
        players.score[currentPlayer] ++ 
      }
      playerToggle(board);
    }
  })
  }





var buttonsListner = function(){


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
    console.log("majorDiagnal present")
    return true
  }
  if((board[2][0] + board[1][1]  + board[0][2])=== playerThree) {
    console.log("minordiag present")
    return true
  }
  return false
}

// console.log(boardChecker(board.board, 'o'))


var starter = function () {
console.log('starter is starting')
squareListner(board)

}
starter()