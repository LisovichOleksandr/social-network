import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import usersAPI, { ResultCodeUnum } from '../api/api.ts'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { AppStateType } from './reduxStore'

const FOLLOW = 'users/FOLLOW'
const UN_FOLLOW = 'users/UN_FOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_PRELOADER = 'users/TOGGLE_PRELOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

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
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case UN_FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			}
		case SET_USERS:
			return { ...state, users: action.users }

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.count }

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return { ...state, followingInProgress: action.isFetching }

		case TOGGLE_PRELOADER:
			return { ...state, isFetching: action.isFetching }

		default:
			return state
	}
}

type ActionsType =
	| FollowSuccessType
	| UnFollowSuccessType
	| SetUsersType
	| SetCurrentPageType
	| SetTotalUsersCountType
	| TogglePreloaderType
	| ToggleFollowingProgressType

type FollowSuccessType = {
	type: typeof FOLLOW
	userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({
	type: FOLLOW,
	userId,
})

type UnFollowSuccessType = {
	type: typeof UN_FOLLOW
	userId: number
}
export const unFollowSuccess = (userId: number): UnFollowSuccessType => ({
	type: UN_FOLLOW,
	userId,
})

type SetUsersType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({
	type: SET_USERS,
	users,
})

type SetCurrentPageType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

type SetTotalUsersCountType = {
	type: typeof SET_TOTAL_USERS_COUNT
	count: number
}
export const setTotalUsersCount = (
	totalUserscount: number
): SetTotalUsersCountType => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUserscount,
})

type TogglePreloaderType = {
	type: typeof TOGGLE_PRELOADER
	isFetching: boolean
}
export const togglePreloader = (isFetching: boolean): TogglePreloaderType => ({
	type: TOGGLE_PRELOADER,
	isFetching,
})

type ToggleFollowingProgressType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
}
export const toggleFollowingProgress = (
	isFetching: boolean
): ToggleFollowingProgressType => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
})

// THUNK
type DispatchType = Dispatch<ActionsType>
type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsers =
	(currentPage: number, pageSize: number): ThunkType =>
	async (dispatch, getState) => {
		dispatch(togglePreloader(true))
		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
		dispatch(togglePreloader(false))
	}

const _followUnFollowFlow = async (
	dispatch: DispatchType,
	userId: number,
	apiMethod: any,
	actionCreator: (userId: number) => FollowSuccessType | UnFollowSuccessType
) => {
	dispatch(toggleFollowingProgress(true))
	let response = await apiMethod(userId)
	if (response.data.resultCode == ResultCodeUnum.Success) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false))
}
export const follow =
	(userId: number): ThunkType =>
	async dispatch => {
		let apiMethod = usersAPI.follow.bind(usersAPI)
		let actionCreator = followSuccess
		_followUnFollowFlow(dispatch, userId, apiMethod, actionCreator)
	}

export const unFollow =
	(userId: number): ThunkType =>
	async dispatch => {
		let apiMethod = usersAPI.unFollow.bind(usersAPI)
		let actionCreator = unFollowSuccess
		_followUnFollowFlow(dispatch, userId, apiMethod, actionCreator)
	}

export default usersReducer
