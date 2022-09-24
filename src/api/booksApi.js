import fakeServerInstance from '@src/api/instance.js';

export const fetchBooksList = () => fakeServerInstance.get('/dataBaseBooks/');