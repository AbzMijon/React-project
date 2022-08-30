import React from "react";

import { Outlet } from 'react-router-dom';

function Login() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
};

export default Login;