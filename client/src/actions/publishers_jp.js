import { FETCH_PUBLISHER_JP } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const fetchPublishersJp = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPublishersJp();

        dispatch({ type: FETCH_PUBLISHER_JP, payload: data })
    } catch (error) {
        console.log(error)
    }
}