import { FETCH_BOOK_TYPE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (book_types = [], action) => {
    switch (action.type) {
        case FETCH_BOOK_TYPE:
            return action.payload
        default:
            return book_types;
    }
}