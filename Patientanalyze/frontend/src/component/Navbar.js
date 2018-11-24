import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

//create the Navbar Component
class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        let redirect = null;
        let logout = () => {
            localStorage.removeItem("googleId")
            localStorage.removeItem("username")
            redirect = <Redirect to="/"></Redirect>
        }
        let check = null;
        if (localStorage.getItem("googleId")) {
            check =
                <ul className="navbar">
                    <ul className="navbar-text text-dark mt-2 "><strong>About</strong></ul>
                    <ul className="navbar-text text-dark mt-2 "><strong>Blog</strong></ul>
                    <ul className="navbar-text text-dark mt-2 "><strong>Contact</strong></ul>
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    />
                </ul>
        } else {
            check = <ul className="navbar">
                <ul className="navbar-text text-dark mt-2 "><strong>About</strong></ul>
                <ul className="navbar-text text-dark mt-2 "><strong>Blog</strong></ul>
                <ul className="navbar-text text-dark mt-2 "><strong>Contact</strong></ul>
                <Link to="/login" className="navbar-text text-dark mt-2 ml-5"><strong>Login</strong></Link>
            </ul>
        }
        return (

            <div>
                {redirect}
                <nav className="navbar navbar-light bg-light test" >
                    <NavLink to="/" className="mb-0 py-0" ><img src={require('../images/logo.png')} /></NavLink>
                    {check}
                </nav>
            </div>

        )
    }
}

export default Navbar;