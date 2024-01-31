import React, { FC } from 'react'
import MyPostsContainer from './myPosts/MyPostsContainer'
import ProfileInfo from './profileInfo/ProfileInfo'
import { ProfileType } from '../../types/types'

export type ProfilePropsType = {
	savePhoto: () => void
	isOwner: boolean
	profile: ProfileType
	status: string
	updateStatus: () => void
	saveProfile: () => void
}

const Profile: FC<ProfilePropsType> = ({
	savePhoto,
	isOwner,
	profile,
	status,
	updateStatus,
	saveProfile,
}) => {
	return (
		<div>
			<ProfileInfo
				savePhoto={savePhoto}
				isOwner={isOwner}
				profile={profile}
				status={status}
				updateStatus={updateStatus}
				saveProfile={saveProfile}
			/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile
