import React from "react";
import MaterialTable from "material-table";
import { User } from "../type/User";
import { getAllUser } from "../util/client";
import { useAsync } from "react-async";
import { CircularProgress } from "@material-ui/core";

export default function UserListDataTableComponent() {
    const { data, error, isLoading } = useAsync({ promiseFn: getAllUser });

    if(isLoading){
        return <CircularProgress style={{marginTop:"20%",marginLeft:"50%"}}/>

    }
    return (
        <MaterialTable
        options={{
            search: false,
            emptyRowsWhenPaging: false,
            pageSizeOptions: []
        }}
        title={"User List"}
        columns={[
            { title: "Name", field: "name" },
            { title: "email", field: "email" },
            { title: "id", field: "nidn" },
            { title: "alamat", field: "alamat" },
            { title: "status", field: "status" }
        ]}
        data={data?.data as User[]}
    />
    );
}
