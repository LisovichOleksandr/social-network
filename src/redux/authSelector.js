import { createSelector } from 'reselect'

export const getAuthorizedUserId = state => {
	return state.auth.id
}

export const getIsAuth = state => {
	return state.auth.isAuth
}

export const getIsAuthS = createSelector(getIsAuth, state => state)
