import UIState from "../state/UIState";
import { OPEN_DRAWER, UIActionTypes, CLOSE_DRAWER } from "../action/UIAction/UIActionType";

const initialState: UIState = {
    isDrawerOpen: false
}

export function UIReducer(state = initialState, action: UIActionTypes): UIState {

    switch (action.type) {
        case OPEN_DRAWER:
            return { ...state, isDrawerOpen: true}
        case CLOSE_DRAWER:
            return { ...state, isDrawerOpen: false }
        default:
            return state

    }


}
