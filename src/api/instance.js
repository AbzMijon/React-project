import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL: "http://localhost:8000/",
})

fakeServerInstance.interceptors.response.use(
    response => response,
    response => {throw new Error(response.message)}
)

export default fakeServerInstance;