import { MobileUserResponse } from "../../type/MobileUserResponse";

export interface MobileUserState{
    isLoading : boolean,
    isfound:boolean,
    data: MobileUserResponse[]

}
