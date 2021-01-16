import {LOGIN, LOGOUT} from "../actions";

interface LoginState{
    isLogin: boolean;
}

const login = (state: LoginState = {
    isLogin: false
}, action: any) => {
    switch(action.type){
        case LOGIN:
            state = {
                ...action.payload,
                isLogin: true
            };
            break;
        case LOGOUT:
            state = {
                isLogin: false
            }
            break;
        default:
            break;
    }
    return state;
}

export default login;