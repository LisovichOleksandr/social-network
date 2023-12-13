
const ProfileDataForm = (props) => {
	return (
		<form>
					<div>
						<button onClick={props.save}>Save</button>
					</div> 
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
					{/* <div>
						{Object.keys(props.profile.contacts).map(key =>{
							return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>})}
					</div> */}
		</form>
	)
}

export default ProfileDataForm