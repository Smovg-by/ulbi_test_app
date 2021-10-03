import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const router = useHistory(); // см. notes
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        <Layout.Header>
            {isAuth
                ?
                <>
                    <div style={{color: 'white'}}>UlbiTV</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>

                        <Menu.Item
                            onClick={() => console.log('Logged Out')}
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