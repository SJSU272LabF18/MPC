import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {
    constructor(){
        super();
        this.state = {  
           
        }
    }  
   
    render(){
       
        return(
        
            
            <div class="mainBackground">
            <Navbar /> 
            <div className="container-fluid">

         <div >
         <br></br><br></br><div className="row mt-4 rounded ml-5">
         <div className="text-white ml-4 mt-5 col-lg-7 leftfont">Data-driven services for hospitals with end-to-end data protection and accountability. 
         <br></br><p className="button-text mt-3"> <Link to="/see1" className="text-white p-2 pl-5 pr-5 buttonmargin btn-see">SEE HOW IT WORKS</Link></p></div>

            <div class="col-lg-4 mt-5 ml-5 border-left-element" >
            <br></br><br></br><br></br><ul className="text-white"><img className="w-0" src={require('../images/key.png')} /><span className="ml-3">Keep your private data safe</span></ul>
            <ul className="text-white"><img className="w-0" src={require('../images/trophy.png')} /><span className="ml-3">Beaware of upcoming diseaes</span></ul>
            <ul className="text-white"><img className="w-0" src={require('../images/1.png')} /><span className="ml-3">Lead the league of hospitals</span></ul>
            </div>
         </div> 
         
        
         </div> 
         </div>
        </div>
   

        )
    }
}
//export Home Component
export default Home;