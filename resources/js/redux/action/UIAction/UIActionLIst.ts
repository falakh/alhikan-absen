import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { Action } from "redux";
import { getAllLokasi } from "../../../util/client";
import { OPEN_DRAWER, CLOSE_DRAWER } from "./UIActionType";

export function setDrawer(isOpen : boolean): ThunkAction<void, RootState, null, Action<string>> {
    return async dispatch => {
        if(isOpen){
            dispatch({
                type: OPEN_DRAWER,
            })
        }else{
            dispatch({
                type: CLOSE_DRAWER,
            })
        }


}
}
