import React from 'react';

import { Outlet } from 'react-router-dom'

function MainLayout () {
        return (
            <React.Fragment>
                <Outlet />
            </React.Fragment>
        )
    }

export default MainLayout;