
import React, { Suspense } from "react";

var dashboard = React.lazy(()=> import(/* webpackChunkName: "dashboard" */'./Dashboard'))

function AdminPage(){
    
    return <Suspense fallback={<div></div>}> {dashboard} </Suspense>
    
}
export default AdminPage;