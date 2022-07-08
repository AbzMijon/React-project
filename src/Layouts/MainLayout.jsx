//import React
import React from 'react';

//import Components
import Header from '../Components/Header';
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