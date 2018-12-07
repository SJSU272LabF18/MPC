import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import {Redirect} from 'react-router';

class Delete extends Component{
    
        constructor(props) {
            super(props);
            this.state = { 
                BookId:'',
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
            BookID : this.state.BookID
            }

        console.log("Delete Event called")
        axios.defaults.withCredentials = true;
        // axios.post('http://localhost:3001/create',data)
        // .then(()=>this.setState({redirect:true}));
        axios.post('http://localhost:3001/delete',data)
        .then(response => {
            console.log("Status Code : ",response.status);
            if(response.status === 200){
                console.log("Response for Book Deletion received successfully")
                this.setState({
                    redirect : true
                })
            }else{
                console.log("failure in book deletion")
                this.setState({
                   redirect : false
                })
            }
        });

        }
      
    render(){
        if(!cookie.load('cookie')){
         return <Redirect to="/login" />
        }
        const { redirect } = this.state;
        if(redirect){
        return <Redirect to='/home'/>
        }
        return(
            <div class="container">
                <form method="post" onSubmit={this.submitEvent}>
                    <div style={{width: "50%",float: "left"}} class="form-group">
                        <input  type="text" class="form-control" name="BookID" placeholder="Search a Book by Book ID" onChange={this.handleEvent}/>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                            <button class="btn btn-success" type="submit">Delete</button>
                    </div> 
                </form>
            </div>
        )
    }
}

export default Delete;