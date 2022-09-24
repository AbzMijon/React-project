import fakeServerInstance from '@src/api/instance';

export const fetchUsers = () => fakeServerInstance.get('/users');
export const fetchUserById = (id) => fakeServerInstance.get(`/users/${id}`);