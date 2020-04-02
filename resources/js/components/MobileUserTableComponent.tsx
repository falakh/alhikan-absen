import React from "react";
import { MobileUserResponse } from "../type/MobileUserResponse";
import { useAsync } from "react-async";
import { getAllMobileUser } from "../util/client";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import Progress from "../components/ProgressCircleComponent";

export default function MobileUserTable() {
    var [mobileUserList, setMobileUserList] = React.useState<MobileUserResponse[]>([]);
    const { data, error, isLoading } = useAsync({ promiseFn: getAllMobileUser });
    if(data){
        return MobileUserUi(data.data as MobileUserResponse[])
    }
    if(isLoading){
       return Progress()
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
    return <MaterialTable
    title="Mobile User"
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
