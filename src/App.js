import React from 'react'
import { Contact } from './Contact'
import { Home } from './Home'
import {
    BrowserRouter as Router,
    
    Route,
    Link
  } from "react-router-dom";
import './index.css'
import { TablaComponent } from './TablaComponent';

export const App = () => {
    return (
        <Router>
            <div>
                <h1>My SPA</h1>
                <ul className = "header">
                    <li><Link to= "/">Home</Link ></li>
                    <li><Link to = "/tabla">tabla</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>

                <div className="content">
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/tabla" component={TablaComponent}></Route>
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
         </Router> 
    )
}
