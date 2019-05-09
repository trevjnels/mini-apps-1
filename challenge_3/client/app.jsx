

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentStep: 1, // Default is Step 0
      email: '',
      username: '',
      password: '', 
      addressOne: "",
      addressTwo: "",
      city: "",
      shipState: "",
      zipCode: "",
      phoneNumber: "",
      ccNumber: "",
      expDate: " ",
      CCV:"",
      billZipCode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event)  {
    const {name, value} = event.target
    console.log("name value", name, " ", value)
    this.setState({
      [name] : value
    })
    // console.log("yay")
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({
      currentStep: this.state.currentStep+1
    })
    console.log("YIPPIE")
    console.log(this.state)
  
    // const  { email, username, password , addressOne, addressTwo, city, shipState, zipCode, phoneNumber, ccNumber, expDate, CCV, billZipCode } = this.state;
    // alert(`Your registration detail: \n email: ${email}\n username: ${username}\n password ${password} \n addressOne\n addressTwo\n city\n shipState\n zipCode\n phoneNumber\n ccNumber\n expDate\n CCV\n billZipCode `)
    // return this.state.currentStep
  }

  render() {
    <App currentStep={this.handleSubmit.bind(this)}/>
    return(
      <div >
        <Header />
        <CheckoutButton />    
        <MasterForm />
        <PurchasePage />
      </div>
    )
  }
}






class MasterForm extends App {
  constructor(props) {
    super(props)
  }
  render(){
    if(this.state.currentStep > 0) {
      console.log("- - - - - - ", this.state)
      return null
    }
    return(
  <div>
  <form onSubmit={this.handleSubmit}>
    <F1 />
    <F2 />
    <F3 />
    </form>
  </div>
    )
  }

}



class F1 extends App {
  constructor(props) {
    super(props)
  }
  render(){
    if(this.state.currentStep !== 1) {
      return null
    }
    return(
      <div className="form-group">
        <input className="form-group" id="name" name="name" type="text" placeholder="Joe J. JOE" value={this.props.name} onChange={this.handleChange}></input>

        <input className="form-group" id="email" name="email" type="text" placeholder="example@example.com" value={this.props.email} onChange={this.handleChange}></input>

        <input className="form-group" id="password" name="password" type="text" placeholder="P@ssword1!" value={this.props.password} onChange={this.handleChange}></input>

        <button name="next"  className="next">Next </button>
      </div>
    )
  }
//F1 collects name, email, and password for account creation.
}

class F2 extends App {
  constructor(props) {
    super(props)
  }
  render(){
    if(this.state.currentStep !== 2) {
      return null
    }
    return(
      <div className="form-group">
        <input className="form-group" id="addressOne" name="addressOne" type="text" placeholder="123 Sesame Street" value={this.props.addressOne} onChange={this.handleChange}></input>

        <input className="form-group" id="addressTwo" name="addressTwo" type="text" placeholder="apt 100" value={this.props.addressTwo} onChange={this.handleChange}></input>

        <input className="form-group" id="city" name="city" type="text" placeholder="Salt Lake City" value={this.props.city} onChange={this.handleChange}></input>
        
        <input className="form-group" id="shipState" name="shipState" type="text" placeholder="Utah" value={this.props.shipState} onChange={this.handleChange}></input>

        <input className="form-group" id="zipCode" name="zipCode" type="text" placeholder="10005" value={this.props.zipCode} onChange={this.handleChange}></input>

        <input className="form-group" id="phoneNumber" name="phoneNumber" type="text" placeholder="1 (610) 555-5555" value={this.props.phoneNumber} onChange={this.handleChange}></input>

        <button name="next" className="next">Next </button>
      </div>
    )
  }
  // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
}

class F3 extends App {
  constructor(props) {
    super(props)
  }
  render(){
    if(this.state.currentStep !== 3) {
      return null
    }
    return(
      <div className="form-group">
        <input className="form-group" id="ccNumber" name="ccNumber" type="text" placeholder="4023-1234-1234-1234" value={this.props.ccNumber} onChange={this.handleChange}></input>

        <input className="form-group" id="expDate" name="expDate" type="text" placeholder="7//4/1776" value={this.props.expDate} onChange={this.handleChange}></input>

        <input className="form-group" id="CCV" name="CCV" type="text" placeholder="827" value={this.props.CCV} onChange={this.handleChange}></input>

        <input className="form-group" id="billZipCode" name="billZipCode" type="text" placeholder="10005" value={this.props.billZipCode} onChange={this.handleChange}></input>

        <button  name="final" type="submit"  className="next">Next </button>
      </div>
    )
  }
  // F3 collects credit card #, expiry date, CVV, and billing zip code.
}




class PurchasePage extends App {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.state.currentStep !== 4) {
      return null
    }
    return(
      <div>
        <button name="purchase" className="purchase">Purchase </button>
      </div>
    )
  }
}







class CheckoutButton extends App {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.state.currentStep !== 0) {
      return null
    }
    return(
      <div >
        <form onSubmit={this.handleSubmit}>
        <button  name="checkout" className="checkout">Checkout </button>
        </form>
      </div>
    )
  }
}





class Header extends App {
  constructor(props) {
    super(props)
  }
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