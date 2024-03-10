import { getAuthUserData } from './authReducer.ts'
import { InferActionsTypes } from './reduxStore.ts'
import { getFriends } from './usersReducer.ts'

let initialState = {
	initialized: false,
}

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case 'SN/APP/INITIALIZED_SUCCESS':
			let stateCopy = {
				...state,
				initialized: true,
			}
			return stateCopy
		default:
			return state
	}
}

export const actions = {
	initializedSuccess: () =>
		({
			type: 'SN/APP/INITIALIZED_SUCCESS',
		} as const),
}

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData())
	Promise.all([promise]).then(() => {
		dispatch(actions.initializedSuccess())
		dispatch(getFriends(true))
	})
}

export default appReducer
