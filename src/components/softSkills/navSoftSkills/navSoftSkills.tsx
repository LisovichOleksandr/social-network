import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navSoftSkills.module.css'

const NavSoftSkills: FC = () => {
	return (
		<div>
			<nav className={styles.headApparatNav}>
				<div className={styles.item}>
					<NavLink to='/soft-skills/albert' active={styles.active}>
						Card with Albert
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to='/soft-skills/f'>Complex</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default NavSoftSkills
