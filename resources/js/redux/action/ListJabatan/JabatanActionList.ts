import { ThunkAction } from "redux-thunk"
import { RootState } from "../../store"
import { Action } from "redux"
import { GET_LOCATIONLIST_FAILED } from "../LocationListAction/CabangListActionType"
import { getAllJabatanData } from "../../../util/client"
import { GET_JABATAN_LOADNG, GetJabatanSucces, GET_JABATAN_SUCCES } from "./JabatanActionType"

export function GetAllJabatanAction(): ThunkAction<void, RootState, null, Action<string>> {
    return async dispatch => {
        try {
            dispatch({
                type: GET_JABATAN_LOADNG
            })
            var data = await getAllJabatanData()
            console.log(data)
            var hasil : GetJabatanSucces={
                payload : data,
                type:GET_JABATAN_SUCCES
            }
            dispatch(hasil)
        } catch (error) {
            dispatch({type:GET_LOCATIONLIST_FAILED})
            console.log("eror gan")
        }
    }
}
