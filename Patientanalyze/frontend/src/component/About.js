import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
class  About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <div class="mainBackground2 img-res">
            <Navbar />
            <div className="container-fluid ">
                <h2 className="text-white text-center mt-4">
                Architecture</h2><br></br>
                <div className="row mt-2">
                <div className="col-lg-5">
                <img className="ml-5 img-fluid" src={require('../images/about.jpeg')} /></div>
                <div className="col-lg-5 ml-5 text-white describe  text-white">
                
                <li>Hospitals uploads their patients private data  on-site with the PatientAlyze importer.</li><br></br>
                <li>PatientAlyze importer reads the data, applies Machine Learning algorithms to analyze the data, encrypts the results and upload the results to the PatientAlyze Application Server.</li><br></br>
                <li>PatientAlyze utilizes secure computing technology, Multi Party Computing, to processes data without removing the protection.</li><br></br>
                <li>Using MPC, PatientAlyze compares the encrypted hospital data and produces results.</li>
                <li>Hospital get the results without knowing the data of the other hospitals.</li>
               </div>
              
               </div>
                {/* <p className="see2">
               </p> */}
                <div className="text-center mt-4 ">
                <p className= "transition3"><Link to="/see2" className="btn-see text-white p-2 pl-5 pr-5 " >WHAT ABOUT OTHERS</Link></p></div>
            </div>
            </div>
         );
    }
}
 
export default About ;