import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import { PersistGate } from 'redux-persist/integration/react';

import RootRoute from '@src/Routes/RootRoute';
import GlobalErrorBoundary from '@src/HOC/GlobalErrorBoundary/GlobalErrorBoundary';
import GlobalTheme from '@src/HOC/GlobalTheme/GlobalTheme';
import { persistor, store } from '@src/store/initStore';
import Spinner from '@src/Components/SpinnerLoading/Spinner';

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