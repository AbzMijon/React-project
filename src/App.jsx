import React from 'react';

//Routing
import { BrowserRouter } from 'react-router-dom';

//Components
import RootRoute from './Routes/RootRoute';
import GlobalErrorBoundary from './HOC/GlobalErrorBoundary';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<GlobalErrorBoundary>
					<RootRoute />
				</GlobalErrorBoundary>
			</BrowserRouter>
		</React.Fragment>
	);
}
export default App;
