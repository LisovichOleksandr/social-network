import axios from 'axios'

export const instance = axios.create({
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

export type APIResponseType<D = {}, RC = ResultCodeUnum> = {
	data: D
	resultCode: RC
	messages: Array<string>
}
