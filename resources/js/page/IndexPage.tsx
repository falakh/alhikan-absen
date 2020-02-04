import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/login" component={React.lazy(() => import("./LoginPage"))} />
                <Route path="/dashboard" component= {React.lazy(() => import("./Dashboard"))} />
                <Route exact path="/"></Route>
            </Suspense>
        </Router>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
