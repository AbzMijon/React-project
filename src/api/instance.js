import axios from 'axios';
import { store } from '@src/store/initStore';

const fakeServerInstance = axios.create({
	baseURL: 'http://localhost:8000/',
});

fakeServerInstance.interceptors.response.use(
	(response) => {
		store.dispatch({ type: 'noError' });
		return response;
	},
	(response) => {
		store.dispatch({
			type: 'throwError',
			payload: { message: response.message },
		});
		throw new Error(response);
	}
);

export default fakeServerInstance;
