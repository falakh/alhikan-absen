import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    const loginPage = React.lazy(() => import("./LoginPage"));
    const dashboard = React.lazy(() => import("./AdminPage"));

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/login" component={loginPage} />
                <Route path="/dashboard" component={dashboard} />
                <Route exact path="/"></Route>
            </Suspense>
        </Router>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
