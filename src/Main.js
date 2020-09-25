import React, { Component } from "react";

import {Route,NavLink,HashRouter} from "react-router-dom";
import Search from './components/search';
import Click from './components/click';
import Toggle from './components/toggle';

export default class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Links</h1>
                <ul className="header">
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/click">Click</NavLink></li>
                    <li><NavLink to="/toggle">Toggle</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/search" component={Search}/>
                    <Route path="/click" component={Click}/>
                    <Route path="/toggle" component={Toggle}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}