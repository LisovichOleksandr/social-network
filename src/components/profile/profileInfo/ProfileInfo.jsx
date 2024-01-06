import React, { useState } from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader'
import ProfileStatus from './profileStatus/profileStatus'
import ava from '../../../assets/images/Untitled.png'
import ProfileDataForm from './ProfileDataForm'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, getStatusSelector } from '../../../redux/profileSelector'
import { savePhoto } from '../../../redux/profileReducer'

const ProfileInfo = props => {
	const [editMode, setEditMode] = useState(false)
	const profile = useSelector(state => getProfile(state))
	const dispatch = useDispatch()

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = e => {
		if (e.target.files.length) dispatch(savePhoto(e.target.files[0]))
	}

	return (
		<div>
			start
			{/* HEADER */}
			<div className={classes.mainImg}>
				<img
					src='http://ogotour.com.ua/wp-content/uploads/sites/144/2021/04/more-2.jpg'
					alt='My Awesome Image'
				/>
			</div>
			{/* STATUS */}
			<div>
				<b>Status:</b>
				<ProfileStatus />
			</div>
			<div className={classes.ava}>
				<div>
					<img src={profile.photos.large || ava} alt='' />
					<br />
					{props.isOwner && (
						<input type={'file'} onChange={onMainPhotoSelected} />
					)}
				</div>
				{editMode ? (
					<ProfileDataForm profile={profile} />
				) : (
					<ProfileData
						profile={profile}
						isOwner={props.isOwner}
						goToEditMode={() => {
							setEditMode(true)
						}}
					/>
				)}
			</div>
			{/* STATUS */}
			<div className={classes.status}>
				<h3>
					„Если вы измеряете свой успех мерой чужих похвал и порицаний, ваша
					тревога будет бесконечной.
					<br />
					(Lao Tzu)“
				</h3>
			</div>
			{/* ************** */}
			end
		</div>
	)
}

const ProfileData = props => {
	return (
		<div>
			{props.isOwner && (
				<div>
					<button onClick={props.goToEditMode}>Edit</button>
				</div>
			)}
			<div>
				<b>Full name:</b> {props.profile.fullName}
			</div>
			<div>
				<b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			{props.profile.lookingForAJob && (
				<div>
					<b>My professional skills:</b>{' '}
					{props.profile.lookingForAJobDescription}
				</div>
			)}

			<div>
				<b>About me:</b> {props.profile.aboutMe}
			</div>
			<div>
				<b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			<div>
				{Object.keys(props.profile.contacts).map(key => {
					return (
						<Contacts
							key={key}
							contactTitle={key}
							contactValue={props.profile.contacts[key]}
						/>
					)
				})}
			</div>
		</div>
	)
}

const Contacts = (contactTitle, contactValue) => {
	return (
		<div>
			{/* {contactTitle}:
		{contactValue} */}
		</div>
	)
}

export default ProfileInfo
