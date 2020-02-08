import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { Action } from "redux";
import { getAllLokasi } from "../../../util/client";
import { GET_LOCATIONLIST_LOADNG, GetCabangSucces, GET_LOCATIONLIST_SUCCES, GET_LOCATIONLIST_FAILED } from "../LocationListAction/CabangListActionType";

export function GetAllCabangAction(): ThunkAction<void, RootState, null, Action<string>> {
    return async dispatch => {
        try {
            dispatch({
                type: GET_LOCATIONLIST_LOADNG
            })
            var data = await getAllLokasi()
            console.log(data)
            var hasil : GetCabangSucces={
                payload : data,
                type:GET_LOCATIONLIST_SUCCES
            }
            dispatch(hasil)
        } catch (error) {
            dispatch({type:GET_LOCATIONLIST_FAILED})
            console.log("eror gan")
        }
    }
}
