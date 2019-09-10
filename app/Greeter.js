import React, {Component} from 'react'
var config = require('./config.json');
import styles from './Greeter.css';//导入


// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
//   };
class Greeter extends Component{
    constructor(){
        super();
        console.log("------Greeter constructor ----");

        this.state = {
            articles: [
                {title: "React Redux Tutorial for Beginners", id: 1},
                {title: "Redux e React: cos'e Reux e come usarlocon React", id:2}
            ]
        };
    }
    render(){
        const {articles} = this.state;
        return (
            <div className={styles.root}>//使用cssModule添加类名的方法
                {config.greetText}
                <ul>
                    {articles.map(el => <li key={el.id}>{el.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default Greeter
