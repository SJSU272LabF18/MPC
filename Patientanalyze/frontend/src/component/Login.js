import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import cookie from 'react-cookies';
import './bootstrap-social.css'
import Navbar from './Navbar';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
       
    }

  

    
    render() {
       

        return (
            <div className="container-fluid">
            <div class="mainBackground">
            <Navbar /> 
            <div class="d-flex flex-column justify-content-center centerAlign">
                <div class="bg-white border">
                    <h3 class="p-3"><strong>Login into PatientAlyze</strong></h3>
                </div>
                <div class="bgColor border">
                    <div class="p-3">
                        <button class="btn btn-block btn-social btn-lg btn-google">Connect
                            with
                        Google</button>
                    </div>
                    <div class="p-3">
                        <button class="btn btn-block btn-social btn-lg btn-facebook">Connect
                            with
                        Facebook</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Login;