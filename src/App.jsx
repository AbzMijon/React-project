import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RootRoute from './Routes/RootRoute';
import GlobalErrorBoundary from './HOC/GlobalErrorBoundary/GlobalErrorBoundary';
import GlobalTheme from './HOC/GlobalTheme/GlobalTheme';
import { Provider } from 'react-redux/es/exports';
import { persistor, store } from './store/initStore';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './Components/SpinnerLoading/Spinner';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<Spinner />}>
				<BrowserRouter>
					<GlobalErrorBoundary>
						<GlobalTheme>
							<RootRoute />
						</GlobalTheme>
					</GlobalErrorBoundary>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}
export default App;