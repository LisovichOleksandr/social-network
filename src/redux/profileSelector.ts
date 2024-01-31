import { AppStateType } from './reduxStore'

export const getProfile = (state: AppStateType) => {
	return state.profilePage.profile
}

export const getStatusSelector = (state: AppStateType) => {
	return state.profilePage.status
}
