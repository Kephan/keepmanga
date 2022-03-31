import { FETCH_PUBLISHER_JP } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (publishers_jp = [], action) => {
    switch (action.type) {
        case FETCH_PUBLISHER_JP:
            return action.payload
        default:
            return publishers_jp;
    }
}