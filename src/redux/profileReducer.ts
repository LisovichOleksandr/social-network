import { profileAPI } from '../api/api'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

type PostDataType = {
	id: number
	post: string
	likesCount: number
}

type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}

type PhotosType = {
	small: string | null
	large: string | null
}

type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: PhotosType
}

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
	action: any
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
export const getUserCurrent = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const savePhoto = (file: any) => async (dispatch: any) => {
	let response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export default profileReducer
