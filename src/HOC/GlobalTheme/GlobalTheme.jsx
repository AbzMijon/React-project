import React, { useState, useEffect } from 'react';
import { globalThemeContext } from '@src/Contexts/theme';

function GlobalTheme(props) {
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem('globalTheme')) || 'light'
	);

	useEffect(() => {
		const root = document.querySelector(':root');
		const rootsArray = [
			'backgroundTheme',
			'skyTheme',
			'componentsTheme',
			'searchBackgroundTheme',
			'colorTheme',
		];
		rootsArray.forEach((component) => {
			root.style.setProperty(
				`--${component}--default`,
				`var(--${component}--${theme})`
			);
		});
		localStorage.setItem('globalTheme', JSON.stringify(theme));
	}, [theme]);

	return (
		<globalThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</globalThemeContext.Provider>
	);
}

export default GlobalTheme;
