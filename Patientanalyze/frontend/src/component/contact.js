import React, { Component } from 'react';
import Navbar from './Navbar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
              <div class="mainBackground">
            <Navbar />
            <div className="text-white ml-4 mt-5 col-lg-7 leftfont">
            <h2>Team Members</h2>
            <div><h4>Devashish Nyati</h4></div>
            <div><h4>Darshil Pareshbhai Kapadia </h4></div>
            <div><h4>Aditya Doshatti</h4></div>
            <div><h4>Aditi Kumari</h4></div>
            </div>
</div>
        </div> );
    }
}
 
export default Contact;