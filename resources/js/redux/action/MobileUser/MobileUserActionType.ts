import { MobileUserResponse } from "../../../type/MobileUserResponse"

export const  GET_MOBILE_USER = "GET_MOBLE_USER"
export const UPDATE_USER = "UPDATE_USER"
export const LOADING = "LOADING"
export const MOBILE_USER_FOUND = "MOBILE_USER_FOUND"
export const GET_MOBILE_USER_EROR = "GET_MOBILE_USER_EROR"

export interface GetMobileUserRefresh {
    type: typeof GET_MOBILE_USER,
}

export interface StartLoading {
    type: typeof LOADING,
}

export interface MobileUserFound{
    type : typeof MOBILE_USER_FOUND,
    payload: MobileUserResponse[]
}

export interface updateUser{
    type : typeof UPDATE_USER,
    payload: MobileUserResponse
}

export interface GET_MOBILE_USER_EROR{
    type : typeof GET_MOBILE_USER_EROR,
    payload: Error
}

export type MobileUserActionType = updateUser | GetMobileUserRefresh | GET_MOBILE_USER_EROR | MobileUserFound | StartLoading
