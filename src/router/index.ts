import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

// словарь, в котором будут храниться маршруты к компонентам
export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
}

// этот массив роутов будет показываться НЕавторизованным пользователям, т.к. есть логинизация
export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
];

// этот массив роутов будет показываться авторизованным пользователям, т.к. есть логинизация
export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event}
];