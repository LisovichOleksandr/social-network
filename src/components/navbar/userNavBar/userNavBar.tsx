import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../types/types.ts'

import userPhoto from '../../../assets/images/Untitled.png'
import styles from './userNavBar.module.css'

type PropsType = {
	user: UserType
}

const UserNawBar: React.FC<PropsType> = ({ user }) => {
	return (
		<NavLink className={styles.container} to={'/profile/' + user.id}>
			<div className={styles.user}>
				<img
					src={user.photos.small != null ? user.photos.small : userPhoto}
					alt='photo'
				/>
				<div>{user.name}</div>
			</div>
		</NavLink>
	)
}

export default UserNawBar
