var board = {
  row1: ["o",0,'x'],
  row2: [1,'x',1],
  row3: ['o','o','o'],
  lastWinner: null,
  score: {
    player1: 0,
    payer2: 0
  }
}
var boardMap = {
    a:  board.row1[0] ,
    b:   board.row1[1] ,
    c:   board.row1[2] ,
    d:    board.row2[0] ,
    e:  board.row2[1] ,
    f:   board.row2[2],
    g:    board.row3[0],
    h:   board.row3[1],
    i:   board.row3[2]
}

var rowLooper = [board.row1, board.row2, board.row3,]

var gameLogic = function(board) {
  //switching between players - start with X

}

var boardChecker = function(board, player){
  if(diagChecker(board, player)){
    alert(`${player} wins! diag`)
    return true;
  }
  var num =0
  while(num <3) {
   var row = rowChecker(rowLooper[num], player)
   var cols = colChecker(num, player)
    num++
    if(row || cols){
      alert(`${player} wins! col/row`)
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
var colChecker = function(col, player){
  var totalX = 0
  rowLooper.forEach(row => {
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
  var {row1, row2, row3} = board;
  if((row1[0] + row2[1] + row3[2]) === playerThree) {
    console.log("majorDiagnal present")
    return true
  }
  if((row1[2] + row2[1] + row3[0])=== playerThree) {
    console.log("minordiag present")
    return true
  }
  return false
}

console.log(boardChecker(board, 'o'))