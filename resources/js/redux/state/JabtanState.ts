import { Jabatan } from "../../type/Jabatan";

export interface JabatanState{
    isLoading : boolean,
    isEror: boolean,
    data: Jabatan[],
    isFound:boolean
}
