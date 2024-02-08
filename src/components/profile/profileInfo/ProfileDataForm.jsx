import { reduxForm } from 'redux-form'
import {
	Input,
	Textarea,
	createField,
} from '../../common/formsControls/formsControls.tsx'

import styles from './ProfileInfo.module.css'

import style from '../../common/formsControls/formControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, initialValues, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>

			{error && <div className={style.form__summary__error}>{error}</div>}

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
			<div>
				<b>Contacts</b>:{' '}
				{Object.keys(profile.contacts).map(key => {
					return (
						<div key={key} className={styles.contacts}>
							<b>
								{key}: {createField(Input, 'contacts.' + key, key, [])}
							</b>
						</div>
					)
				})}
			</div>
		</form>
	)
}
const ProfileReduxDataForm = reduxForm({ form: 'edit-profile' })(
	ProfileDataForm
)
export default ProfileReduxDataForm
