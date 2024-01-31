import { reduxForm } from 'redux-form'
import {
	Input,
	Textarea,
	createField,
} from '../../common/formsControls/formsControls.tsx'

const ProfileDataForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<button>Save</button>
			</div>
			<div>
				<b>Full name:</b> {createField(Input, 'fullName', 'Full Name', [])}
			</div>
			<div>
				<b>Looking for a job:</b>{' '}
				{createField(Input, 'lookingForAJob', '', [], { type: 'checkbox' })}
			</div>
			<div>
				<b>My professional skills:</b>
				{createField(
					Textarea,
					'lookingForAJobDescription',
					'My professional skills',
					[]
				)}
			</div>
			<div>
				<b>About me:</b>
				{createField(Textarea, 'aboutMe', 'About me', [])}
			</div>
		</form>
	)
}
const ProfileReduxDataForm = reduxForm({ form: 'edit-profile' })(
	ProfileDataForm
)
export default ProfileReduxDataForm
