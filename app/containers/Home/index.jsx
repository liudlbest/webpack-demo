import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component{
    render(){
        return(
            <div>
                <p>This is Home</p>
                <Link to="/list">To List</Link>
            </div>
        )
    }
}

export default Home