import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { RootState } from "../redux/store";
import { Store } from "redux";
import {} from '../redux/action/UserAction/UserAction'




interface MainProps {
    store: Store<RootState>;
}
export default function App(props: MainProps) {
    return (
        <Provider store={props.store}>
        <RouterComponent />
        </Provider>
    );
}

function RouterComponent() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Route
                    path="/login"
                    component={React.lazy(() => import("./LoginPage"))}
                />
                <Route
                    path="/dashboard"
                    component={React.lazy(() => import(/* webpackChunkName: "dashboard" */"./Dashboard"))}
                />

                <Route exact path="/"></Route>
            </Suspense>
        </Router>
    );
}
