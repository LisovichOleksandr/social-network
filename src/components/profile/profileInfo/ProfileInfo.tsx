import React, { ChangeEvent, useState } from 'react'

import Preloader from '../../common/preloader/preloader.tsx'
import ProfileStatus from './profileStatus/profileStatus.tsx'
import ProfileDataForm from './ProfileDataForm.tsx'
import ava from '../../../assets/images/Untitled.png'

import styles from './ProfileInfo.module.css'
import { ProfilePropsType } from '../Profile'
import { ProfileType } from '../../../types/types'

type PropsType = {
	profile: ProfileType | null
	savePhoto: (file: File) => void
	saveProfile: (formData: ProfileType) => Promise<any>
	status: string
	updateStatus: (status: string) => void
	isOwner: boolean
}

const ProfileInfo: React.FC<PropsType> = props => {
	const [editMode, setEditMode] = useState(false)

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) props.savePhoto(e.target.files[0])
	}

	const onSubmit = (formData: ProfileType) => {
		//  todo: remove then
		props.saveProfile(formData).then(() => {
			setEditMode(false)
		})
	}

	return (
		<div>
			start
			{/* HEADER */}
			<div className={styles.mainImg}>
				<img
					src='http://ogotour.com.ua/wp-content/uploads/sites/144/2021/04/more-2.jpg'
					alt='My Awesome Image'
				/>
			</div>
			{/* STATUS */}
			<div>
				<b>Status:</b>
				<ProfileStatus
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
			{/* JS 97 */}
			<div className={styles.ava}>
				<div>
					<img src={props.profile.photos.large || ava} alt='' />
					<br />
					{props.isOwner && (
						<input type={'file'} onChange={onMainPhotoSelected} />
					)}
				</div>
				{editMode ? (
					<ProfileDataForm
						profile={props.profile}
						initialValues={props.profile}
						onSubmit={onSubmit}
					/>
				) : (
					<ProfileData
						profile={props.profile}
						isOwner={props.isOwner}
						goToEditMode={() => {
							setEditMode(true)
						}}
					/>
				)}
			</div>
			{/* STATUS */}
			<div className={styles.status}>
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

type ProfileDataPropsType = {
	isOwner: boolean
	goToEditMode: () => void
	profile: ProfileType
}

const ProfileData: React.FC<ProfileDataPropsType> = props => {
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
				{Object.keys(props.profile.contacts).map((key, i) => {
					return (
						<div key={key} className={styles.contact}>
							<b>{key}</b>:{props.profile.contacts[key]}{' '}
						</div>
					)
				})}
			</div>
		</div>
	)
}

// const Contacts = (contactTitle, contactValue) => {
// 	return <div></div>
// }

export default ProfileInfo