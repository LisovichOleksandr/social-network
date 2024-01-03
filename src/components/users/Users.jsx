import React, { useEffect } from 'react'
import Paginator from '../common/paginator/paginator'
import User from './User'
import { useDispatch, useSelector } from 'react-redux'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsersAll,
} from '../../redux/usersSelectors'
import {
	follow,
	getUsers,
	setCurrentPage,
	unFollow,
} from '../../redux/usersReducer'
import Preloader from '../common/preloader/preloader'

const Users = props => {
	const followingInProgress = useSelector(state =>
		getFollowingInProgress(state)
	)
	const users = useSelector(state => getUsersAll(state))
	const totalUsersCount = useSelector(state => getTotalUsersCount(state))
	const isFetching = useSelector(state => getIsFetching(state))
	const currentPage = useSelector(state => getCurrentPage(state))
	const pageSize = useSelector(state => getPageSize(state))
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize))
	}, [currentPage, pageSize])

	const onPageChanged = pageNumber => {
		dispatch(setCurrentPage(pageNumber))
		dispatch(getUsers(pageNumber, pageSize))
	}
	return (
		<div>
			{isFetching ? <Preloader /> : null}
			<Paginator
				currentButton={currentPage}
				totalItems={totalUsersCount}
				pageSize={pageSize}
				onPageChanged={onPageChanged}
			/>
			{users.map(u => (
				<User
					key={u.id}
					user={u}
					followingInProgress={followingInProgress}
					follow={follow}
					unFollow={unFollow}
				/>
			))}
		</div>
	)
}
export default Users
