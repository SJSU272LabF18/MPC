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
                PatientAlyze Platform</h2><br></br>
                <div className="row mt-2">
                <div className="col-lg-5 mr-5">
                <img className="ml-5 imageCenter" src={require('../images/about.jpeg')} /></div>
                {/* <div class="col-lg-4 mt-5 ml-5 border-left-element" > */}
                <div className="col=lg-2"></div>
                <div className="col-lg-6 ml-5 text-white lead">
                
               <p>Hospitals upload their patients private data on-site with the PatientAlyze importer.</p>
               <p>PatientAlyze importer encypts the uploaded data and upload the results to the PatientAlyze Application Server.</p>
               <p>PatientAlyze Server decrypts the data, applies Machine Learning algorithms to analyze the data and predicts the future crowd of hospitals.</p>
               <p>PatientAlyze utilizes secure computing technology- Multi Party Computing, to process the predicted data received after ML algorithms without removing the protection.</p>
               <p>Using MPC, PatientAlyze compares the encrypted hospital data and produces results.</p>
               <p>Hospital get the results without knowing the data of the other hospitals.</p>



    
               </div>
              </div>
               {/* </div> */}
                {/* <p className="see2">
               </p> */}
                
                <div className="text-center mt-4 ">
                <p><Link to="/login" className="btn-see text-white p-2 pl-5 pr-5" >GET STARTED</Link></p></div>
               
              
            </div>
            </div>
         );
    }
}
 
export default About ;