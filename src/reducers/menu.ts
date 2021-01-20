import { MENU } from '../actions';

interface MenuState{
    index: Readonly<string>;
}

const menu = (state: MenuState = {
    index: "/"
}, action: any) => {
    switch(action.type){
        case MENU:
            state = {
                index: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}

export default menu;