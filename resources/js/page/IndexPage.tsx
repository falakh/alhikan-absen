import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

const loginPage = React.lazy(()=> import(/* webpackPrefetch: true */"./LoginPage"));
const dashboard = React.lazy(()=> import(/* webpackPrefetch: true */"./Dashboard"));
function App() {
    return (
        <Router>
            <Route path="/Login" render={()=>loginPage}>
            </Route>
            <Route path="/dashboard" render={()=>dashboard}/>
            <Route exact path="/"></Route>

        </Router>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<App/>, document.getElementById("example"));
}
