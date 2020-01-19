import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import LoginPage from "./LoginPage";
import { NavBar } from "../components/NavBar";
import Dashboard from "./Dashboard";

export default function App() {
    console.log("masuk")
    return (
        <Router basename="absensi">
            <Link to="/dashboard"> dash </Link>
            <Route path="/:id"> 
                {/* <LoginPage /> */}
            </Route>
            <Route path="/Login">
                <LoginPage />
            </Route>
            <Route path="/dashboard" exact={false} render={()=> Dashboard}>
                <Dashboard />
            </Route>
            <Route exact path="/"></Route>
            
        </Router>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
