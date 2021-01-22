import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import todoapp from './todoapp';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import login from './login'  
import register from './login'  
  
const routing = (  
  <Router>  
    <div>  
    <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/login">Login</Link>  
        </li>  
        <li>  
          <Link to="/register">Register</Link>  
        </li>  
      </ul>  
      <Route path="/" component={todoapp} />  
      <Route path="/login" component={login} />  
      <Route path="/register" component={register} />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 

ReactDOM.render(
  <React.StrictMode>
    <todoapp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
