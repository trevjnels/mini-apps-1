
const React = require('react')
// currentPlayer={props.currentPlayer}
// column={props.column}

const Square = (props) => (
    <div key={props.key} className={props.key+" square"}></div>
)

module.exports = Square

//  <div class="square"></div>


