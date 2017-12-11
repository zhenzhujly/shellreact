import React, { Component } from 'react';
import Index from './router/index/index';


class App extends Component {
    render() {
        const myStyle = {
            width:'100%',
            height:'100%',
            backgroundColor:'#ccc'
        };
        return (
            <div style={myStyle}>
              <Index/>
            </div>
        );
    }
}

export default App;
