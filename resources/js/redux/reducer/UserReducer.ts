import { UserState } from "../state/UserState";
import { UserActionTypes, USER_LOGIN, LOGIN_SUCCES, LOGIN_FAILED, LOGIN_LOADING } from "../action/UserAction/UserActionType";
import { User } from "../../type/User";
const initialState: UserState = {
    data: null,
    isAdmin: false,
    isLogin: false,
    isEror: false,
    isLoading: false,
};

export function userReducer(state = initialState,  action: UserActionTypes): UserState {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                data: null,
                isAdmin: false,
                isEror: false,
                isLoading: true,
                isLogin: false,
            }
        case LOGIN_SUCCES:
            return {
                data: action.payload,
                isAdmin: false,
                isEror: false,
                isLoading: false,
                isLogin: true,
            }
        case LOGIN_FAILED:
            return{
                data: null,
                isAdmin: false,
                isEror: false,
                isLoading: true,
                isLogin: true,
            }
        default:
            return state
    }
}
