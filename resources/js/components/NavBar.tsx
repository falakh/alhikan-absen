import React from "react";
import { makeStyles, Theme, createStyles, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {setDrawer} from "../redux/action/UIAction/UIActionLIst";

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

export function NavBar() {
    // var [openDrawer, setOpenDrawer] = React.useState(false);
    var cabangState = (state: RootState) => state.ui
    var uiState = useSelector(cabangState);
    var dispatch = useDispatch();
    var handleMenuButton = () => dispatch(setDrawer(!uiState.isDrawerOpen));
    const classes = useStyle();

   return <div>
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
                open={uiState.isDrawerOpen}
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
                    <NavLink
                        className="nav-link"
                        to="/dashboard/jabatan"
                        style={{ textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <div className="material-icons">mobile_screen_share</div>
                            </ListItemIcon>
                            <ListItemText primary="Mobile User" />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="/dashboard/mobileUser"
                        style={{ textDecoration: "none" }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <div className="material-icons">mobile_screen_share</div>
                            </ListItemIcon>
                            <ListItemText primary="Mobile User" />
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
   </div>

}
