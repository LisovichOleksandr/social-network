import usersAPI from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'
import { UserType } from '../types/types'
import { number } from 'yargs'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
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

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case UNFOLLOW:
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
type FollowSuccessType = {
	type: typeof FOLLOW
	userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({
	type: FOLLOW,
	userId,
})

type UnFollowSuccessType = {
	type: typeof UNFOLLOW
	userId: number
}
export const unfollowSuccess = (userId: number): UnFollowSuccessType => ({
	type: UNFOLLOW,
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

export const getUsers =
	(currentPage: number, pageSize: number) => async (dispatch: any) => {
		dispatch(togglePreloader(true))
		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
		dispatch(togglePreloader(false))
	}

const followUnfollowFlow = async (
	dispatch: any,
	userId: number,
	apiMethod: any,
	actionCreator: any
) => {
	dispatch(toggleFollowingProgress(true))
	let response = await apiMethod(userId)
	if (response.data.resultCode == 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false))
}
export const follow = (userId: number) => async (dispatch: any) => {
	let apiMethod = usersAPI.follow.bind(usersAPI)
	let actionCreator = followSuccess
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
	let apiMethod = usersAPI.unfollow.bind(usersAPI)
	let actionCreator = unfollowSuccess
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export default usersReducer
