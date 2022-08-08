const userReducer = (state =  {isLogedIN: false}, action) => {
    switch(action.type) {
        case 'userLogIn':
            return {...state, isLogedIN: true};
        case 'userLogOut':
            return {...state, isLogedIN: false};
        default:
            return {...state};
    }
};

export default userReducer;