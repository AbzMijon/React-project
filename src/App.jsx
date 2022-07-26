import React from 'react';

//Routing
import { BrowserRouter } from 'react-router-dom';

//Components
import RootRoute from './Routes/RootRoute';
import GlobalErrorBoundary from './HOC/GlobalErrorBoundary/GlobalErrorBoundary';
import GlobalTheme from './HOC/GlobalTheme/GlobalTheme';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<GlobalErrorBoundary>
					<GlobalTheme>
						<RootRoute />
					</GlobalTheme>
				</GlobalErrorBoundary>
			</BrowserRouter>
		</React.Fragment>
	);
}
export default App;
