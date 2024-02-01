import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { ResultCodeUnum } from '../api/api.ts'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { AppStateType, InferActionsTypes } from './reduxStore'
import { usersAPI } from '../api/user-api.ts'

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: false,
}

export type InitialStateUserType = typeof initialState

export const usersReducer = (
	state = initialState,
	action: ActionsType
): InitialStateUserType => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case 'UN_FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			}
		case 'SET_USERS':
			return { ...state, users: action.users }

		case 'SET_CURRENT_PAGE':
			return { ...state, currentPage: action.currentPage }

		case 'SET_TOTAL_USERS_COUNT':
			return { ...state, totalUsersCount: action.count }

		case 'TOGGLE_IS_FOLLOWING_PROGRESS':
			return { ...state, followingInProgress: action.isFetching }

		case 'TOGGLE_PRELOADER':
			return { ...state, isFetching: action.isFetching }

		default:
			return state
	}
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
	followSuccess: (userId: number) =>
		({
			type: 'FOLLOW',
			userId,
		} as const),
	unFollowSuccess: (userId: number) =>
		({
			type: 'UN_FOLLOW',
			userId,
		} as const),
	setUsers: (users: Array<UserType>) =>
		({
			type: 'SET_USERS',
			users,
		} as const),
	setCurrentPage: (currentPage: number) =>
		({
			type: 'SET_CURRENT_PAGE',
			currentPage,
		} as const),
	setTotalUsersCount: (totalUserscount: number) =>
		({
			type: 'SET_TOTAL_USERS_COUNT',
			count: totalUserscount,
		} as const),
	togglePreloader: (isFetching: boolean) =>
		({
			type: 'TOGGLE_PRELOADER',
			isFetching,
		} as const),
	toggleFollowingProgress: (isFetching: boolean) =>
		({
			type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
			isFetching,
		} as const),
}

// THUNK
type DispatchType = Dispatch<ActionsType>
type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsers =
	(currentPage: number, pageSize: number): ThunkType =>
	async (dispatch, getState) => {
		dispatch(actions.togglePreloader(true))
		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(actions.setUsers(data.items))
		dispatch(actions.setTotalUsersCount(data.totalCount))
		dispatch(actions.togglePreloader(false))
	}

const _followUnFollowFlow = async (
	dispatch: DispatchType,
	userId: number,
	apiMethod: any,
	actionCreator: (userId: number) => ActionsType
) => {
	dispatch(actions.toggleFollowingProgress(true))
	let response = await apiMethod(userId)
	if (response.resultCode == ResultCodeUnum.Success) {
		dispatch(actionCreator(userId))
	}
	dispatch(actions.toggleFollowingProgress(false))
}
export const follow =
	(userId: number): ThunkType =>
	async dispatch => {
		let apiMethod = usersAPI.follow.bind(usersAPI)
		let actionCreator = actions.followSuccess
		_followUnFollowFlow(dispatch, userId, apiMethod, actionCreator)
	}

export const unFollow =
	(userId: number): ThunkType =>
	async dispatch => {
		let apiMethod = usersAPI.unFollow.bind(usersAPI)
		let actionCreator = actions.unFollowSuccess
		_followUnFollowFlow(dispatch, userId, apiMethod, actionCreator)
	}

export default usersReducer
