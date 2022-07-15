import React from "react";

//Routing
import { Outlet } from 'react-router-dom';

function LoginPage() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
};

export default LoginPage;