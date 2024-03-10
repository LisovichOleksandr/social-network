import { UserType } from '../types/types'
import { APIResponseType, instance } from './api.ts'

type GetUsersResponseType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export const usersAPI = {
	getFriends(friends = true) {
		return instance
			.get<GetUsersResponseType>(`users?friends=${friends}`)
			.then(res => {
				return res.data
			})
	},
	getUsers(currentPage = 1, pageSize = 20) {
		return instance
			.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(res => res.data)
	},
	unFollow(id: number) {
		return instance
			.delete(`follow/${id}`)
			.then(res => res.data) as Promise<APIResponseType>
	},
	follow(id: number) {
		return instance.post<APIResponseType>(`follow/${id}`).then(res => res.data)
	},
}
