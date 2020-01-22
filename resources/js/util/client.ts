import Axios from "axios";
import {LoginInput, LoginEvent, Cabang, AttedanceUser} from "../type/TypeList";
import {async} from "q";


export async function Login(loginInput : LoginInput,loginEvent? : LoginEvent){
    try{
        var hasil = await Axios.post("/api/login",loginInput)
        loginEvent?.OnSucces(hasil.data)
    }catch(eror){
        console.log(eror);
        loginEvent?.OnEror(eror)
    }
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