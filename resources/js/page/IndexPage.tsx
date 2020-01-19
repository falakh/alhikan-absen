import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from './LoginPage';
import {Dashboard} from "./Dashboard";

function App() {
    return (
        <Router>
            <Route path="/Login">
                <LoginPage/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>

            <Route exact path="/"></Route>

        </Router>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<App/>, document.getElementById("example"));
}
