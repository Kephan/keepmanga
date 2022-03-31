import { FETCH_ALL, ADD, UPDATE, DELETE, CLEAR, DELETE_FOLLOWED } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const fetchCollections = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCollections();

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserCollections = (user) => async (dispatch) => {
    try {
        const { data } = await api.fetchUserCollections(user);

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const fetchFollowedCollections = (user) => async (dispatch) => {
    try {
        const { data } = await api.fetchFollowedCollections(user);

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addCollection = (collection) => async (dispatch) => {
    try {
        const { data } = await api.addCollection(collection);

        dispatch({ type: ADD, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const editCollection = (collection) => async (dispatch) => {
    try {
        const { data } = await api.editCollection(collection);

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCollection = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteCollection(id);

        dispatch({ type: DELETE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const followCollection = (col) => async (dispatch) => {
    try {
        await api.followCollection(col);

    } catch (error) {
        console.log(error)
    }
}


export const unfollowCollection = (col) => async (dispatch) => {
    try {
        const { data } = await api.unfollowCollection(col);

        dispatch({ type: DELETE_FOLLOWED, payload: data })
    } catch (error) {
        console.log(error)
    }
}


export const clearCollection = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR, payload: '' })
    } catch (error) {
        console.log(error)
    }
}