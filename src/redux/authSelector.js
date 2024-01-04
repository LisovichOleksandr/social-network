import { createSelector } from 'reselect'

export const getAuthorizedUserId = state => {
	return state.auth.id
}

export const getIsAuth = state => {
	return state.auth.isAuth
}

export const getLogin = state => {
	return state.auth.login
}

export const getInfo = state => {
	return state.auth.info
}

export const getIsAuthS = createSelector(getIsAuth, state => state)
