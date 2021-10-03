import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useHistory(); // см. notes
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions(); // кастомный хук. С помощью него можно сделать dispatch фсешщт creator

    return (
        <Layout.Header>
            {isAuth
                ?
                <>
                    <div style={{color: 'white'}}>{user.username}</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>

                        <Menu.Item
                            onClick={() => logout()}
                            key={1}>Log Out
                        </Menu.Item>
                    </Menu>
                </>
                :
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item
                        onClick={() => router.push(RouteNames.LOGIN)}
                        key={1}>Login
                    </Menu.Item>
                </Menu>
            }

        </Layout.Header>
    );
};

export default Navbar;