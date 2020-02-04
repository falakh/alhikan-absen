import clsx from "clsx";
import {
    Link,
    Route,
    useRouteMatch,
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import {
    AppBar,
    createStyles,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import React from "react";

const drawerWidth = 240;

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
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
    var [openDrawer, setOpenDrawer] = React.useState(false);

    var handleMenuButton = () => setOpenDrawer(!openDrawer);
    const classes = useStyle();
    console.log("test");
    return (
        <div style={{ position: "relative" }} className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        about="Menu"
                        onClick={handleMenuButton}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <div className="material-icons">menu</div>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Sistem Kehadiran
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                open={openDrawer}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <NavLink
                        to="/dashboard"
                        className="nav-link"
                        style={{ textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <div className="material-icons">today</div>
                            </ListItemIcon>
                            <ListItemText primary="Kehadiran" />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="/dashboard/lokasi"
                        style={{ textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <div className="material-icons">pin_drop</div>
                            </ListItemIcon>
                            <ListItemText primary="Lokasi" />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="/dashboard/userList"
                        style={{ textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <div className="material-icons">person</div>
                            </ListItemIcon>
                            <ListItemText primary="UserList" />
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
            <main
                className={clsx({
                    [classes.content]: !openDrawer,
                    [classes.contentShift]: openDrawer
                })}
            >
                <div className={classes.drawerHeader} />
                <Route
                    path="/dashboard/lokasi"
                    component={React.lazy(() =>
                        import("../components/AddLocationTable")
                    )}
                ></Route>
                <Route
                    path="/dashboard"
                    component={React.lazy(() =>
                        import("../components/AbsensiDataTableComponent")
                    )}
                    exact
                />
                <Route
                    path="/dashboard/userlist"
                    component={React.lazy(() =>
                        import(/* webpackPrefetch: true */ "../components/UserListDataTableComponent")
                    )}
                />
            </main>
        </div>
    );
}
