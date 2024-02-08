import { ActionTypes, FormAction, stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'

import { ResultCodeForCaptchaUnum, ResultCodeUnum } from '../api/api.ts'
import { AppStateType, BaseThunkType, InferActionsTypes } from './reduxStore'
import { authAPI } from '../api/auth-api.ts'
import { profileAPI } from '../api/profile-api.ts'
import { securityAPI } from '../api/security-api.ts'

let initialState = {
	id: null as null | number,
	email: null as null | string,
	login: null as null | string,
	isAuth: false,
	info: null as null | string,
	captchaUrl: null as null | string,
}

type InitialStateType = typeof initialState

const authReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case 'auth/SET_USER_DATA':
			return {
				...state,
				...action.payload,
			}
		case 'auth/SET_CURRENT_USER_DATA':
			return {
				...state,
				info: action.info,
			}
		case 'auth/GET_CAPTCHA_URL':
			return {
				...state,
				captchaUrl: action.captcha,
			}
		default:
			return state
	}
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
	setAuthUserData: (
		id: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean
	) =>
		({
			type: 'auth/SET_USER_DATA',
			payload: { id, email, login, isAuth },
		} as const),
	setCurrentAuthUserData: (info: string) =>
		({
			type: 'auth/SET_CURRENT_USER_DATA',
			info,
		} as const),
	setCaptcha: (captcha: string) =>
		({
			type: 'auth/GET_CAPTCHA_URL',
			captcha,
		} as const),
}

// THUNK
type ThunkType = BaseThunkType<ActionsType | FormAction>

export const getAuthUserData = (): ThunkType => async dispatch => {
	let meData = await authAPI.me()

	if (meData.resultCode === ResultCodeUnum.Success) {
		let { id, email, login } = meData.data
		dispatch(actions.setAuthUserData(id, email, login, true))
		let res = await profileAPI.getProfile(meData.data.id)
		dispatch(actions.setCurrentAuthUserData(String(res.userId)))
	}
}

export const login =
	(
		email: string,
		password: string,
		rememberMe: boolean,
		captcha: string
	): ThunkType =>
	async dispatch => {
		let loginData = await authAPI.login(email, password, rememberMe, captcha)
		if (loginData.resultCode === ResultCodeUnum.Success) {
			dispatch(getAuthUserData())
		} else {
			if (loginData.resultCode === ResultCodeForCaptchaUnum.CaptchaIsRequired) {
				dispatch(getCaptchaUrl())
			}
			let message =
				loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
			dispatch(stopSubmit('login', { _error: message }))
		}
	}

export const getCaptchaUrl = (): ThunkType => async dispatch => {
	let data = await securityAPI.getCaptchaUrl()
	const captchaUrl = data.url
	dispatch(actions.setCaptcha(captchaUrl))
}

export const logout = (): ThunkType => async dispatch => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(actions.setAuthUserData(null, null, null, false))
	}
}

export default authReducer
