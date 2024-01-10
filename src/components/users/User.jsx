import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/Untitled.png'
import styles from './Users.module.css'
import { useDispatch } from 'react-redux'

const User = ({ user, follow, unFollow, followingInProgress }) => {
	const dispatch = useDispatch()
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
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => {
								dispatch(unFollow(user.id))
							}}
						>
							unFollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => {
								dispatch(follow(user.id))
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
					<div>{'user.location.sity'}</div>
				</div>
			</div>
		</div>
	)
}
export default User
