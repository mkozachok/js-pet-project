import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Home from './Home';
import Login from './Login';
import Account from './Account';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"));
