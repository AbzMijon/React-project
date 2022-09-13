export const userReducer = (state =  {isLoggedIn: false, name: '', password: '', id: ''}, action) => {
    switch(action.type) {
        case 'userLogIn':
            return {
                ...state,
                isLoggedIn: true,
                name: action.payload.name,
                password: action.payload.password,
                id: action.payload.id
            };
            case 'userLogOut':
                return {
                ...state,
                isLoggedIn: false,
                name: '',
                password: '',
                id: '',
            };
            default:
                return {...state};
            }
        };