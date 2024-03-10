import { Dispatch } from 'redux'

import { ResultCodeUnum } from '../api/api.ts'
import { usersAPI } from '../api/user-api.ts'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers.ts'
import { AppStateType, BaseThunkType, InferActionsTypes } from './reduxStore'

let initialState = {
	users: [] as Array<UserType>,
	friends: [] as Array<UserType>,
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
		case 'users/FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case 'users/UN_FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			}
		case 'users/SET_USERS':
			return { ...state, users: action.users }

		case 'users/SET_CURRENT_PAGE':
			return { ...state, currentPage: action.currentPage }

		case 'users/SET_TOTAL_USERS_COUNT':
			return { ...state, totalUsersCount: action.count }

		case 'users/TOGGLE_IS_FOLLOWING_PROGRESS':
			return { ...state, followingInProgress: action.isFetching }

		case 'users/TOGGLE_PRELOADER':
			return { ...state, isFetching: action.isFetching }

		case 'users/SET_FRIENDS':
			return { ...state, friends: action.friends }

		default:
			return state
	}
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
	followSuccess: (userId: number) =>
		({
			type: 'users/FOLLOW',
			userId,
		} as const),
	unFollowSuccess: (userId: number) =>
		({
			type: 'users/UN_FOLLOW',
			userId,
		} as const),
	setUsers: (users: Array<UserType>) =>
		({
			type: 'users/SET_USERS',
			users,
		} as const),
	setCurrentPage: (currentPage: number) =>
		({
			type: 'users/SET_CURRENT_PAGE',
			currentPage,
		} as const),
	setTotalUsersCount: (totalUserscount: number) =>
		({
			type: 'users/SET_TOTAL_USERS_COUNT',
			count: totalUserscount,
		} as const),
	togglePreloader: (isFetching: boolean) =>
		({
			type: 'users/TOGGLE_PRELOADER',
			isFetching,
		} as const),
	toggleFollowingProgress: (isFetching: boolean) =>
		({
			type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
			isFetching,
		} as const),
	setFriends: (friends: Array<UserType>) =>
		({
			type: 'users/SET_FRIENDS',
			friends,
		} as const),
}

// THUNK
type DispatchType = Dispatch<ActionsType>
type GetStateType = () => AppStateType
type ThunkType = BaseThunkType<ActionsType>

export const getFriends =
	(friends: boolean): ThunkType =>
	async dispatch => {
		let data = await usersAPI.getFriends()
		dispatch(actions.setFriends(data.items))
	}

export const getUsers =
	(currentPage: number, pageSize: number): ThunkType =>
	async dispatch => {
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
