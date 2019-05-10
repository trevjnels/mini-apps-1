
const React = require('react')
// currentPlayer={props.currentPlayer}
// column={props.column}

const Square = (props) => (
    <div key={props.num} className={props.parent+" "+props.num+ " square" } row={props.parent}></div>
)

module.exports = Square

//  <div class="square"></div>


