import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/Untitled.png'
import Paginator from '../common/paginator/paginator'
import User from './User'

let Users = props => {
	return (
		<div>
			<Paginator
				totalItems={props.totalUsersCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
			/>
			{props.users.map(u => (
				<User
					key={u.id}
					user={u}
					follow={props.follow}
					unFollow={props.unfollow}
					followingInProgress={props.followingInProgress}
				/>
			))}

			<Paginator
				totalItems={props.totalUsersCount}
				pageSize={props.pageSize}
				onPageChanged={props.onPageChanged}
			/>
		</div>
	)
}
export default Users
