import React, { useState, useEffect } from "react";
import { GlobalThemeContext } from '../../Contexts/theme';

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
        <GlobalThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </GlobalThemeContext.Provider>
    )       
}

export default GlobalTheme;