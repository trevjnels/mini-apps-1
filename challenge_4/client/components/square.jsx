
const React = require('react')
// currentPlayer={props.currentPlayer}
// column={props.column}

const Square = (props) => (
    <div key={props.num} className={props.parent+" "+props.num+ " square" + " " + props.color} row={props.parent}></div>
)

module.exports = Square

//  <div class="square"></div>


