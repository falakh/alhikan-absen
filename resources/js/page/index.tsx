import ReactDOM from "react-dom";
import React from "react";
import {  createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redux/store";
// import { App } from "./IndexPage";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

var data = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ))

if (document.getElementById("example")) {
    const OtherComponent = React.lazy(() => import(/* webpackChunkName: "dynamically-imported-component" */'../page/IndexPage'));

    ReactDOM.render(<React.Suspense fallback={<div></div>}>
<OtherComponent store = {data}/>
    </React.Suspense>, document.getElementById("example"));
}
