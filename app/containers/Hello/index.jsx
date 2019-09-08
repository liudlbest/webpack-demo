import React from 'react';
import {render} from 'react-dom';
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'
import '../../main.css';
import Header from '../../components/Header/index';


class Hello extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            //显示当前时间
            now: Date.now()
        }
    }
    render(){
        const arr = ['a','b','c'];
        const isShow = true;
        //return 里面写jsx语法
        return (
            <div>
                <Header title="Hello page"/>
	            <p onClick={this.clickHandler.bind(this)}>Hello world.</p>

                {/*loop*/}
                {arr.map((item,index) => {
                    return <p key={index}>this is{item}</p>
                })}

                {/* determine */}
                <p>part 1</p>
                {
                    isShow ? <p>display</p> : <p>not display</p>
                }
                <p style={{display:isShow?'block':'none'}}>Hello</p>
                <p>hello world {this.state.now}</p>
                <hr/>
                <Carousel/>
                <Recommend/>
                <List/>
                <hr/>
                <p>router</p>
                
            </div>
        )
    }

    clickHandler(e){
        //e即js中的事件对象，例如e.preventDefault()
        //函数执行时this即组件本身，因为上面的.bind(this)
        // console.log(Date.now())
        this.setState({
            now: Date.now()
        })
    }
}

export default Hello

