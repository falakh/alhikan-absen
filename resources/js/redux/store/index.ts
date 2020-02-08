import { userReducer } from "../reducer/UserReducer";
import { combineReducers } from "redux";
import { cabangReducer } from "../reducer/CabangReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cabang:cabangReducer
})


export type RootState = ReturnType<typeof rootReducer>

