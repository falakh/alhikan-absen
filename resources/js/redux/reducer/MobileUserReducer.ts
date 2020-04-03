import { MobileUserState } from "../state/MobileUserState";
import { MobileUserActionType, GET_MOBILE_USER, MOBILE_USER_FOUND } from "../action/MobileUser/MobileUserActionType";

var initialState: MobileUserState = {
    isLoading: false,
    data: [],
    isfound: false
}

export function jabatanReducer(state = initialState,  action: MobileUserActionType) : MobileUserState{
    console.log(action.type)
    switch (action.type) {
        case GET_MOBILE_USER:
            return{
                ...state,isLoading:true,isfound:false
            }
        case MOBILE_USER_FOUND:
            return {
                ...state,data:action.payload,isLoading:false
            }

    }
    return state;
}
