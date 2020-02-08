export interface LoginEvent {
    OnSucces: IOnSucces;
    OnEror: IOnFail;
}
interface IOnSucces {
    (result: string): void;
}
interface IOnFail {
    (result: Error): void;
}
