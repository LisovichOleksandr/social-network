import React, { useEffect } from 'react'
import classes from './Friends.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsThunk } from '../../redux/usersReducer'
import { getFriends } from '../../redux/usersSelectors'
import User from '../users/User'

const Friends = props => {
	const friends = useSelector(state => getFriends(state))
	const dispatch = useDispatch()
	debugger
	useEffect(() => {
		dispatch(getFriendsThunk(true))
	}, [])

	return (
		<div className={classes.friends}>
			<h3>Friends</h3>
			{friends.map(friend => (
				<User
					key={friend.id}
					user={friend}
					followingInProgress={true}
					follow={'follow'}
					unFollow={'unFollow'}
				/>
			))}
		</div>
	)
}

export default Friends
