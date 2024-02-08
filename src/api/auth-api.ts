import {
	APIResponseType,
	ResultCodeForCaptchaUnum,
	ResultCodeUnum,
	instance,
} from './api.ts'

type MeResponseDataType = {
	id: number
	email: string
	login: string
}

type LoginMeResponseDataType = {
	userId: number
}

type LogOutResponseType = {
	resultCode: ResultCodeUnum
	messages: Array<string>
	data: any
}

export const authAPI = {
	me() {
		return instance
			.get<APIResponseType<MeResponseDataType>>(`auth/me`)
			.then(res => res.data)
	},
	login(
		email: string,
		password: string,
		rememberMe = false,
		captcha: string | null = null
	) {
		return instance
			.post<
				APIResponseType<
					LoginMeResponseDataType,
					ResultCodeUnum | ResultCodeForCaptchaUnum
				>
			>(`auth/login`, {
				email,
				password,
				rememberMe,
				captcha,
			})
			.then(res => res.data)
	},
	logout() {
		return instance.delete<LogOutResponseType>(`auth/login`)
	},
}
