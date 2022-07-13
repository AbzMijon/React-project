import React from 'react';

//Components
import Header from '../Components/Header/Header';

//Routing
import { Outlet } from 'react-router-dom'

function MainLayout () {
        return (
            <React.Fragment>
                <Header />
                <Outlet />
            </React.Fragment>
        )
    }

export default MainLayout;