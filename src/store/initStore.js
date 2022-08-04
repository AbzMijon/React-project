import { createStore } from 'redux';

const rootReduser = (state =  {isLogedIN: false}, action) => {
    console.log(state);
    switch(action.type) {
        case 'userLogIN':
            return {...state, isLogedIN: true};
        case 'userLogOUT':
            return {...state, isLogedIN: false};
        default:
            return {...state};
    }
}

export const store = createStore(rootReduser);