import React, { useState } from 'react';

//Routing
import { Outlet } from 'react-router-dom'

function MainLayout () {

        return (
            <React.Fragment>
                <Outlet />
            </React.Fragment>
        )
    }

export default MainLayout;