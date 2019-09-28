import React, { Component } from 'react'
import "./index.css"
import view from './view';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class index extends Component {
    render() {
        return (
            <div>               
                <div className="head">
                
                    <label className="lbl">View Defects</label>
                  
                
                </div>
                            
                <div className="sty">              
                    <form className="form_style">
                        <br></br>
                        <label>ID</label><br></br>                
                        <input type="text" name="id" className="id"></input><br></br><br></br>                 
                        <label>Name</label><br></br>
                        <input type="text" name="name" className="id"></input><br></br><br></br>
                        <label>Severity</label><br></br>
                        <select className="id" name="sev">
                            <option>---Please Select---</option>
                            <option>Low</option>
                            <option>High</option>
                        </select><br></br><br></br>
                        <label>Priority</label><br></br>          
                        <select className="id" name="pri"> 
                        <   option>---Please Select---</option>
                            <option >Low</option>
                            <option>High</option>
                        </select><br></br><br></br>
                        <label>Assigned Project</label> <br></br>                 
                        <input type="text" name="assign_pro" className="id"></input><br></br><br></br>
                        <label>Status</label> <br></br>                       
                        <textarea type="text" name="status" className="id"></textarea><br></br> <br></br>
                        <button className="save_but">Save</button>
                        &emsp;<button className="can_but">Canel</button>
                    </form>
                                                           
                </div>

                {/* <table border="2" className="tbl1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Severity</th>
                        <th>Priority</th>
                        <th>Assigned Project</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Severity</td>
                        <td>Priority</td>
                        <td>Assigned Project</td>
                        <td>Status</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </table> */}              
                <div className="foot">                
                {/* <label className="lbl">View Defects</label>               */}
                </div>
            </div>
        )
    }
}

