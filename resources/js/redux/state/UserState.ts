import { User } from "../../type/User";

export interface UserState{
    isLogin : boolean | false,
    isAdmin : boolean | false,
    isLoading : boolean | false,
    isEror : boolean | false,
    data : User | null
}
