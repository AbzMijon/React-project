import axios from "axios";
import { store } from '../store/initStore';

const fakeServerInstance = axios.create({
    baseURL: "http://localhost:800/",
})

fakeServerInstance.interceptors.response.use(
    response => response,
    response => {() => {
        store.dispatch({type: 'throwError'})
        throw new Error(response);
    }}
)

export default fakeServerInstance;