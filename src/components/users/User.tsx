import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { UserType } from '../../types/types'
import userPhoto from '../../assets/images/Untitled.png'
import styles from './Users.module.css'

type PropsType = {
	user: UserType
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	followingInProgress: boolean
}

const User: FC<PropsType> = ({
	user,
	follow,
	unFollow,
	followingInProgress,
}) => {
	return (
		<div className={styles.userContainer}>
			<div>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img
							src={user.photos.small != null ? user.photos.small : userPhoto}
							alt='photo'
							className={styles.userPhoto}
						/>
					</NavLink>
				</div>
				<div className={styles.button}>
					{user.followed ? (
						<button
							disabled={followingInProgress}
							onClick={() => {
								unFollow(user.id)
							}}
						>
							unFollow
						</button>
					) : (
						<button
							disabled={followingInProgress}
							onClick={() => {
								follow(user.id)
							}}
						>
							Follow
						</button>
					)}
				</div>
			</div>
			<div>
				<div>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</div>
				<div>
					<div>{'user.location.country'}</div>
					<div>{'user.location.city'}</div>
				</div>
			</div>
		</div>
	)
}
export default User
