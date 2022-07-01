//React
import React from 'react';

//Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import GlobalThemeProvider from './HOC/GlobalThemeProvider'

function App() {
		return (
            <React.Fragment>
                {/* <GlobalThemeProvider> */}
                    <Header />
                    <Main />
                {/* </GlobalThemeProvider> */}
            </React.Fragment>
        )
}
export default App;