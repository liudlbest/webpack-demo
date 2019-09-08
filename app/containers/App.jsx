import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <p>{this.props.children}</p>
        );
    }
}

export default App