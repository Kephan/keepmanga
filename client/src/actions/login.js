import { USER_LOGIN, CLEAR_USER } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const userRegister = (user) => async (dispatch) => {
    try {
        await api.userRegister(user);
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = (user) => async (dispatch) => {
    try {
        const { data } = await api.userLogin(user)

        dispatch({ type: USER_LOGIN, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const userUpdate = (user) => async (dispatch) => {
    try {
        const data = await api.userUpdate(user)

        dispatch({ type: USER_LOGIN, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

export const clearUser = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_USER, payload: '' })
    } catch (error) {
        console.log(error)
    }
}