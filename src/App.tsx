import React, {FC, useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import './App.css'
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App: FC = () => {

    const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser); // в реале мы бы проверяли авторизацию токеном
            setIsAuth(true)
        }
    }, []);

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;
