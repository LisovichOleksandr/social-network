import axios from 'axios'
import { UserType } from '../types/types'

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		'API-KEY': 'e12e5859-22cb-4b69-82b1-878c38421670',
	},
})

export enum ResultCodeUnum {
	Success = 0,
	Error = 1,
}
export enum ResultCodeForCaptchaUnum {
	CaptchaIsRequired = 10,
}

// AUTH-API
type MeResponseType = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: ResultCodeUnum
	messages: Array<string>
}

type LoginMeResponseType = {
	data: {
		userId: number
	}
	resultCode: ResultCodeUnum | ResultCodeForCaptchaUnum
	messages: Array<string>
}
type LogOutResponseType = {
	resultCode: ResultCodeUnum
	messages: Array<string>
	data: any
}

export const authAPI = {
	me() {
		return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
	},
	login(email: string, password: string, rememberMe = false) {
		return instance
			.post<LoginMeResponseType>(`auth/login`, {
				email,
				password,
				rememberMe,
			})
			.then(res => res.data)
	},
	logout() {
		return instance.delete<LogOutResponseType>(`auth/login`)
	},
}

// USERS-API
type GetUsersResponseType = {
	items: Array<UserType>
	totalCount: number
	error: string
}

type SimpleResponseType = {
	resultCode: ResultCodeUnum
	messages: Array<string>
	data: any
}
const usersAPI = {
	getUsers(currentPage = 1, pageSize = 20) {
		return instance
			.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data
			})
	},
	unFollow(id: number) {
		return instance.delete<SimpleResponseType>(`follow/${id}`)
		// .then(response => response.data)
	},
	follow(id: number) {
		return instance.post<SimpleResponseType>(`follow/${id}`)
		// .then(response => response.data)
	},
}
// PROFILE-API

type GetProfileResponseContactType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}
type GetProfileResponseType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: GetProfileResponseContactType
	photos: {
		small: string
		large: string
	}
}
type PutStatusType = SimpleResponseType & {
	fieldsErrors: Array<any>
}
type SavePhotoType = {
	resultCode: ResultCodeUnum
	messages: Array<string>
	data: {
		small: string
		large: string
	}
}
type PutProfileDataResponseType = {
	resultCode: ResultCodeUnum
	messages: string
	data: any
}
export const profileAPI = {
	getProfile(userId: number) {
		return instance.get<GetProfileResponseType>(`profile/${userId}`)
	},
	getStatus(userId: number) {
		return instance.get<any>(`profile/status/${userId}`)
	},
	updateStatus(status: string) {
		return instance.put<PutStatusType>(`profile/status`, { status: status })
	},
	savePhoto(photoFile: any) {
		let data = new FormData()
		data.append('image', photoFile)
		return instance.put<SavePhotoType>(`profile/photo`, data, {
			headers: {
				'Content-Type': `multipart/form-data`,
			},
		})
	},
	saveProfile(profile: any) {
		return instance.put<PutProfileDataResponseType>(`profile`, profile)
	},
}

export default usersAPI
