import React from "react";

import { Outlet } from 'react-router-dom';

function LoginPage() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
};

export default LoginPage;