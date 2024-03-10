import React from 'react'
import { reduxForm, InjectedFormProps } from 'redux-form'
import {
	GetStringKeys,
	Input,
	Textarea,
	createField,
} from '../../common/formsControls/formsControls.tsx'

import styles from './ProfileInfo.module.css'

import style from '../../common/formsControls/formControls.module.css'
import { ProfileType } from '../../../types/types.ts'

type PropsType = {
	profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<
	InjectedFormProps<ProfileType, PropsType> & PropsType
> = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>

			{error && <div className={style.form__summary__error}>{error}</div>}

			<div>
				<b>Full name:</b>{' '}
				{createField<ProfileTypeKeys>(Input, 'fullName', 'Full Name', [])}
			</div>
			<div>
				<b>Looking for a job:</b>{' '}
				{createField<ProfileTypeKeys>(Input, 'lookingForAJob', '', [], {
					type: 'checkbox',
				})}
			</div>
			<div>
				<b>My professional skills:</b>
				{createField<ProfileTypeKeys>(
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
								{/* todo: create some solution for embedded object */}
								{key}: {createField(Input, 'contacts.' + key, key, [])}
							</b>
						</div>
					)
				})}
			</div>
		</form>
	)
}
const ProfileReduxDataForm = reduxForm<ProfileType, PropsType>({
	form: 'edit-profile',
})(ProfileDataForm)
export default ProfileReduxDataForm
