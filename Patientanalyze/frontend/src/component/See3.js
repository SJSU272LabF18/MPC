import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
class  See2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
             <div class="mainBackground img-res">
            <Navbar />
            <p className="see2">
            <img className="ml-5 mt-5 w-75 " src={require('../images/see3.png')} /></p>
                <div className="centerfont text-white mt-2">
                Even though the data remains unseen to humans and machines, <div>
                PatientAlyze was able to analyse the data and present the results.</div>
                </div>
                <div className="text-center">
                <Link to="/login" className="btn btn-primary text-white ml-5 p-3 mt-3 " >GET STARTED</Link></div>
            </div>
            </div>
         );
    }
}
 
export default See2 ;