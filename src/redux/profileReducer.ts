import { PhotosType, PostDataType, ProfileType } from '../types/types'
import { BaseThunkType, InferActionsTypes } from './reduxStore'
import { profileAPI } from '../api/profile-api.ts'
import { stopSubmit } from 'redux-form'

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
		case 'profile/ADD-POST': {
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

		case 'profile/SET_USER_PROFILE': {
			return { ...state, profile: action.profile }
		}

		case 'profile/SET_STATUS': {
			return { ...state, status: action.status }
		}

		case 'profile/SAVE_PHOTO_SUCCESS': {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			}
		}

		default:
			return state
	}
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
	addPost: (postText: string) =>
		({
			type: 'profile/ADD-POST',
			postText: postText,
		} as const),
	setUserProfile: (profile: ProfileType) =>
		({ type: 'profile/SET_USER_PROFILE', profile } as const),
	setStatus: (status: string) =>
		({
			type: 'profile/SET_STATUS',
			status,
		} as const),
	savePhotoSuccess: (photos: PhotosType) =>
		({ type: 'profile/SAVE_PHOTO_SUCCESS', photos } as const),
}

// THUNKS
type ThunkType = BaseThunkType

export const getUserCurrent =
	(userId: number): ThunkType =>
	async dispatch => {
		let data = await profileAPI.getProfile(userId)
		dispatch(actions.setUserProfile(data))
	}

export const getStatus =
	(userId: number): ThunkType =>
	async dispatch => {
		let data = await profileAPI.getStatus(userId)
		dispatch(actions.setStatus(data))
	}

export const updateStatus =
	(status: string): ThunkType =>
	async dispatch => {
		let data = await profileAPI.updateStatus(status)
		if (data.resultCode === 0) {
			dispatch(actions.setStatus(status))
		}
	}

export const savePhoto =
	(file: File): ThunkType =>
	async dispatch => {
		let res = await profileAPI.savePhoto(file)
		if (res.resultCode === 0) {
			dispatch(actions.savePhotoSuccess(res.data.photos))
		}
	}

export const saveProfile =
	(profile: ProfileType): ThunkType =>
	async (dispatch, getState) => {
		const id = getState().auth.id
		const data = await profileAPI.saveProfile(profile)

		if (data.resultCode === 0) {
			if (id != null) {
				dispatch(getUserCurrent(Number(id)))
			} else {
				throw new Error('User Id can`t be null')
			}
		} else {
			dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
			// return Promise.reject(data.messages[0])
		}
	}

export default profileReducer
