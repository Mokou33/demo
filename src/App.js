import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// import './App.css';

import Layout from "./components/layout";
import Home from "./components/home";




class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path={'/'} components={Home}></Route>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
