import React, { Component } from 'react'

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import Navbar from './Navbar'
import { Redirect } from 'react-router';

import '../App.css'
import 'react-tabs/style/react-tabs.css'

class Dashboard extends Component {

    render() {
        let redirect = null;
        if(!localStorage.getItem("googleId")){
            redirect = <Redirect to="/"/>
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
                                                            <input type="number" placeholder="No. of participants"></input>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-warning">Save changes</button>
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
                                            <tr>
                                                <td>Darshil Kapadia</td>
                                                <td>3</td>
                                                <td>2</td>
                                                <td><button class="btn-sm btn-warning">Join</button></td>
                                            </tr>
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