import React, { useState, useEffect } from "react";
import { globalThemeContext } from '../../contexts/theme';

function GlobalTheme(props) {
    
    const [theme, setTheme] = useState('light'); 
    useEffect(() => {
        const root = document.querySelector(':root');
        const rootsArray = ['backgroundTheme', 'skyTheme', 'componentsTheme', 'searchBackgroundTheme', 'colorTheme'];
        rootsArray.forEach(component => {
            root.style.setProperty(`--${component}--default`, `var(--${component}--${theme})`)
        })
    }, [theme]);

    return (
        <globalThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </globalThemeContext.Provider>
    )       
}

export default GlobalTheme;