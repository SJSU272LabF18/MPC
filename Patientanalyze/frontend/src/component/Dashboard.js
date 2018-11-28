import React, { Component } from 'react'

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import Navbar from './Navbar'
import { Redirect } from 'react-router';
import axios from 'axios'

import '../App.css'
import 'react-tabs/style/react-tabs.css'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            connections: null,
            connectionRequest: null,
            pid: false,
            hospitalData:null,
            predictedImage:null
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {

        axios.get("http://10.250.204.114:5000/getAllConnections")
            .then(response => {
                if (response.status === 200) {
                    console.log("response is ", response.data.return)
                    this.setState({
                        connections: response.data.return
                    })
                }

            })
        
        if(localStorage.getItem("fileName")){
            if(localStorage.getItem("fileName").search("xlsx") !== -1){
                let imageName = localStorage.getItem("fileName").replace("xlsx","png") 
                localStorage.setItem('imageName',imageName)
            }else if(localStorage.getItem("fileName").search("csv") !== -1){
                let imageName = localStorage.getItem("fileName").replace("csv","png") 
                localStorage.setItem('imageName',imageName)
            }else{

            }
            const data = {
                imageName : localStorage.getItem("imageName")
            }
            axios.post("http://10.250.204.114:5000/getImage",data,{responseType:'arraybuffer'})
                .then(response => {
                    const base64 = btoa(
                        new Uint8Array(response.data).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          '',
                        ),
                      );
                      this.setState({ predictedImage: "data:;base64," + base64 });
                })
        }
    }

    joinConnection = (e) => {

        console.log("Connection Id is: ", e.target.id)
        console.log("Sending Request to: http://10.250.204.114:5000/join")
        const data = {
            "_id": e.target.id,
            "fileName": localStorage.getItem('fileName'),
            "userId":localStorage.getItem('googleId')
        }
        console.log("Request Data: ",data)
        axios.post("http://10.250.204.114:5000/join", data)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                }
            })
    }


    makeConnection = (e) => {
        console.log("Connection request #: ", this.state.connectionRequest)
        const data = {
            "owner": localStorage.getItem("username"),
            "userCount": parseInt(this.state.connectionRequest)
        }
        axios.post("http://192.168.43.184:5000/register", data)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                }
            })
    }

    onFileSelect = (e) => {
        const files = e.target.files[0]
        console.log(files)
        this.setState({
            hospitalData: files
        }, () => {
            console.log(this.state.hospitalData)
        });
    }

    onSubmitForm = (e) => {
        console.log("here in form");
        let formData = new FormData();
        formData.append('file',this.state.hospitalData)
        formData.append('googleId',localStorage.getItem('googleId'))
        //console.log(typeof formData.get('file'))
        this.setState({ pid: true })
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const data = {
            "googleId":localStorage.getItem('googleId')
        }
        console.log("in request making");
        axios.post("http://10.250.204.114:5000/upload", formData,config)
        .then(response => {
            console.log(response.data);
            localStorage.setItem('fileName',this.state.hospitalData.name)
        });
    }


    render() {
        let redirect = null;
        let image = null
        if (!localStorage.getItem("googleId")) {
            redirect = <Redirect to="/" />
        }

        if(this.state.predictedImage){
            image = <img className="img-fluid" src={this.state.predictedImage && this.state.predictedImage} />
        }

        if (this.state.connections) {
            console.log("Got connections")
            var connection = this.state.connections.map(data => {
                console.log("RowData is: ", data)
                return (
                    <tr>
                        <td>{data.owner}</td>
                        <td>{data.userCount}</td>
                        <td>{data.currRemainingCount}</td>
                        <td><button class="btn-sm btn-warning" id={data._id} onClick={this.joinConnection}>Join</button></td>
                    </tr>
                )
            })
        }


        return (
            <div class="mainBackground2">
                {redirect}
                <Navbar />
                <hr class="clearfix"></hr>
                <div>
                    <div class="container-fluid">
                        <Tabs defaultIndex={0}>
                            <TabList className="float-left d-flex flex-column h-100 p-5 text-white justify-content-center border rounded">
                                <Tab className="p-3 btn">Upload Data</Tab>
                                <Tab className="p-3 btn">Create/Connect to a network</Tab>
                                <Tab className="p-3 btn">Verify Data</Tab>
                                <Tab className="p-3 btn">Analyze Data</Tab>
                                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            </TabList>

                            <TabPanel>
                                <div class="d-flex flex-column justify-content-center p-5">
                                    <h4 class="text-center text-white">Welcome to PatientAlyze.</h4>
                                    <h4 class="text-center text-white">Please upload your hospital's</h4>
                                    <h4 class="text-center text-white">private data to get started</h4><br></br><br></br>
                                    <div class="w-50 h-100 border bg-grey mx-auto pt-5 pb-5 text-center text-white">
                                        <p>Drop CSV file to upload</p>

                                        <input type="file" name="files" onChange={this.onFileSelect}/>
                                        <button  onClick={this.onSubmitForm}>Upload</button>
                                        {/*<input type="hidden" name="propertyid" value="12345" />
                                        */}
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div class="d-flex flex-column p-5 justify-content-center">
                                    <h4 class="text-center text-white"><b>Welcome <span className="text-primary">{localStorage.getItem('username')}</span>
                                        , Make a new connection</b></h4>
                                    <h4 class="mb-5 text-center text-white"><b>or join in an existing one!</b></h4>
                                    <div class="d-flex flex-column p-3 justify-content-center">
                                        {/* --------------------------------------------------- */}
                                        <p class="text-center "><button type="button" class="btn btn-see text-white " data-toggle="modal" data-target="#connectionModal">
                                            Make a new Connection
                                        </button></p><br></br><br></br>
                                        <div class="modal fade" id="connectionModal" tabindex="-1" role="dialog">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Make a new connection</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form class="text-center">
                                                            <label>Enter the number of hospitals you want to allow to join to this network</label><br></br>
                                                            <input type="number" onChange={this.handleChange} name="connectionRequest" placeholder=" No. of participants"></input>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-dash" onClick={this.makeConnection}>Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* --------------------------------------------------- */}
                                        <table class="text-center text-white border">
                                            <th>ConnectionName</th>
                                            <th>Members Allowance</th>
                                            <th>Members Remaining</th>
                                            <th>Action</th>
                                            {connection}
                                        </table>
                                    </div>

                                </div>
                            </TabPanel>



                            <TabPanel>
                                <div class="d-flex flex-column justify-content-center p-5">

                                    <h4 class="text-center text-white">Verify your data before letting other </h4>
                                    <h4 class="text-center text-white">parties use it.</h4>
                                    <div class="d-flex flex-column p-5 justify-content-center">
                                        <table class="text-center text-white border">
                                            <th>File Name</th>
                                            <th>Uploaded On</th>
                                            <th>Action</th>
                                            <tr>
                                                <td>Darshil Kapadia.csv</td>
                                                <td>2018-09-01</td>
                                                <td><button class="btn-sm btn btn-dash text-white ">Download</button></td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div class="d-flex flex-column justify-content-center p-5">
                                    <h4 class="text-center text-white">View your results </h4>
                                    <div class="d-flex flex-column p-5 justify-content-center">
                                        <table class="text-center text-white border">
                                            <tr>
                                                <div className="mb-1 mt-4">Your patient prediction for next year: 2341</div>
                                                <div className="mb-4">Average patient prediction of all the hospitals: 2451</div>

                                                {/*<img className="img-fluid" src={require('../images/hospital1.png')} />*/}
                                                {image}                        
                                                {/* <td>Darshil Kapadia.csv</td>
                                                <td>2018-09-01</td>
                                                <td><button class="btn btn-dash text-white ">Download</button></td> */}
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard








{/*<td>
                            <button class="btn-sm btn-warning" data-toggle="modal" data-target={"#exampleModalCenter" + data._id}>
                                Join
                            </button>
                            <div class="modal fade" id={"exampleModalCenter" + data._id} tabindex="-1" role="dialog">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Upload CSV File</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <input type="file" name="files" onChange={this.onFileSelect} multiple />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" >Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>*/}