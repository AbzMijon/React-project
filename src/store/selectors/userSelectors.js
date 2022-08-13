export const isLoggedIn = state => state.user.isLoggedIn;
export const loggedUserName = state => state.user.name;
export const loggedUserPassword = state => state.user.password;

export const isServerError = state => state.isError;