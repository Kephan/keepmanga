import { FETCH_PUBLISHER_ES } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (publishers_es = [], action) => {
    switch (action.type) {
        case FETCH_PUBLISHER_ES:
            return action.payload
        default:
            return publishers_es;
    }
}