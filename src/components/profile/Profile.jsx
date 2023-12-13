import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';
import { Navigate } from 'react-router-dom';

const Profile = (props) => {
	console.log('profileRENDER')
	return (
		<div>
			<ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile