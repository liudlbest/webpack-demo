//main.js 
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';

import Greeter from './Greeter';

import './main.css'; 

// render(<Greeter/>, document.getElementById('root'));

//定义组件
class Hello extends React.Component{
    render(){
        //return 里面写jsx语法
        return (
            <p>Hello world.</p>
        )
    }
}

render(<Hello/>, document.getElementById('root'));