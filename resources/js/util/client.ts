import Axios from "axios";
import { LoginInput } from "../type/LoginInput";
import { AttedanceUser } from "../type/AttedanceUser";
import { LoginEvent } from "../type/LoginEvent";
import { Cabang } from "../type/Cabang";
import { Jabatan } from "../type/Jabatan";

export async function getAllMobileUser(){
    return Axios.get('/api/allMobileUser')
}

export async function Login(loginInput : LoginInput,loginEvent? : LoginEvent){
    try{
        var hasil = await loginRequestOnly(loginInput)
        loginEvent?.OnSucces(hasil.data)
    }catch(eror){
        console.log(eror);
        loginEvent?.OnEror(eror)
    }
}

export async function loginRequestOnly(loginInput : LoginInput){
    return await Axios.post("/api/login",loginInput)
}

export async function getAllJabatanData(){
    return await (await Axios.get("/api/getAllJabatan")).data as Jabatan[]
}

export async function getAllLokasi(){
    var hasil = await Axios.post("/api/getAllCabang");
    return <Cabang[]>hasil.data as Cabang[];
}

export async function getAllAbsensi() {
    var hasil = await Axios.get("/api/getAllAbsen")
    return <AttedanceUser[]>hasil.data as AttedanceUser[];
}

export async function addLokasi(cabang : Cabang) {
    return Axios.post("/api/addCabang",{
        "latitude":cabang.latitude,
        "longitude":cabang.longitude,
        "name": cabang.name,
        "radius":cabang.radius,
        "addres":cabang.addres
    })
}

export async function getAllUser(){
    return Axios.get('/api/getAllUser');
}
