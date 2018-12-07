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
            response:null
        };

    }


    successResponseGoogle = (response) => {
        localStorage.setItem("googleId",response.googleId)
        localStorage.setItem("username",response.w3.ig)
        this.setState({
            response:response
        })
        console.log(response.w3.ig)
    }

    render() {

        let redirect = null

        if(localStorage.getItem("googleId")){
            redirect = <Redirect to="/analyze"/>
        }
        return (
                
                <div class="mainBackground2">
                {redirect}
                    <Navbar />
                    <div className="container-fluid">
                    <div class="d-flex flex-column justify-content-center centerAlign">
                        <div class="bg-white border">
                            <h3 class="p-3"><strong>Login into PatientAlyze</strong></h3>
                        </div>
                        <div class="bgColor border">
                            <div class="p-3 text-center">
                                <GoogleLogin 
                                clientId="10318063588-g56hbiid3a16jbeclanhg7fle84b2m3r.apps.googleusercontent.com"
                                className="btn-block"
                                onSuccess={this.successResponseGoogle}
                                onFailure={this.failureResponseGoogle}>
                                <h5 className="btn-block text-center text-muted border-left ml-3 mt-2 "><strong>Connect with Google</strong></h5>
                                </GoogleLogin>
                            </div>
                            <div class="p-3">
                               <div className="text-center ml-1 mr-1 text-muted"><small>By clicking, you agree to abide by Google's policy and conditions.<div>To know more about policies click here <a className="text-primary"><u>Terms and Conditions</u></a></div></small></div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default Login;
