import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component{
    render(){
        return (
            <div>
                <p>Title: {this.props.title}</p>
            </div>
        )
    }
}

export default Header