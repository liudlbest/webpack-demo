import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import App from '../containers/App'
import List from '../containers/List'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import Hello from '../containers/Hello'

class RouteMap extends React.Component{
    updateHandle(){
        console.log("每次router变化之后都会触发")
    }
    render(){
        return(
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                {/* <Route  path='/' component={App}>
                    <Route exact component={Home}/>
                    <Route path='/list' component={List}/>
                    <Route component={NotFound}/>
                </Route> */}
                <div>
                    <ul>
                        <li><Link to="/">Hello</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/list">List</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" component={App}>
                            <Route exact path="/home" component={Home}/>
                            <Route path="/list" component={List}/>
                            <Route path="/*" component={NotFound}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouteMap
