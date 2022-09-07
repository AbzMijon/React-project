import React, { useContext } from "react";

import { Outlet, Link } from 'react-router-dom';
import { globalThemeContext } from "../../contexts/theme";
import { PATH } from "../../constans/routes";
import { AiFillHome } from "react-icons/ai";
import BackgroundApp from "../../Components/BackgroundApp/BackgroundApp";
import './login.scss';

function Login() {
    const { theme, setTheme } = useContext(globalThemeContext);
    return (
        <div className="login__wrap">
            <Link to={PATH.initialPage} className='go-home--login'><AiFillHome className="home-icon" /></Link>
            <BackgroundApp theme={theme} />
            <Outlet />
        </div>
    )
};

export default Login;