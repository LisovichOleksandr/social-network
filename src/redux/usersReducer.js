import usersAPI from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount:0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: false,
}

const usersReducer = (state = initialState, action) => {
	// console.log(`reducer >>>`, action)
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
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

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUserscount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUserscount})
export const togglePreloader = (isFetching) => ({ type: TOGGLE_PRELOADER, isFetching})
export const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
		dispatch(togglePreloader(true))
		let data = await usersAPI.getUsers(currentPage, pageSize)
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
			dispatch(togglePreloader(false))
	}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true))
	let response = await apiMethod(userId)
		if (response.data.resultCode == 0){
		dispatch(actionCreator(userId))
			}
		dispatch(toggleFollowingProgress(false))
}  
export const follow = (userId) => async (dispatch) => {
	let apiMethod = usersAPI.follow.bind(usersAPI)
	let actionCreator = followSuccess
	followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
		}								

export const unfollow = (userId) => async (dispatch) => {
		let apiMethod = usersAPI.unfollow.bind(usersAPI)
		let actionCreator = unfollowSuccess
		followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
		}


export default usersReducer