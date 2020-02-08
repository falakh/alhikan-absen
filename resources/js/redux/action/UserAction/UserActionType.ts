import { User } from "../../../type/User";

export const USER_LOGIN = "USER_LOGIN";
export const LOGIN_SUCCES = "USER_LOGIN_SUCCES";
export const LOGIN_FAILED = "USER_LOGIN_FAILED";
export const LOGIN_LOADING = "USER_LOGIN_LOADING";


export interface UserLoginAction {
    type: typeof USER_LOGIN
    payload: User
}

export interface UserLoginSucces  {
    type: typeof LOGIN_SUCCES,
    payload: User
}

export interface UserLoginFailed  {
    type: typeof LOGIN_FAILED,
    payload: User | null
}

export interface UserLoginLoading  {
    type: typeof LOGIN_LOADING,
    payload: User | null
}

export type UserActionTypes = UserLoginAction | UserLoginFailed | UserLoginSucces | UserLoginLoading
