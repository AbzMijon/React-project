import React from 'react';

//Routing
import { BrowserRouter } from 'react-router-dom';

//Components
import RootRoute from './Routes/RootRoute';
import GlobalErrorBoundary from './HOC/GlobalErrorBoundary/GlobalErrorBoundary';
import GlobalTheme from './HOC/GlobalTheme/GlobalTheme';
import { Provider } from 'react-redux/es/exports';
import { persistor, store } from './store/initStore';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	return (
		<React.Fragment>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={
						<div className="spinner">
							<h5 className="spinner__title">Подождите немного</h5>
							<img className="spinner__img" src="https://i.gifer.com/VAyR.gif" alt="" />
						</div>
				}>
					<BrowserRouter>
						<GlobalErrorBoundary>
							<GlobalTheme>
								<RootRoute />
							</GlobalTheme>
						</GlobalErrorBoundary>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</React.Fragment>
	);
}
export default App;
