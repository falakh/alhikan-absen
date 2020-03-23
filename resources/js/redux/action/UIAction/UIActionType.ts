
export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";



export interface OPEN_DRAWER {
    type: typeof OPEN_DRAWER,
}
export interface CLOSE_DRAWER {
    type: typeof CLOSE_DRAWER,
}



export  type UIActionTypes = OPEN_DRAWER | CLOSE_DRAWER
