import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RootRoute from './Routes/RootRoute';
import GlobalErrorBoundary from './HOC/GlobalErrorBoundary/GlobalErrorBoundary';
import GlobalTheme from './HOC/GlobalTheme/GlobalTheme';
import { Provider } from 'react-redux/es/exports';
import { persistor } from './store/initStore';
import { store } from './store/initStore';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './Components/SpinnerLoading/Spinner';
import axios from 'axios';

function App() {
	axios.get('http://localhost:8000/users').then(resp => console.log(resp.data))
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