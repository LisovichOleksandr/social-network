import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './profileStatus/profileStatus';
import ava from '../../../assets/images/Untitled.png'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

	const [editMode, setEditMode] = useState(false)

	if (!props.profile) {
	return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
		if(e.target.files.length)
		props.savePhoto(e.target.files[0])
	}

	return (
		<div>
								{/* HEADER */}
			<div className={classes.mainImg}>
				<img src='http://ogotour.com.ua/wp-content/uploads/sites/144/2021/04/more-2.jpg' alt="My Awesome Image" />
			</div>
								{/* STATUS */}
			<div>
				<b>Status:</b><ProfileStatus	status={props.status} updateStatus={props.updateStatus}/>
			</div>

			<div className={classes.ava}>
				<div>
					<img src={props.profile.photos.large || ava} alt="" /><br/>
					{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
				</div>
				{
				editMode 
					? <ProfileDataForm profile={props.profile}/> 
					: <ProfileData profile={props.profile} 
										isOwner={props.isOwner} 
										goToEditMode={()=>{setEditMode(true)}}/>
				}
			</div>
									{/* STATUS */}
			<div className={classes.status}>
				<h3>„Если вы измеряете свой успех мерой чужих похвал и порицаний, ваша тревога будет бесконечной.<br />(Lao Tzu)“</h3>
			</div>
								{/* ************** */}
			
		</div>
	)
}


const ProfileData = (props) => {
	return (
		<div>
			{ props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div> }
					<div>
						<b>Full name:</b> {props.profile.fullName}
					</div>
					<div>
						<b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes': 'no'}
					</div>
					{props.profile.lookingForAJob &&
					<div>
						<b>My professional skills:</b> {props.profile.lookingForAJobDescription}
					</div>}
					
					<div>
						<b>About me:</b> {props.profile.aboutMe}
					</div>
					<div>
						<b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes': 'no'}
					</div>
					<div>
						{Object.keys(props.profile.contacts).map(key =>{
							return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>})}
					</div>
		</div>
	)
}

const Contacts = (contactTitle, contactValue) => {
	return (<div>
		{/* {contactTitle}:
		{contactValue} */}
		</div>)
}

export default ProfileInfo