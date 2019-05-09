
const React = require('react')
const ReactDOM = require('react-dom')


class Square extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
      return (<div className="square"></div>)
  }
}

module.exports = Square

//  <div class="square"></div>