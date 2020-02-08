import { UserActionTypes, LOGIN_LOADING, LOGIN_SUCCES, UserLoginSucces, UserLoginFailed, LOGIN_FAILED } from "../UserAction/UserActionType";
import { LoginInput } from "../../../type/LoginInput";
import { User } from "../../../type/User";
import { ThunkAction } from "redux-thunk";
import { LoginRequestOnly } from "../../../util/client";
import { RootState } from "../../store";
import { Action } from "redux";

export const userLogin = (
    user: LoginInput
): ThunkAction<void, RootState, null, Action<string>> => {
        return async (dispatch) => {
            try {
                dispatch(UserAwait());
                const asyncResp = await LoginRequestOnly(user);
                var hasil: UserLoginSucces = {
                    payload: asyncResp.data as User,
                    type: LOGIN_SUCCES
                };
                dispatch(hasil);
            }
            catch {
                var error: UserLoginFailed = {
                    payload: null,
                    type: LOGIN_FAILED
                };
                dispatch(error);
            }
        };
    }

function UserAwait(): UserActionTypes {
    return {
        type: LOGIN_LOADING,
        payload: null
    }
}




