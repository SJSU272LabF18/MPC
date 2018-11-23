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
             <div class="mainBackground img-res">
            <Navbar />
            <div className="container-fluid">
            <p className="see2">
            <img className="ml-5 mt-5 w-75 " src={require('../images/see how it works 2.png')} /></p>
                <div className="centerfont text-white mt-2">
                You cannot see the data of other hosiptals and they cannot see yours. <div>
                The real values are invisible to PatientAlyze, since the data remains </div>
                encrypted.</div>
                <div className="text-center mt-4 ">
                <Link to="/see3" className="btn-see text-white p-2 pl-5 pr-5" >WHAT HAPPENS NEXT?</Link ></div>
            </div>
            </div>
         );
    }
}
 
export default See2 ;