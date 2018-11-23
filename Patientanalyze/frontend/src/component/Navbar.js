import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Redirect} from 'react-router';
import '../App.css';
import {NavLink} from 'react-router-dom';

//create the Navbar Component
class Navbar extends Component {
    constructor(props){
        super(props);
       
    }
   
    render(){
       
        return(
                   
          <nav className="navbar navbar-light bg-light test" >
          <NavLink to="/" className="mb-0 py-0" ><img src={require('../images/logo.png')} /></NavLink>
          <ul className="navbar">
          <ul className="navbar-text text-dark mt-2 "><strong>About</strong></ul>
          <ul className="navbar-text text-dark mt-2 "><strong>Blog</strong></ul>
          <ul className="navbar-text text-dark mt-2 "><strong>Contact</strong></ul>
          <Link to="/login" className="navbar-text text-dark mt-2 ml-5"><strong>Login</strong></Link>
         </ul>  
         </nav>
        )
    }
}

export default Navbar;