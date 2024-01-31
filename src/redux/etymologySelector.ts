import { AppStateType } from './reduxStore'

export const getEtymologyData = (state: AppStateType) => {
	return state.etymology.etymologyData
}
