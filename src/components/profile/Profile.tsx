import React, { FC } from 'react'

import MyPostsContainer from './myPosts/MyPostsContainer.tsx'
import ProfileInfo from './profileInfo/ProfileInfo.tsx'
import { ProfileType } from '../../types/types.ts'

export type ProfilePropsType = {
	savePhoto: (file: File) => void
	isOwner: boolean
	profile: ProfileType | null
	status: string
	updateStatus: (status: string) => void
	saveProfile: (formData: ProfileType) => Promise<any>
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
