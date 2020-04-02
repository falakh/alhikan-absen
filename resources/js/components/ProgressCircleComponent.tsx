import {
    Dialog,
    DialogContent,
    CircularProgress,
    DialogContentText,
    Typography
} from "@material-ui/core";

import React from "react";

export default function Progres() {
    return (
        <Dialog open maxWidth="md" disableBackdropClick disableEscapeKeyDown>
            <DialogContent>
                <CircularProgress style={{ marginLeft: "50%" }} />
                <DialogContentText style={{ marginTop: 20 }}>
                    <Typography> Tolong Menunggu </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
