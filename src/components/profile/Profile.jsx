import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPosts from './myPosts/MyPosts'

const Profile = ({ savePhoto, isOwner, profile, status, updateStatus }) => {
	return (
		<div>
			<ProfileInfo
				savePhoto={savePhoto}
				isOwner={isOwner}
				profile={profile}
				status={status}
				updateStatus={updateStatus}
			/>
			<MyPosts />
		</div>
	)
}

export default Profile
