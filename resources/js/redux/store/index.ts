import { userReducer } from "../reducer/UserReducer";
import { combineReducers } from "redux";
import { cabangReducer } from "../reducer/CabangReducer";
import { jabatanReducer } from "../reducer/JabtanReducer";
import {  UIReducer} from "../reducer/UIReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cabang:cabangReducer,
    ui : UIReducer,
    jabatan : jabatanReducer
})


export type RootState = ReturnType<typeof rootReducer>

