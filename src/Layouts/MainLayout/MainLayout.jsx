import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom'
import BackgroundApp from '@src/Components/BackgroundApp/BackgroundApp';
import { globalThemeContext } from '@src/Contexts/theme';
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