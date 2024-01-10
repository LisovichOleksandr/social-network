import { stopSubmit } from 'redux-form'
import { authAPI, profileAPI } from '../api/api'

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

const authReducer = (state = initialState, action: any): InitialStateType => {
	// let stateCopy: InitialStateType
	switch (action.type) {
		case SET_USER_DATA:
			// stateCopy =
			return {
				...state,
				...action.payload,
			}

		// return stateCopy

		case SET_CURRENT_USER_DATA:
			// stateCopy =
			return {
				...state,
				info: action.info,
			}

		// return stateCopy
		default:
			return state
	}
}

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
export const setCurrentAuthUserData = (info: string) => ({
	type: SET_CURRENT_USER_DATA,
	info,
})

export const getAuthUserData = () => async (dispatch: any) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setAuthUserData(id, email, login, true))
		let res = await profileAPI.getProfile(response.data.data.id)
		dispatch(setCurrentAuthUserData(res.data.userId))
	}
}

export const login =
	(email: string, password: string, rememberMe: boolean) =>
	async (dispatch: any) => {
		let response = await authAPI.login(email, password, rememberMe)
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData())
		} else {
			let message =
				response.data.messages.length > 0
					? response.data.messages[0]
					: 'Some error'
			dispatch(stopSubmit('login', { _error: message }))
		}
	}

export const logout = () => (dispatch: any) => {
	authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default authReducer
