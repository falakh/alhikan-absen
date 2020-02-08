import { Cabang } from "../../type/Cabang";

export interface CabangState{
    isLoading : boolean,
    isEror: boolean,
    data: Cabang[],
    isFound:boolean
}
