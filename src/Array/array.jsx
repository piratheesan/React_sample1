import React, { Component } from 'react'


export default class array extends Component {
    render() {
        
            const users= ["kajan","thanu","Ajanan"];
            const x="Hi";
            const listItems = users.map(user =><li>{user}</li>);
            return (           
            <div>                    
                <ul>{listItems}</ul>
                {x}
            </div>
            )
            
        
    }
}