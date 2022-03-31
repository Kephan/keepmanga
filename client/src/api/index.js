import axios from 'axios'

const url = 'http://localhost:5000/api'

/* COLLECTIONS */
export const fetchCollections = () => axios.get(`${url}`)
export const fetchUserCollections = (user) => axios.get(`${url}/user/${user}`)
export const fetchFollowedCollections = (user) => axios.get(`${url}/follow/${user}`)
export const addCollection = (collection) => axios.post(`${url}/add`, collection)
export const editCollection = (collection) => axios.post(`${url}/edit`, collection)
export const deleteCollection = (id) => axios.post(`${url}/delete/${id}`)
export const followCollection = (data) => axios.post(`${url}/follow`, data)
export const unfollowCollection = (data) => axios.post(`${url}/unfollow`, data)

/* PUBLISHERS */
export const fetchPublishersEs = () => axios.get(`${url}/publishers_es`)
export const fetchPublishersJp = () => axios.get(`${url}/publishers_jp`)
export const fetchBookTypes = () => axios.get(`${url}/booktype`)

/* SERIES */
export const fetchSeries = (id, user) => axios.get(`${url}/serie/${id}/${user}`)
export const fetchFollowedSeries = (user) => axios.get(`${url}/serie/get/followed/${user}`)
export const fetchAllSeries = () => axios.get(`${url}/serie`)
export const editSeries = (serie) => axios.post(`${url}/serie/edit`, serie)
export const addSeries = (serie) => axios.post(`${url}/serie/add`, serie)
export const deleteSeries = (id) => axios.post(`${url}/serie/delete/${id}`)
export const addCart = (data) => axios.post(`${url}/serie/follow`, data)
export const removeCart = (data) => axios.post(`${url}/serie/unfollow`, data)

/* LOGIN */
export const userRegister = (user) => axios.post(`${url}/register`, user)
export const userLogin = (user) => axios.post(`${url}/login`, user)
export const userUpdate = (user) => axios.post(`${url}/update-user`, user)