import { Cabang } from "../../../type/Cabang";
import { Jabatan } from "../../../type/Jabatan";

export const GET_JABATAN_REFRESH = "GET_JABATAN_REFRESH";
export const GET_JABATAN_SUCCES = "GET_LOCATIONLIST_SUCCES";
export const GET_LOCATIONLIST_FAILED = "GET_LOCATIONLIST_FAILED";
export const GET_JABATAN_LOADNG = "GET_JABATAN_LOADNG";


export interface GetJabtanRefresh {
    type: typeof GET_JABATAN_REFRESH,
}
export interface GetJabatanLoading {
    type: typeof GET_JABATAN_LOADNG,
}
export interface GetJabatanSucces {
    type: typeof GET_JABATAN_SUCCES,
    payload: Jabatan[]
}




export  type JabatanAction = GetJabtanRefresh | GetJabatanLoading | GetJabatanSucces
