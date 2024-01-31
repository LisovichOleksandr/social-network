import {
	InitialStateUserType,
	followSuccess,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	togglePreloader,
	unFollowSuccess,
	usersReducer,
} from './usersReducer'
// TEST-1
test('should be set followed true for user ', () => {
	const startState: InitialStateUserType = {
		users: [
			{
				name: 'one',
				id: 1,
				photos: {
					large: 'entity',
					small: 'as',
				},
				status: 'sdf',
				uniqueUrlName: 'asdf',
				followed: false,
			},
			{
				name: 'one',
				id: 2,
				photos: {
					large: 'resolve',
					small: 'authorize',
				},
				status: 'sdf',
				uniqueUrlName: 'asdf',
				followed: false,
			},
		],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: false,
	}

	const action = followSuccess(1)

	const endState = usersReducer(startState, action)

	expect(endState.users[0].followed).toBeTruthy()
	expect(endState.users[1].followed).toBeFalsy()
})
// TEST-2
test('should be set followed false for user ', () => {
	const startState: InitialStateUserType = {
		users: [
			{
				name: 'one',
				id: 1,
				photos: {
					large: 'entity',
					small: 'as',
				},
				status: 'sdf',
				uniqueUrlName: 'asdf',
				followed: true,
			},
			{
				name: 'one',
				id: 2,
				photos: {
					large: 'resolve',
					small: 'authorize',
				},
				status: 'sdf',
				uniqueUrlName: 'asdf',
				followed: true,
			},
		],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: false,
	}

	const action = unFollowSuccess(1)

	const endState = usersReducer(startState, action)

	expect(endState.users[0].followed).toBeFalsy()
	expect(endState.users[1].followed).toBeTruthy()
})
// TEST-3
test('should be set users in state', () => {
	const startState: InitialStateUserType = {
		users: [],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: false,
	}

	const action = setUsers([
		{
			name: 'one',
			followed: false,
			id: 33,
			photos: { large: null, small: null },
			status: 'yo',
			uniqueUrlName: null,
		},
	])

	const endState = usersReducer(startState, action)

	expect(endState.users.length).toBe(1)
	expect(endState.users[0].id).toBe(33)
})
// TEST-4
test('should be set current page of user paginator in state', () => {
	const startState: InitialStateUserType = {
		users: [],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: false,
	}

	const action = setCurrentPage(3)

	const endState = usersReducer(startState, action)

	expect(endState.currentPage).toBe(3)
})
// TEST-5
test('should be set quantity users in state', () => {
	const startState: InitialStateUserType = {
		users: [],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: false,
	}

	const action = setTotalUsersCount(3)

	const endState = usersReducer(startState, action)

	expect(endState.totalUsersCount).toBe(3)
})
// TEST-6
test('should be set preloader flag', () => {
	const startState: InitialStateUserType = {
		users: [],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: false,
	}

	const action = togglePreloader(true)

	const endState = usersReducer(startState, action)

	expect(endState.isFetching).toBeTruthy()
})
