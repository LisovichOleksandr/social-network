import { ThunkAction } from 'redux-thunk'

import { PhotosType, PostDataType, ProfileType } from '../types/types'
import { AppStateType } from './reduxStore'
import { profileAPI } from '../api/profile-api.ts'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
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
	] as Array<PostDataType>,
	profile: null as ProfileType | null,
	status: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
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

		case SET_STATUS: {
			return { ...state, status: action.status }
		}

		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			}
		}

		default:
			return state
	}
}

type ActionsType =
	| AddPostActionType
	| SetUserProfileActionType
	| SetStatusActionType
	| SavePhotoSuccessActionType

type AddPostActionType = {
	type: typeof ADD_POST
	postText: string
}
export const addPost = (postText: string): AddPostActionType => ({
	type: ADD_POST,
	postText: postText,
})

type SetUserProfileActionType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
export const setUserProfile = (
	profile: ProfileType
): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
	type: typeof SET_STATUS
	status: string
}
export const setStatus = (status: string): SetStatusActionType => ({
	type: SET_STATUS,
	status,
})

type SavePhotoSuccessActionType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: PhotosType
}
export const savePhotoSuccess = (
	photos: PhotosType
): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })

// THUNKS
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

// export const postProfileDataThunk =
// 	(
// 		aboutMe: string,
// 		fullName: string,
// 		lookingForAJob: boolean,
// 		lookingForAJobDescription: string
// 	): ThunkType =>
// 	async dispatch => {
// 		debugger
// 		let response = await profileAPI.postProfileData(
// 			aboutMe,
// 			fullName,
// 			lookingForAJob,
// 			lookingForAJobDescription
// 		)
// 		// dispatch(setUserProfile(response.data))
// 	}

export const getUserCurrent =
	(userId: number): ThunkType =>
	async dispatch => {
		let data = await profileAPI.getProfile(userId)
		dispatch(setUserProfile(data))
	}

export const getStatus =
	(userId: number): ThunkType =>
	async dispatch => {
		let data = await profileAPI.getStatus(userId)
		dispatch(setStatus(data))
	}

export const updateStatus =
	(status: string): ThunkType =>
	async dispatch => {
		let data = await profileAPI.updateStatus(status)
		if (data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	}

export const savePhoto =
	(file: PhotosType): ThunkType =>
	async dispatch => {
		let res = await profileAPI.savePhoto(file)
		if (res.resultCode === 0) {
			dispatch(savePhotoSuccess(res.data.photos))
		}
	}

export const saveProfile =
	(profile: any): ThunkType =>
	async (dispatch, getState) => {
		const id = getState().auth.id
		const data = await profileAPI.saveProfile(profile)
		if (data.resultCode === 0) {
			dispatch(getUserCurrent(Number(id)))
		}
	}

export default profileReducer
