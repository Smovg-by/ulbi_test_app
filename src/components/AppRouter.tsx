import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        isAuth ?
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