import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import { NavBar } from "../components/NavBar";
import Dashboard from "./Dashboard";

export default function App() {
    return (
        <Router>
            <Route path="/Login">
                <LoginPage />
            </Route>
            <Route path="/dashboard" exact={false}>
                <Dashboard />
            </Route>
            <Route path="/"></Route>
        </Router>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
