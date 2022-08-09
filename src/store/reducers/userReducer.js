const userReducer = (state =  {isLoggedIn: false, name: '', password: ''}, action) => {
    switch(action.type) {
        case 'userLogIn':
            return {
                ...state,
                isLoggedIn: true,
                name: action.payload.name,
                password: action.payload.password,
            };
            case 'userLogOut':
                return {
                ...state,
                isLoggedIn: false,
                name: '',
                password: '',
            };
            default:
                return {...state};
            }
        };

export default userReducer;