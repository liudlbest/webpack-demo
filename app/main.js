import React from 'react';
import {render} from 'react-dom';
import Hello from './containers/Hello/index';
// import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
// import Home from './containers/Home'
// import List from './containers/List'
// import NotFound from './containers/NotFound'
import RouteMap from './router/routeMap'
import {hashHistory} from 'react-router'

// const routing = (
//     <Router>
        // <div>
        //     <ul>
        //         <li>
        //             <Link to="/">Hello</Link>
        //         </li>
        //         <li><Link to="/home">Home</Link></li>
        //         <li><Link to="/list">List</Link></li>
        //     </ul>
        //     <Switch>
        //         <Route exact path="/" component={Hello}/>
        //         <Route path="/home" component={Home}/>
        //         <Route path="/list" component={List}/>
        //         <Route component={NotFound}/>
        //     </Switch>
        // </div>
//     </Router>
// )

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)