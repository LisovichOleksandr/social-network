import { AppStateType } from './reduxStore'

export const getAuthorizedUserId = (state: AppStateType) => {
	return state.auth.id
}

export const getIsAuth = (state: AppStateType) => {
	return state.auth.isAuth
}
