import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AppStateType } from '../../redux/reduxStore.ts'
import UserNawBar from './userNavBar/userNavBar.tsx'

import styles from './Navbar.module.css'

const Navbar: FC = props => {
	const friends = useSelector((state: AppStateType) =>
		state.usersPage.friends.slice(0, 3)
	)

	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink to='/profile' activeclassname={styles.active}>
					Profile
				</NavLink>
			</div>
			<div className={`${styles.item} ${styles.active}`}>
				<NavLink to='/dialogs' activeclassname={styles.activelink}>
					Messages
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/news' activeclassname={styles.activelink}>
					News
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/music' activeclassname={styles.activelink}>
					Music
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/settings' activeclassname={styles.activelink}>
					Settings
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/apparatus' activeclassname={styles.activelink}>
					Apparatus
				</NavLink>
			</div>
			<div className={`${styles.item}`}>
				<NavLink to='/friends' activeclassname={styles.activelink}>
					Friends
				</NavLink>
				{friends.map(f => (
					<UserNawBar user={f} key={f.id} />
				))}
			</div>
			<div className={`${styles.item}`}>
				<NavLink to='/users' activeclassname={styles.activelink}>
					Find Users
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
