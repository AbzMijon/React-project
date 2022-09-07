import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom'
import BackgroundApp from '../../Components/BackgroundApp/BackgroundApp';
import { globalThemeContext } from '../../contexts/theme';
import './mainLayout.scss';

function MainLayout () {
    const { theme, setTheme } = useContext(globalThemeContext);
    return (
        <React.Fragment>
            <BackgroundApp theme={theme} />
            <Outlet />
        </React.Fragment>
        )
}

export default MainLayout;