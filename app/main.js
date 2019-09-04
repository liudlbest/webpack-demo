//main.js 
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';

import Greeter from './Greeter';

import './main.css'; 
import styles from './Greeter.css';//导入

// render(<Greeter/>, document.getElementById('root'));

//定义组件
class Hello extends React.Component{
    render(){
        //return 里面写jsx语法
        return (
            <div className={styles.root}>
                <p onClick={this.clickHandler.bind(this)}>Hello world.</p>
            </div>
        )
    }

    clickHandler(e){
        //e即js中的事件对象，例如e.preventDefault()
        //函数执行时this即组件本身，因为上面的.bind(this)
        console.log(Date.now())
    }
}

render(<Hello/>, document.getElementById('root'));