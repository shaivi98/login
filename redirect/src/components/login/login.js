import React from "react";
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '././Acuity-logo.svg';
import {BrowserRouter as Router, Route,NavLink,Switch } from 'react-router-dom';

class login extends React.Component{
  constructor() {
    super()
    this.state = {
    username: '',
    password: '',
    isLogined: false
   }
  }
   handleInputChange = (event) => {
  this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit =() => {
    <Router>
<NavLink to="/App1">Login</NavLink>
<Switch>
<Route path="/App" component={App}/>
<Route path="/App" component={App}/>//ignore 
</Switch></Router>
  }
 
  
    render(){
    return (
        <div className="container">
           <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
           <form onSubmit={this.handleSubmit}>
                  <h2><u>LOGIN</u></h2>
                   <br /> 
                  <div>
                <label for="username">Username:</label>
                <input 
                  type="text" 
                  name="username"
                  placeholder="Enter username" 
              id="userId" required /> 
              </div><br />
              <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password"  
              placeholder="Enter password" 
              id="pwd" required />
          </div>
         
          <button name="submit" onClick={this.handleSubmit}> Login </button> <br />
              <p>
              Not a member? Sign up now
              </p> 
      
          </form>
           </div>
    );
                
  }
}

export default login;