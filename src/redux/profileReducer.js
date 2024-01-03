import usersAPI, { profileAPI } from '../api/api'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_SATATUS = 'profile/SET_SATATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initialState = {
	postData: [
		{
			id: 1,
			post: ' "If you want to govern the people, You must place yourself below them. If you want to lead people, You must learn how to follow them."      ----- Lao Tzu, Tao Te Ching',

			likesCount: 12,
		},
		{
			id: 2,
			post: 'Моя исторія перша в житті і через це вона не може бути ідеальною: "Не подумайте люди добрі що я забоявся поміряти ті штани в секонд-хенді."			 Кінець	and It is my first post',
			likesCount: 13,
		},
		{
			id: 3,
			post: 'Ind I am developer app apparatus',
			likesCount: 122,
		},
		{
			id: 4,
			post: 'Ind Movement is life.',
			likesCount: 32,
		},
	],
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				post: action.postText,
				likesCount: 0,
			}
			return {
				...state,
				postData: [...state.postData, newPost],
			}
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		case SET_SATATUS: {
			return { ...state, status: action.status }
		}

		case SAVE_PHOTO_SUCCESS: {
			return { ...state, profile: { ...state.profile, photos: action.photos } }
		}

		default:
			return state
	}
}

export const addPost = postText => ({ type: ADD_POST, postText: postText })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_SATATUS, status })
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos })

// THUNKS
export const getUserCurrent = userId => async dispatch => {
	let response = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(response.data))
}

export const getStatus = userId => async dispatch => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}

export const updateStatus = status => async dispatch => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const savePhoto = file => async dispatch => {
	let response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export default profileReducer
