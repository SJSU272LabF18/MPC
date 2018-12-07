import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import cookie from 'react-cookies';

class Create extends Component{
  
       constructor(props) {
           super(props);
           this.state = { 
               BookID:'',
               Title:'',
               Author:'',
               authFlag:false,
               redirect:false
         }
           this.handleEvent=this.handleEvent.bind(this);
           this.submitEvent=this.submitEvent.bind(this);
       }

       handleEvent(e){
        let target=e.target;
        let value=target.type==='checkbox'?target.checked:target.value;
        let name=target.name;
        this.setState({
            [name]:value
        });
       }

       submitEvent(e){
        var headers = new Headers();
        e.preventDefault();
        const data = {
            BookID : this.state.BookID,
            Title : this.state.Title,
            Author:this.state.Author
        }
        console.log("submit called")
        axios.defaults.withCredentials = true;
        // axios.post('http://localhost:3001/create',data)
        // .then(()=>this.setState({redirect:true}));
        axios.post('http://localhost:3001/create',data)
        .then(response => {
            console.log("Status Code : ",response.status);
            if(response.status === 200){
                console.log("Response for Book addition received successfully")
                this.setState({
                    redirect : true
                })
            }else{
                console.log("failure")
                this.setState({
                   redirect : false
                })
            }
        });
       
       }

    // submitEvent(e){
    //     var headers = new Headers();
    //     e.preventDefault();
    //     const data = {
    //         BookID : this.state.BookID,
    //                 Title : this.state.Title,
    //                 Author:this.state.Author
    //     }
    //     //set the with credentials to true
    //     axios.defaults.withCredentials = true;
    //     //make a post request with the user data
    //     axios.post('http://localhost:3001/create',data)
    //         .then(response => {
    //             console.log("Status Code : ",response.status);
    //             if(response.status === 200){
    //                 console.log("Response for Book addition received successfully")
    //                 this.setState({
    //                     authFlag : true
    //                 })
    //             }else{
    //                 console.log("failure")
    //                 this.setState({
    //                     authFlag : false
    //                 })
    //             }
    //         });
    // }
       
   
    render(){
        
        // let redirectVar = null;
        if(!cookie.load('cookie')){
            console.log("Redirecting to login page")
         return <Redirect to="/login" />
        }
        const { redirect } = this.state;
            if (redirect) {
            return <Redirect to='/home'/>;
     }
        
        return(
            <div>
               {/* {redirectVar} */}
                <br/>
                <div class="container">
                    <h1>Create Book record</h1>
                    <form onSubmit={this.submitEvent}>
                        <div style={{width: '30%'}} class="form-group">
                            <input  type="text" class="form-control" name="BookID" placeholder="Book ID" onChange={this.handleEvent} />
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" class="form-control" name="Title" placeholder="Book Title"
                                onChange={this.handleEvent} />
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" class="form-control" name="Author" placeholder="Book Author"
                                onChange={this.handleEvent} />
                        </div>
                        <br/>
                        <div style={{width: '30%'}}>
                            <button class="btn btn-success" type="submit">Create</button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}



export default Create;