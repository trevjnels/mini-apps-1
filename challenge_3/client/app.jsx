

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <CheckoutButton />
        <MasterForm />
      </div>
    )
  }
}









class MasterForm extends React.Component {
  render(){
    return(
  <div>
    <F1 />
    <F2 />
    <F3 />
  </div>
    )
  }

}



class F1 extends React.Component {
  render(){
    // if(this.props.currentStep !== 1) {
    //   return null
    // }
    return(
      <div className="form-group">
        <input className="form-group" id="name" name="name" type="text" placeholder="Joe J. Schmoe" value={this.props.name} onChange={this.props.handleChange}></input>

        <input className="form-group" id="email" name="email" type="text" placeholder="example@example.com" value={this.props.email} onChange={this.props.handleChange}></input>

        <input className="form-group" id="password" name="password" type="text" placeholder="P@ssword1!" value={this.props.password} onChange={this.props.handleChange}></input>

      </div>
    )
  }
//F1 collects name, email, and password for account creation.
}

class F2 extends MasterForm {
  render(){
    // if(this.props.currentStep !== 2) {
    //   return null
    // }
    return(
      <div className="form-group">
        <input className="form-group" id="addressOne" name="addressOne" type="text" placeholder="123 Sesame Street" value={this.props.addressOne} onChange={this.props.handleChange}></input>

        <input className="form-group" id="addressTwo" name="addressTwo" type="text" placeholder="apt 100" value={this.props.addressTwo} onChange={this.props.handleChange}></input>

        <input className="form-group" id="city" name="city" type="text" placeholder="Salt Lake City" value={this.props.city} onChange={this.props.handleChange}></input>
        
        <input className="form-group" id="shipState" name="shipState" type="text" placeholder="Utah" value={this.props.shipState} onChange={this.props.handleChange}></input>

        <input className="form-group" id="zipCode" name="zipCode" type="text" placeholder="10005" value={this.props.zipCode} onChange={this.props.handleChange}></input>

        <input className="form-group" id="phoneNumber" name="phoneNumber" type="text" placeholder="1 (610) 555-5555" value={this.props.phoneNumber} onChange={this.props.handleChange}></input>

      </div>
    )
  }
  // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
}

class F3 extends React.Component {
  render(){
    // if(this.props.currentStep !== 3) {
    //   return null
    // }
    return(
      <div className="form-group">
        <input className="form-group" id="ccNumber" name="ccNumber" type="text" placeholder="4023-1234-1234-1234" value={this.props.ccNumber} onChange={this.props.handleChange}></input>

        <input className="form-group" id="expDate" name="expDate" type="text" placeholder="7//4/1776" value={this.props.expDate} onChange={this.props.handleChange}></input>

        <input className="form-group" id="CCV" name="CCV" type="text" placeholder="827" value={this.props.CCV} onChange={this.props.handleChange}></input>

        <input className="form-group" id="billZipCode" name="billZipCode" type="text" placeholder="10005" value={this.props.billZipCode} onChange={this.props.handleChange}></input>


      </div>
    )
  }
  // F3 collects credit card #, expiry date, CVV, and billing zip code.
}









class CheckoutButton extends React.Component {
  render() {
    return(
      <div>
        <button className="checkout">Checkout </button>
      </div>
    )
  }
}





class Header extends React.Component {
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