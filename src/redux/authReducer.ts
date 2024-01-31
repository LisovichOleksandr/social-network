import { ActionTypes, stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'

import { ResultCodeUnum, authAPI, profileAPI } from '../api/api.ts'
import { AppStateType } from './reduxStore'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_CURRENT_USER_DATA = 'auth/SET_CURRENT_USER_DATA'

type InitialStateType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
	info: string | null
}

let initialState: InitialStateType = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	info: null,
}

const authReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		case SET_CURRENT_USER_DATA:
			return {
				...state,
				info: action.info,
			}
		default:
			return state
	}
}

type ActionsType = SetAuthUserDataActionType | SetCurrentAuthUserDataType

type SetAuthUserDataActionPayloadType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
): SetAuthUserDataActionType => ({
	type: SET_USER_DATA,
	payload: { id, email, login, isAuth },
})

type SetCurrentAuthUserDataType = {
	type: typeof SET_CURRENT_USER_DATA
	info: string
}

export const setCurrentAuthUserData = (
	info: string
): SetCurrentAuthUserDataType => ({
	type: SET_CURRENT_USER_DATA,
	info,
})

// THUNK
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType => async dispatch => {
	let meData = await authAPI.me()

	if (meData.resultCode === ResultCodeUnum.Success) {
		let { id, email, login } = meData.data
		dispatch(setAuthUserData(id, email, login, true))
		let res = await profileAPI.getProfile(meData.data.id)
		dispatch(setCurrentAuthUserData(String(res.data.userId)))
	}
}

export const login =
	(email: string, password: string, rememberMe: boolean): ThunkType =>
	async (dispatch: any) => {
		let loginData = await authAPI.login(email, password, rememberMe)
		if (loginData.resultCode === ResultCodeUnum.Success) {
			dispatch(getAuthUserData())
		} else {
			let message =
				loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
			dispatch(stopSubmit('login', { _error: message }))
		}
	}

export const logout = (): ThunkType => async dispatch => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
