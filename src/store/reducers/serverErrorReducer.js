export const serverErrorReducer = (state = {isError: false, errorMessage: ''}, action) => {
    switch(action.type) {
        case 'throwError':
            return {
                ...state,
                isError: true,
                errorMessage: action.payload.message,
            }
        case 'noError':
            return {
                ...state,
                isError: false,
                errorMessage: '',
            }
            default:
                return {...state};
            }
        };