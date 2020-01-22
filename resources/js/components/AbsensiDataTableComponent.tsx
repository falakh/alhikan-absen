import React,{useState} from "react";
import {AttedanceUser} from "../type/TypeList";
import MaterialTable from "material-table";
import Axios from "axios";
import {useAsync} from "react-async";
import {getAllAbsensi, getAllLokasi} from "../util/client";
import {CircularProgress} from "@material-ui/core";

export function  AbsensiDataTableComponent(){

    var [dataAbsensi,setDataAbsensi] = useState<AttedanceUser[]>([]);
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
    return <MaterialTable
            columns={[
            { title: 'Name', field: 'name' },
            { title: 'tanggal', field: 'created_at' },
            {tittle: 'cabang',field:'cabang'}

        ]}
         data={dataAbsensi}/>;
}
