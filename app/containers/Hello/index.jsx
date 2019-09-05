import React from 'react';
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './List'

class Hello extends React.Component{
    render(){
        return (
            <div>
	        <p>hello world</p>
		<hr/>
		<Carousel/>
		<Recommend/>
		<List/>
            </div>
        )
    }
}

export default Hello
