export const serverError = (state =  {isError: false}, action) => {
    console.log(state);
    switch(action.type) {
        case 'throwError':
            return {
                ...state,
                isError: true,
            }
            default:
                return {...state};
            }
        };