import React, { Component } from 'react'


class App extends Component {
    render() {

        return <Greet greeting="Hello"/>
            
        
    }
}
class Greet extends Component {
    render() {

        return <h2>{this.props.greeting} Pirathee</h2>
            
        
    }
}

export default App;