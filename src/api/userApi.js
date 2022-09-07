import fakeServerInstance from "./instance";

export const fetchUsers = () => fakeServerInstance.get('/users');