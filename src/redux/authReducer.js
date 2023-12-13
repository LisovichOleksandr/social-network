import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"
import {profileAPI} from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_CURRENT_USER_DATA = 'auth/SET_CURRENT_USER_DATA'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	info: null,
}

const authReducer = (state = initialState, action) => {
	
	let stateCopy
	switch (action.type) {
		case SET_USER_DATA: 
			stateCopy = {
				...state,
				...action.payload,
			}
			
			return stateCopy

			case SET_CURRENT_USER_DATA: 
			stateCopy = {
				...state,
				info: action.info
			}
			
			return stateCopy
		default:
			return state
	}
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login, isAuth} })
export const setCurrentAuthUserData = (info) => ({ type: SET_CURRENT_USER_DATA, info})

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me()
		if( response.data.resultCode === 0 ) {
			let {id, email, login} = response.data.data
			dispatch(setAuthUserData(id, email, login, true))
			let res = await profileAPI.getProfile(response.data.data.id)
			dispatch(setCurrentAuthUserData(res.data.userId))
		}	
}

export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
		if( response.data.resultCode === 0 ) {
			dispatch(getAuthUserData())
		} else { 
			let messege = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error'
			dispatch(stopSubmit('login', {_error: messege}))
		 }
}

export const logout = () => (dispatch) => {
	authAPI.logout()
	.then(response => {	
		if( response.data.resultCode === 0 ) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default authReducer