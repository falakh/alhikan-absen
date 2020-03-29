import { JabatanState } from "../state/JabtanState"
import { GET_JABATAN_REFRESH, JabatanAction, GET_JABATAN_SUCCES } from "../action/ListJabatan/JabatanActionType"

var initialState : JabatanState = {
    data:[],
    isEror:false,
    isFound:false,
    isLoading:false
}
export function jabatanReducer(state = initialState,  action: JabatanAction) : JabatanState{
    console.log(action.type)
    switch (action.type) {
        case GET_JABATAN_REFRESH:
            return{
                ...state,isLoading:true,isEror:false,isFound:false
            }
        case GET_JABATAN_SUCCES:
            return {
                ...state,data:action.payload,isLoading:false,isFound:true
            }

    }
    return state;
}
