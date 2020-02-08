import { CabangState } from "../state/CabangState";
import { CabangAction, GET_LOCATIONLIST_SUCCES, GET_LOCATIONLIST_FAILED, GET_LOCATIONLIST_LOADNG, GET_LOCATIONLIST_REFRESH } from "../action/LocationListAction/CabangListActionType";

const initialState : CabangState = {
        data:[],
        isEror:false,
        isLoading:false,
        isFound:false,
}
export function cabangReducer(state = initialState,  action: CabangAction) : CabangState{
    console.log(action.type)
    switch (action.type) {
        case GET_LOCATIONLIST_REFRESH:
            return{
                ...state,isLoading:true,isEror:false,isFound:true
            }
        case GET_LOCATIONLIST_SUCCES:
            return {
                ...state,data:action.payload,isLoading:false,isFound:true
            }
        case GET_LOCATIONLIST_FAILED:
            return{
                ...state,isEror:true,isLoading:false,isFound:true
            }
        case GET_LOCATIONLIST_LOADNG:
            return{
                ...state,isLoading:true,isEror:false,isFound:true
            }
    }
    return state;
}
