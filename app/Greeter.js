import React, {Component} from 'react'
var config = require('./config.json');
import styles from './Greeter.css';//导入


// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
//   };
class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>//使用cssModule添加类名的方法
                {config.greetText}
            </div>
        );
    }
}

export default Greeter
