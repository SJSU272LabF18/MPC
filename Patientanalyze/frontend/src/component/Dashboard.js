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
            connectionRequest : null
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount() {

        axios.get("http://192.168.43.184:5000/getAllConnections")
            .then(response => {
                if (response.status === 200) {
                    console.log("response is ", response.data.return)
                    this.setState({
                        connections: response.data.return
                    })
                }

            })
    }

    joinConnection = (e) => {

        console.log("Connection Id is: ",e.target.id)
        console.log("Sending Request to: http://192.168.43.184:5000/join")
        const data = {
            "_id":e.target.id,
            "value":100
        }
        axios.post("http://192.168.43.184:5000/join",data)
            .then(response => {
                if(response.status === 200){
                    console.log(response)
                }
            })
    }


    makeConnection = (e) => {
        console.log("Connection request #: ",this.state.connectionRequest)
        const data = {
            "owner":localStorage.getItem("username"),
            "userCount":parseInt(this.state.connectionRequest)
        }
        axios.post("http://192.168.43.184:5000/register",data)
        .then(response => {
            if(response.status === 200){
                console.log(response)
            }
        })
    }

    render() {
        let redirect = null;
        if (!localStorage.getItem("googleId")) {
            redirect = <Redirect to="/" />
        }

        if (this.state.connections) {
            console.log("Got connections")
            var connection = this.state.connections.map(data => {
                console.log("RowData is: ",data)
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
                                <Tab className="p-3">Create/Connect to a network</Tab>
                                <Tab className="p-3">Upload Data</Tab>
                                <Tab className="p-3">Verify Data</Tab>
                                <Tab className="p-3">Analyze Data</Tab><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            </TabList>
                            <TabPanel>
                                <div class="d-flex flex-column p-5 justify-content-center">
                                    <h4 class="text-center text-white"><b>Welcome! Make a new connection</b></h4>
                                    <h4 class="mb-5 text-center text-white"><b>or join in an existing one!</b></h4>
                                    <div class="d-flex flex-column p-3 justify-content-center">
                                        {/* --------------------------------------------------- */}
                                        <button type="button" class=" btn btn-md btn-warning form-control rounded" data-toggle="modal" data-target="#connectionModal">
                                            Make a new Connection
                                        </button><br></br><br></br>
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
                                                            <input type="number" onChange={this.handleChange} name="connectionRequest" placeholder="No. of participants"></input>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-warning" onClick={this.makeConnection}>Save changes</button>
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
                                    <h4 class="text-center text-white">Welcome to PatientAlyze.</h4>
                                    <h4 class="text-center text-white">Please upload your hospital's</h4>
                                    <h4 class="text-center text-white">private data to get started</h4><br></br><br></br>
                                    <form class="w-50 h-100 border bg-grey mx-auto p-5 text-center text-white">
                                        <p>Drop CSV file to upload</p>
                                        <button class="btn-md btn-warning">Upload</button>
                                    </form>
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
                                                <td><button class="btn-sm btn-warning">Download</button></td>
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
                                            <th>File Name</th>
                                            <th>Uploaded On</th>
                                            <th>Action</th>
                                            <tr>
                                                <td>Darshil Kapadia.csv</td>
                                                <td>2018-09-01</td>
                                                <td><button class="btn-sm btn-warning">Download</button></td>
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