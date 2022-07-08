//React
import React from 'react';

//Components
import { BrowserRouter } from 'react-router-dom';	
import RootRoute from './Routes/RootRoute';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<RootRoute />
			</BrowserRouter>
		</React.Fragment>
	);
}
export default App;
