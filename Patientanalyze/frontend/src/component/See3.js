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
            <p className="see2 transition2">
            <img className="ml-5 mt-5 w-75 " src={require('../images/see3.png')} /></p>
                <div className="centerfont text-white mt-2 transition2">
                Even though the data remains unseen to humans and machines, <div>
                PatientAlyze was able to analyse the data and present the results.</div>
                </div>
                <div className="text-center mt-4 mb-5">
                <p className="transition3"><Link to="/login" className="btn-see text-white p-2 pl-5 pr-5" >GET STARTED</Link></p></div>
            </div>
            </div>
         );
    }
}
 
export default See2 ;