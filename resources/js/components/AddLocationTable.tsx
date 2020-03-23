import React, { useState, useEffect } from "react";
import {
    Button,
    CircularProgress,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TableCell,
    TextField,
    Theme,
    withStyles,
    InputAdornment,
    Typography
} from "@material-ui/core";
import { getAllLokasi, addLokasi } from "../util/client";
import { useAsync } from "react-async";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { GetAllCabangAction } from "../redux/action/LocationListAction/CabangListAction";

export default function LocationTable() {
    // const { data, error, isLoading } = useAsync({ promiseFn: getAllLokasi });
    var [isEdit, setEdit] = useState(false);
    var cabangState = (state: RootState) => state.cabang;
    var cabang = useSelector(cabangState);
    var dispatch = useDispatch();
    useEffect(() => {
        if (!cabang.isFound) {
            dispatch(GetAllCabangAction());
        }
    });
    return (
        <div>
            {cabang.isLoading && (
                <Dialog open maxWidth="md" disableBackdropClick disableEscapeKeyDown>
                    <DialogContent>
                        <CircularProgress style={{marginLeft:"50%"}}/>
                        <DialogContentText  style={{marginTop:20}}>
                            <Typography> Tolong Menunggu </Typography>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            )}
            {DialogEdit(isEdit, () => setEdit(false))}
            <MaterialTable
                options={{
                    search: false,
                    emptyRowsWhenPaging: false,
                    pageSizeOptions: []
                }}
                actions={[
                    {
                        icon: "add",
                        tooltip: "Add User",
                        isFreeAction: true,
                        onClick: event => setEdit(true)
                    }
                ]}
                title={"Lokasi"}
                columns={[
                    { title: "Name", field: "name" },
                    { title: "Alamat", field: "addres" },
                    { title: "latitude", field: "latitude" },
                    { title: "longitude", field: "longitude" }
                ]}
                data={cabang.data}
            />
        </div>
    );
}

function getLocation(succesCallback: PositionCallback) {
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                succesCallback(position);
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log("Permission Denied");
                        break;
                    case 2:
                        console.log("Position Unavailable");
                        break;
                    case 3:
                        console.log("Timeout");
                        break;
                }
            }
        );
    }
}

function DialogEdit(show: boolean, onClose: any) {
    var [nama, setName] = React.useState("");
    var [alamat, setAlamat] = React.useState("");
    var [latitude, setLatitude] = React.useState(0.0);
    var [longitude, setLongitude] = React.useState(0.0);
    var [radius, setRadius] = React.useState("0.0");

    return (
        <Dialog
            fullScreen={false}
            open={show}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Use Google's location service?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        label="Nama"
                        placeholder="Nama"
                        value={nama}
                        onChange={event => setName(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        value={alamat}
                        label="Alamat"
                        placeholder="Alamat"
                        onChange={event => setAlamat(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        value={radius}
                        label="Radius"
                        placeholder="Radius"
                        onChange={event => setRadius(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        placeholder={"Koordinat"}
                        fullWidth
                        disabled
                        value={latitude + " , " + longitude}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        onClick={event =>
                                            getLocation(position => {
                                                setLongitude(
                                                    position.coords.longitude
                                                );
                                                setLatitude(
                                                    position.coords.latitude
                                                );
                                            })
                                        }
                                    >
                                        Get Lokasi
                                    </Button>
                                </InputAdornment>
                            )
                        }}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus color="primary">
                    Cancel
                </Button>
                <Button
                    color="primary"
                    autoFocus
                    onClick={event => {
                        addLokasi({
                            addres: alamat,
                            latitude: latitude,
                            longitude: longitude,
                            created_at: "",
                            id: 0,
                            name: nama,
                            radius: (radius as unknown) as number,
                            updated_at: ""
                        }).then(hasil => {
                            window.location.reload();
                        });
                    }}
                >
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
}
