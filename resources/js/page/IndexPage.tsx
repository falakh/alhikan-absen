import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { UserState } from "../redux/state/UserState";
import { RootState } from "../redux/store";
import { Store } from "redux";
import {} from '../redux/action/UserAction/UserAction'
interface DispatchProps {
    toggleOn: () => void;
}

interface OwnProps {
    backgroundColor: string;
}

const mapState = (state: RootState) => {
    user: state.user;
};

type Props = DispatchProps & OwnProps;

interface MainProps {
    store: Store<RootState>;
}
var conect =  connect(mapState)(Router);

export function App(props: MainProps) {
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
                    component={React.lazy(() => import("./Dashboard"))}
                />
                <Route exact path="/"></Route>
            </Suspense>
        </Router>
    );
}
