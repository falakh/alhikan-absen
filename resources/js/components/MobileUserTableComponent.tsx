import React, { useEffect } from "react";
import { MobileUserResponse } from "../type/MobileUserResponse";
import MaterialTable from "material-table";
import { Button, CircularProgress, Icon } from "@material-ui/core";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { GetAllMobileUserAction } from "../redux/action/MobileUser/MobileUSerActionList";

export default function MobileUserTable() {
    var mobileUserUiState = (state : RootState)=> state.mobileUser;
    var redux = useSelector(mobileUserUiState)
    var dispatch = useDispatch();
    useEffect(()=>{
        if(!redux.isfound){
            dispatch(GetAllMobileUserAction())
            console.log("test")

        }
    })
    if(redux.isfound){
        return MobileUserUi(redux.data as MobileUserResponse[])
    }
    if(redux.isLoading){
        return  <CircularProgress style={{ marginLeft: "50%" }} />

    //    return Progress()
    }
    return <div> ini tabel</div>;
}

/**
  {
        "id": 1,
        "deviceId": "3",
        "user_id": 1,
        "created_at": "2020-01-26 03:53:26",
        "updated_at": "2020-01-26 03:53:26",
        "email": "falakh@mail.com",
        "password": "fahmi134679",
        "name": "zul",
        "nidn": "16515161",
        "alamat": "123123",
        "status": "mahasiswa"
    }
 */
export function MobileUserUi(data : MobileUserResponse[]){
    var dispatch = useDispatch()
    return <MaterialTable
    title="Mobile User"
    actions={
        [
                {
                    icon: "add",
                    tooltip: "Add User",
                    isFreeAction: true,
                    onClick:()=> dispatch(GetAllMobileUserAction())

                }
        ]
    }
    data={data} columns={
        [
            {
                field:"id",
                title:"idLogin"
            },{
                field:"deviceId",
                title:"id perangkat"
            },{
                field:"nidn",
                title:"nidn"
            },{
                field:"name",
                title:"nama"
            },{
                field:"status",
                title:"status"
            },{
                title:"detail",
                render:(props)=> <Button>Detail </Button>
            }
        ]
    }/>
}
