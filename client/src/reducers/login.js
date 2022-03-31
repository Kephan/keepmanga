import { USER_LOGIN, CLEAR_USER } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (user = [], action) => {
    switch (action.type) {        
        case USER_LOGIN:
            return action.payload
        case CLEAR_USER:
            return ''
        default:
            return user;
    }
}