import React, { FC } from 'react'

import Paginator from '../common/paginator/paginator.tsx'
import User from './User.tsx'
import { UserType } from '../../types/types'

type PropsType = {
	totalUsersCount: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	users: Array<UserType>
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	followingInProgress: boolean
}
const Users: FC<PropsType> = ({
	totalUsersCount,
	pageSize,
	onPageChanged,
	users,
	follow,
	unFollow,
	followingInProgress,
}) => {
	return (
		<div>
			<Paginator
				totalItems={totalUsersCount}
				pageSize={pageSize}
				onPageChanged={onPageChanged}
			/>
			{users.map(u => (
				<User
					key={u.id}
					user={u}
					follow={follow}
					unFollow={unFollow}
					followingInProgress={followingInProgress}
				/>
			))}

			<Paginator
				totalItems={totalUsersCount}
				pageSize={pageSize}
				onPageChanged={onPageChanged}
			/>
		</div>
	)
}
export default Users
