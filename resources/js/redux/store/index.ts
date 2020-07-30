import { userReducer } from "../reducer/UserReducer";
import { combineReducers } from "redux";
import { cabangReducer } from "../reducer/CabangReducer";
import { jabatanReducer } from "../reducer/JabtanReducer";
import {  UIReducer} from "../reducer/UIReducer";
import { mobileReducer } from "../reducer/MobileUserReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cabang:cabangReducer,
    ui : UIReducer,
    jabatan : jabatanReducer,
    mobileUser : mobileReducer
})


export type RootState = ReturnType<typeof rootReducer>

