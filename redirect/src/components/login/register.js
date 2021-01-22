import './App.css';
import React from 'react';
import logo from './Acuity-logo.svg';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
class register extends React.Component {
    constructor(props) {
    super(props);
    this.state = { input: {},
    errors: {}
  };
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  	 var con = parseInt(document.getElementById("contact").value)
    checku();
    function insert() {
      var fname = document.getElementById("firstname").value
      var lname = document.getElementById("lastname").value
      const pa = document.getElementById("password").value
      var rp = document.getElementById("confirm password").value
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        firstName: fname,
        lastName: lname,
        password: pa,
        repass: rp,
        Contactnum:con
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      };
      console.log(raw)
      //http://localhost:63958/api/Contacts
      fetch("https://localhost:44306/api/contacts/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }//end fxn insert
    function checku(){
    function example(response) {
      //more logigc
      if (response.status === 404) {
        console.log("user Doesnt exist ");
      }
      else if (response.status === 204) {
        console.log("POST");
        console.log(JSON.stringify(response.data));
        insert();
      }
      else if (response.status === 200) {
        console.log(JSON.stringify(response.data));
        alert("user exists");
        document.getElementById("contact").value = ""
      }
    }//end fxn example
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://localhost:44306/api/contacts/' + con,
      headers: {}
    };
    axios(config)
      .then(response => example(response))
      .catch(function (error) {
        console.log(error);
      });
    }//Endchck user
        let input = {};
        input["firstname"] = "";
        input["lastname"] = "";
        input["contact"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["firstname"]) {
        isValid = false;
        errors["firstname"] = "Please enter your firstname.";
      }
  
      if (typeof input["firstname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["firstname"].length < 4 || !re.test(input["firstname"])){
            isValid = false;
            errors["firstname"] = "Please enter valid username.";
        }
      }
      if (!input["contact"]) {
        isValid = false;
        errors["contact"] = "Please enter your contact.";
      }
  
      if (typeof input["phone"] !== "undefined") {

         

        var pattern = new RegExp(/^[0-9\b]+$/);
      
        if (!pattern.test(input["phone"])) {
      
          isValid = false;
      
          errors["phone"] = "Please enter only number.";
      
        }else if(input["phone"].length !== 10){
      
          isValid = false;
      
          errors["phone"] = "Please enter valid phone number.";
      
        }
      
      }
          
      
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if(input["password"].length < 8||input.value.match(numbers)||input.value.match(lowerCaseLetters)||input.value.match(upperCaseLetters)){
            isValid = false;
            errors["password"] = "Please add at least 8 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
  
  render() {
    return (
    <div className="container">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
       <form onSubmit={this.handleSubmit}>
              <h1><u>REGISTRATION</u></h1>
               <br /> 
              <div>
            <label for="firstname">Firstname:</label>
            <input 
              type="text" 
              name="firstname" 
              value={this.state.input.firstname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Firstname" 
              id="firstname" />
  
  <div className="text-danger">{this.state.errors.firstname}</div>
          </div><br />
                 
          <div class="form-group">
            <label for="lastname">Lastname:</label>
            <input 
              type="text" 
              name="lastname" 
              value={this.state.input.lastname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Lastname" 
              id="lastname" />
  
              <div className="text-danger">{this.state.errors.lastname}</div>
          </div><br />
          <div class="form-group">
            <label for="contact">Contact:</label>
            <input 
              type="text" 
              name="contact" 
              value={this.state.input.contact}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter contact" 
              id="contact" />
  
              <div className="text-danger">{this.state.errors.contact}</div>
          </div><br />
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div><br />
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div><br />
              <br />
              <button>Submit</button><br /><br />
              <p>
              Already have an account?  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Sign in
        </a>
              </p>
      
                
            </form>
           
       
      </div>
    );
    }}
    export default register;