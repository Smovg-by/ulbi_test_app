import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    const auth = true; // если true, попадаем всегда на events; если false, попадаем всегда на login
    return (
        auth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path} // укажем в качестве ключа путь к компоненту, т.к. он будет уникальным
                    />
                )}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path} // укажем в качестве ключа путь к компоненту, т.к. он будет уникальным
                    />
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;