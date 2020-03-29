import clsx from "clsx";
import {
    Route} from "react-router-dom";
import {
    createStyles,
    CssBaseline,
    makeStyles,
    Theme} from "@material-ui/core";
import React from "react";
import { NavBar } from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

const drawerWidth = 240;

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            position:"relative"
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        hide: {
            display: "none"
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end"
        },
        drawerPaper: {
            width: drawerWidth
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            marginLeft: -drawerWidth,
            overscrollBehaviorY: "auto"
        },
        contentShift: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0,
            overscrollBehaviorY: "auto"
        },
        toolbar: theme.mixins.toolbar
    })
);
export default function Dashboard() {
    var cabangState = (state: RootState) => state.ui
    var uiState = useSelector(cabangState);
    const classes = useStyle();
    return (
        <div style={{ position: "relative" }} className={classes.root}>
            <CssBaseline />
            {NavBar()}
            <main
                className={clsx({
                    [classes.content]: !uiState.isDrawerOpen,
                    [classes.contentShift]: uiState.isDrawerOpen
                })}
            >
                <div className={classes.drawerHeader} />
                <Route
                    path="/dashboard/lokasi"
                    component={React.lazy(() =>
                        import(/* webpackPrefetch: true */"../components/AddLocationTable"))}
                />
                <Route
                    path="/dashboard"
                    component={React.lazy(() =>
                        import(/* webpackPrefetch: true */"../components/AbsensiDataTableComponent")
                    )}
                    exact
                />
                <Route
                    path="/dashboard/userlist"
                    component={React.lazy(() =>
                        import(/* webpackPrefetch: true */ "../components/UserListDataTableComponent")
                    )}
                />
                  <Route path="/dashboard/mobileUser"
                    component={/* webpackPrefetch: true */ React.lazy(()=>import("../components/JabatanTableList"))}
                />
            </main>
        </div>
    );
}
