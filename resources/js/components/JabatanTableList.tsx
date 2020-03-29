import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { GetAllJabatanAction } from "../redux/action/ListJabatan/JabatanActionList";
import {
    Dialog,
    DialogContent,
    CircularProgress,
    DialogContentText,
    Typography
} from "@material-ui/core";

export default function JabatanDataTable() {
    var cabangState = (state: RootState) => state.jabatan;

    var state = useSelector(cabangState);
    var dispatch = useDispatch();
    useEffect(() => {
        if (!state.isFound) {
            dispatch(GetAllJabatanAction());
        }
    });

    if (state.isLoading) {
        console.log("loading");
        return Progres();
    }

    return <div> {DataTableJabatan(state)} </div>;
}

//     {
//         "id": 1,
//         "created_at": "2020-02-09 12:08:11",
//         "updated_at": "2020-03-23 02:18:01",
//         "jabtan": "rumah",
//         "jamMasuk": "08:00:00",
//         "jamPulang": "14:00:00",
//         "toleransiDatang": "00:00:12",
//         "toleransiPulang": "02:00:01"
//     }
// ]

function DataTableJabatan(
    state: import("../redux/state/JabtanState").JabatanState
) {
    return (
        <MaterialTable
            title="Data Jabatan"
            columns={[
                { title: "jabatan", field: "jabtan" },
                {
                    title: "Jam Masuk",
                    field: "jamMasuk"
                },
                {
                    title:"Jam Pulang",
                    field:"jamPulang"
                },
                {
                    title:"Toleransi Keterlambatan ",
                    field:"toleransiDatang"
                },{
                    title:"Toleransi Pulang ",
                    field:"toleransiPulang"
                }
            ]}
            data={state.data}
        />
    );
}

function Progres() {
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
