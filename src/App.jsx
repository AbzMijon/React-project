import React from 'react';

//Routing
import { BrowserRouter } from 'react-router-dom';

//Components
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
