import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		'API-KEY': 'e12e5859-22cb-4b69-82b1-878c38421670'
	},
})

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe })
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}

const usersAPI = {
	getUsers(currentPage = 1, pageSize = 20) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	getAuthMe() {
		console.warn('Obsolete method. Please authAPI.me')
		return instance.get(`auth/me`)
		// .then(response => response.data.id)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
		// .then(response => response.data)
	},
	follow(id) {
		return instance.post(`follow/${id}`)
		// .then(response => response.data)
	},
	getUserCurrent(userId) {
		console.warn('Obsolete method. Please profileAPI object.')
		return profileAPI.getProfile(userId)
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
	},
	savePhoto(photoFile) {
		let data = new FormData();
		data.append('image', photoFile);
		return instance.put(`profile/photo`, data, {
			headers: {
				'Content-Type': `multipart/form-data`
			}
		})
	}
}




export default usersAPI