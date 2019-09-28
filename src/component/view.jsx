import React, { Component } from 'react'
import "./index.css"


export default class view extends Component {
    render() {
        return (
            <div>               
                
                <table border="2" className="tbl1 form_style">
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
                </table>
                <br></br><br></br><br></br><br></br>  
            </div>
        )
    }
}

