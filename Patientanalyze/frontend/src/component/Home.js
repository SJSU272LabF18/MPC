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
        
            <div className="container-fluid">
            <div class="mainBackground">
            <Navbar /> 

         <div >
         <div className="row mt-4 rounded shadow-sm ml-5">
         <div className="text-white ml-4 mt-5 col-lg-5 leftfont">Data-driven services for hosiptals with end-to-end data protection and accountability. 
         <Link to="/see1" className="btn btn-primary text-white ml-5 p-3 mt-3 buttonmargin ">SEE HOW IT WORKS</Link></div>
         
         <div className="col-lg-1 ml-5 "></div>

            <div class="col-lg-4 mt-5 ml-5" >
            <ul className="text-white"><img className="w-0" src={require('../images/key.png')} /><span className="ml-3">Keep your private data safe</span></ul>
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