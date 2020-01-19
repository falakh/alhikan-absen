import React from "react";
import {Container, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer} from "@material-ui/core";
import {CalendarToday} from "@material-ui/icons";

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

export function NavBar() {
    const classes = useStyles();
    const [toogleState, setToogle] = React.useState({
        open: true
    });
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setToogle({ ...toogleState, open });
    };
    return (
        <Container maxWidth="md">
            <SwipeableDrawer
                // className={classes.list}
                anchor="left"
                open={toogleState.open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List>
                    <ListItem button key="Kehadiran">
                        <ListItemIcon>
                            <CalendarToday />
                        </ListItemIcon>
                        <ListItemText primary="Kehadiran" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </Container>
    );
}
