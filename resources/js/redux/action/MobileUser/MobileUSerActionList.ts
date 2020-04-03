import { ThunkAction } from "redux-thunk"
import { RootState } from "../../store"
import { Action } from "redux"
import { LOADING as GET_MOBILE_USER_LOADING, MOBILE_USER_FOUND, GET_MOBILE_USER_EROR } from "./MobileUserActionType"
import { getAllMobileUser } from "../../../util/client"
import { GET_LOCATIONLIST_FAILED } from "../LocationListAction/CabangListActionType"
import { MobileUserResponse } from "../../../type/MobileUserResponse"

export function GetAllMobileUSer(): ThunkAction<void, RootState, null, Action<string>> {
    return async dispatch => {
        try {
            dispatch({
                type: GET_MOBILE_USER_LOADING
            })
            var requestGetAllMobileUser = await getAllMobileUser()
            dispatch({
                type : MOBILE_USER_FOUND,
                payload : requestGetAllMobileUser.data as MobileUserResponse[]
            })
        } catch (error) {
            dispatch({type:GET_MOBILE_USER_EROR,payload:error as Error})
        }
    }
}
