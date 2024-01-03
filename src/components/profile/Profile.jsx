import React from 'react'
import MyPostsContainer from './myPosts/MyPostsContainer'
import ProfileInfo from './profileInfo/ProfileInfo'

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
			<MyPostsContainer />
		</div>
	)
}

export default Profile
