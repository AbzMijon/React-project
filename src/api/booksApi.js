import fakeServerInstance from "./instance";

export const fetchBooksList = () => fakeServerInstance.get('/dataBaseBooks/');
