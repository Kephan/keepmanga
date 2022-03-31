import { FETCH_ALL, ADD, UPDATE, DELETE, CLEAR, DELETE_FOLLOWED } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (collections = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case ADD:
            return [...collections, action.payload]
        case UPDATE:
            return collections.map((collection) => collection._id === action.payload._id ? action.payload : collection)
        case DELETE:
            return collections.filter((collection) => collection._id !== action.payload)
        case DELETE_FOLLOWED:
            return collections.filter((collection) => collection._id !== action.payload.col)
        case CLEAR:
            return []
        default:
            return collections;
    }
}