export interface LoginInput{
    email : string,
    password : string
}

export interface LoginEvent{
    OnSucces : IOnSucces,
    OnEror : IOnFail

}

interface IOnSucces {
    ( result: string ) : void;
}
interface IOnFail {
    ( result: Error ) : void;
}
export interface Cabang {
    id: number,
    name: string,
    addres: string,
    latitude: number,
    longitude: number,
    radius: number,
    created_at: string,
    updated_at: string,
}