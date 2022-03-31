import { FETCH_SERIES, EDIT_SERIES, ADD_SERIES, DELETE_SERIES, CLEAR_SERIES, DELETE_FOLLOWED_SERIES} from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const fetchSeries = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.fetchSeries(id, user);

        dispatch({ type: FETCH_SERIES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllSeries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllSeries();

        dispatch({ type: FETCH_SERIES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const editSeries = (serie) => async (dispatch) => {
    try {
        const { data } = await api.editSeries(serie);

        dispatch({ type: EDIT_SERIES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addSeries = (serie) => async (dispatch) => {
    try {
        const { data } = await api.addSeries(serie);

        dispatch({ type: ADD_SERIES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteSeries = (id) => async (dispatch) => {
    try {
        await api.deleteSeries(id);

        dispatch({ type: DELETE_SERIES, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const clearSeries = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_SERIES, payload: '' })
    } catch (error) {
        console.log(error)
    }
}

export const fetchFollowedSeries = (user) => async (dispatch) => {
    try {
        const { data } = await api.fetchFollowedSeries(user);

        dispatch({ type: FETCH_SERIES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const removeCart = (vol) => async (dispatch) => {
    try {
        const { data } = await api.removeCart(vol);

        dispatch({ type: DELETE_FOLLOWED_SERIES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addCart = (vol) => async () => {
    try {
        await api.addCart(vol);
    } catch (error) {
        console.log(error)
    }
}