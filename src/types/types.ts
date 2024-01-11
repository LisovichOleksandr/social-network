export type PostDataType = {
	id: number
	post: string
	likesCount: number
}

export type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}

export type PhotosType = {
	small: string | null
	large: string | null
}

export type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: PhotosType
}

export type UserType = {
	id: number
	name: string
	uniqueUrlName: null | string
	photos: PhotosType
	status: null | string
	followed: boolean
}
