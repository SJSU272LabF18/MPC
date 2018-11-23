import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import cookie from 'react-cookies';
import './bootstrap-social.css'
import Navbar from './Navbar';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    responseGoogle = (response) => {
        console.log(response)
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
                                <GoogleLogin
                                    clientId="10318063588-f2n7ca9793aq2cfvvn57pq63r92cb3g6.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                />
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