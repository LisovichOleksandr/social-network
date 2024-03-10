import React, { useEffect } from 'react'
import classes from './Friends.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/reduxStore.ts'
import User from '../users/User.tsx'
import { follow, unFollow } from '../../redux/usersReducer.ts'
import { useAppDispatch } from '../../hooks/hooks.ts'

type PropsType = {}

const Friends: React.FC<PropsType> = () => {
	const { friends, followingInProgress } = useSelector(
		(state: AppStateType) => state.usersPage
	)
	const dispatch = useAppDispatch()

	const follow = () => {
		// dispatch(follow())
	}

	const unFollow = () => {
		// dispatch(unFollow())
	}

	return (
		<div className={classes.friends}>
			<h3>
				Friends <u>{friends.length}</u>
			</h3>
			{friends.map(f => (
				<User
					key={f.id}
					user={f}
					follow={follow}
					unFollow={unFollow}
					followingInProgress={followingInProgress}
				/>
			))}
		</div>
	)
}

export default Friends
