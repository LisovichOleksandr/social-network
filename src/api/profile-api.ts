import { PhotosType, ProfileType } from '../types/types.js'
import { APIResponseType, ResultCodeUnum, instance } from './api.ts'

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

type ProfileDataResponseType = {
	photos: PhotosType
}
export const profileAPI = {
	getProfile(userId: number) {
		return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
	},
	getStatus(userId: number) {
		return instance
			.get<string>(`profile/status/${userId}`)
			.then(res => res.data)
	},
	updateStatus(status: string) {
		return instance
			.put<APIResponseType>(`profile/status`, { status: status })
			.then(res => res.data)
	},
	savePhoto(photoFile: any) {
		let data = new FormData()
		data.append('image', photoFile)
		return instance
			.put<APIResponseType<ProfileDataResponseType>>(`profile/photo`, data, {
				headers: {
					'Content-Type': `multipart/form-data`,
				},
			})
			.then(res => res.data)
	},
	saveProfile(profile: any) {
		return instance
			.put<APIResponseType<GetProfileResponseContactType>>(`profile`, profile)
			.then(res => res.data)
	},
}
