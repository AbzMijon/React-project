import React from 'react';

//Routing
import { BrowserRouter } from 'react-router-dom';

//Components
import RootRoute from './Routes/RootRoute';
import GlobalErrorBoundary from './HOC/GlobalErrorBoundary/GlobalErrorBoundary';
import GlobalTheme from './HOC/GlobalTheme/GlobalTheme';
import { Provider } from 'react-redux/es/exports';
import { store } from './store/initStore';

function App() {
	return (
		<React.Fragment>
			<Provider store={store}>
				<BrowserRouter>
					<GlobalErrorBoundary>
						<GlobalTheme>
							<RootRoute />
						</GlobalTheme>
					</GlobalErrorBoundary>
				</BrowserRouter>
			</Provider>
		</React.Fragment>
	);
}
export default App;
