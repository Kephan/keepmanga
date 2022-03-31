import { FETCH_SERIES, EDIT_SERIES, ADD_SERIES, DELETE_SERIES, CLEAR_SERIES, DELETE_FOLLOWED_SERIES } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (series = [], action) => {
    switch (action.type) {
        case FETCH_SERIES:
            return action.payload
        case ADD_SERIES:
            return [...series, action.payload]
        case EDIT_SERIES:
            return series.map((serie) => serie._id === action.payload._id ? action.payload : serie)
        case DELETE_SERIES:                       
            return series.filter((serie) => serie._id !== action.payload)
        case DELETE_FOLLOWED_SERIES:
            return series.filter((serie) => serie._id !== action.payload.vol)
        case CLEAR_SERIES:
            return []
        default:
            return series;
    }
}