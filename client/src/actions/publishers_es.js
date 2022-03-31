import { FETCH_PUBLISHER_ES } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const fetchPublishersEs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPublishersEs();

        dispatch({ type: FETCH_PUBLISHER_ES, payload: data })
    } catch (error) {
        console.log(error)
    }
}