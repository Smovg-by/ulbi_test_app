export interface AuthState {
    isAuth: boolean
}
// создадим enum, чтобы не писать много переменных дл типов action
export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH"
}
// типизация action type И payload
interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}
// обобщающи тип всех action, объединяющий интерфейсы. Пока их только один, перечисляем с помощью "|"
export type AuthAction = SetAuthAction