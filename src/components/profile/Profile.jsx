import React, { useEffect } from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPosts from './myPosts/MyPosts'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthorizedUserId } from '../../redux/authSelector'
import { getStatus, getUserCurrent } from '../../redux/profileReducer'
import withAuthRedirect from '../../hoc/redirect'

const Profile = () => {
	const { id } = useParams()
	const authorizedUserId = useSelector(state => getAuthorizedUserId(state))
	const dispatch = useDispatch()

	useEffect(() => {
		if (!id) {
			dispatch(getUserCurrent(authorizedUserId))
			dispatch(getStatus(authorizedUserId))
		}

		dispatch(getUserCurrent(id))
		dispatch(getStatus(id))
	}, [id])

	return (
		<div>
			<ProfileInfo isOwner={!id} />
			<MyPosts />
		</div>
	)
}

export default withAuthRedirect(Profile)
