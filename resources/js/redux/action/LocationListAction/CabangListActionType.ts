import { Cabang } from "../../../type/Cabang";

export const GET_LOCATIONLIST_REFRESH = "GET_LOCATIONLIST_REFRESH";
export const GET_LOCATIONLIST_SUCCES = "GET_LOCATIONLIST_SUCCES";
export const GET_LOCATIONLIST_FAILED = "GET_LOCATIONLIST_FAILED";
export const GET_LOCATIONLIST_LOADNG = "GET_LOCATIONLIST_LOADNG";


export interface GetCabangActionRefresh {
    type: typeof GET_LOCATIONLIST_REFRESH,
}

export interface GetCabangSucces {
    type: typeof GET_LOCATIONLIST_SUCCES,
    payload: Cabang[]
}

export interface GetCabangFailed {
    type: typeof GET_LOCATIONLIST_FAILED,
    payload: string
}

export interface GetCabangLoading {
    type: typeof GET_LOCATIONLIST_LOADNG,
    payload: string
}

export  type CabangAction = GetCabangLoading | GetCabangFailed|GetCabangSucces|GetCabangActionRefresh
