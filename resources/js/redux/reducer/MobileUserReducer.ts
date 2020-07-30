import { MobileUserState } from "../state/MobileUserState";
import { MobileUserActionType, GET_MOBILE_USER, MOBILE_USER_FOUND, LOADING } from "../action/MobileUser/MobileUserActionType";

var initialState: MobileUserState = {
    isLoading: false,
    data: [],
    isfound: false
}

export function mobileReducer(state = initialState,  action: MobileUserActionType) : MobileUserState{
    console.log(action.type)

    switch (action.type) {
        case LOADING:
            return {
                ...state,isLoading:true,
            }
        case GET_MOBILE_USER:
            return{
                ...state,isLoading:true,isfound:false
            }
        case MOBILE_USER_FOUND:
            return {
                ...state,data:action.payload,isLoading:true,isfound:true
            }

    }
    return state;
}
