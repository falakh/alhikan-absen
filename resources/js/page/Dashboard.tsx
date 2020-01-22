import clsx  from "clsx";
import {Link, Route, useRouteMatch} from "react-router-dom";
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
} from '@material-ui/core';
import {LocationTable} from "../components/AddLocationTable";
import React from "react";
import {CalendarToday, Menu, PinDrop,Person} from "../../../node_modules/@material-ui/icons/index";
import {AbsensiDataTableComponent} from "../components/AbsensiDataTableComponent";

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
            marginLeft: -drawerWidth
        },
        contentShift: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        },
        toolbar: theme.mixins.toolbar
    })
);

export function Dashboard() {
    var [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    var handleMenuButton = () => setOpenDrawer(!openDrawer);
    const classes = useStyle();
    return (
        <div className={classes.root}>
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
                        <Menu />
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
                    <Link to="/dashboard">
                        <ListItem button>
                            <ListItemIcon>
                                <CalendarToday />
                            </ListItemIcon>
                            <ListItemText primary="Kehadiran" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/lokasi" >
                        <ListItem button>
                            <ListItemIcon>
                                <PinDrop />
                            </ListItemIcon>
                            <ListItemText primary="Lokasi" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/userList" >
                        <ListItem button>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="UserList" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <main
                className={clsx({
                    [classes.content]: !openDrawer,
                    [classes.contentShift]: openDrawer
                })}
            >
                <div className={classes.drawerHeader} />
                <Route path="/dashboard/lokasi">
                    <LocationTable />
                </Route>
                <Route path="/dashboard" exact>
                    <AbsensiDataTableComponent/>
                </Route>
            </main>
        </div>
    );
}
