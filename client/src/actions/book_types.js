import { FETCH_BOOK_TYPE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const fetchBookTypes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBookTypes();

        dispatch({ type: FETCH_BOOK_TYPE, payload: data })
    } catch (error) {
        console.log(error)
    }
}