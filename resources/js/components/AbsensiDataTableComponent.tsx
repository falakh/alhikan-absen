import React,{useState} from "react";
import {AttedanceUser} from "../type/TypeList";
import MaterialTable from "material-table";
import {useAsync} from "react-async";
import {getAllAbsensi, getAllLokasi} from "../util/client";
import {Button, CircularProgress, Dialog, DialogActions} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function  AbsensiDataTableComponent(){

    var [dataAbsensi,setDataAbsensi] = useState<AttedanceUser[]>([]);
    var [dialogShown,setDialogShow] = useState(false);
    const {data, error, isLoading} = useAsync({promiseFn: getAllAbsensi})
    if (isLoading) {
        return (
            <CircularProgress style={{marginTop:"20%",marginLeft:"50%"}}/>
        )
    }

    if(error){
        return (<div> ini err </div>)
    }

    if(data){
        dataAbsensi = data;
    }
    return <div>
        {DialogEdit(dialogShown)}
        <MaterialTable
        options={
            {
                search:false,
                emptyRowsWhenPaging:false,
                pageSizeOptions:[]
            }
        }

            columns={[
            { title: 'Name', field: 'name' },
            { title: 'tanggal', field: 'created_at' },
            {title: 'cabang',field:'cabang'}

        ]}

         data={dataAbsensi}/>
         </div>;
}

function DialogEdit(show: boolean) {
    return <Dialog
        fullScreen={false}
        open={show}
        aria-labelledby="responsive-dialog-title"
    >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button autoFocus  color="primary">
                Disagree
            </Button>
            <Button  color="primary" autoFocus>
                Agree
            </Button>
        </DialogActions>
    </Dialog>
}