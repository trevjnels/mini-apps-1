

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <CheckoutButton />
      </div>
    )
  }
}

























class CheckoutButton extends App {
  render() {
    return(
      <div>
     <button className="checkout">Checkout </button>
     </div>
    )
  }
}





class Header extends App {
  render() {
    return(
      <div>
        <h1>Shut up and take my honey!</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);