import React, { FC } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

import {
	maxLengthCreator,
	required,
} from '../../../utils/validators/validators.ts'
import {
	Textarea,
	createField,
} from '../../common/formsControls/formsControls.tsx'
import styles from './addMessagesForm.module.css'

import { MessageFormType } from '../Dialogs.tsx'

const maxLength30 = maxLengthCreator(30)

type MessageFormValuesKeysType = Extract<keyof MessageFormType, string>
type PropsType = {}

const AddMessagesForm: FC<
	InjectedFormProps<MessageFormValuesKeysType, PropsType> & PropsType
> = props => {
	return (
		<form className={styles.send} onSubmit={props.handleSubmit}>
			<div>
				{createField<MessageFormValuesKeysType>(
					Textarea,
					'message',
					'Field For Writing Message',
					[required, maxLength30]
				)}
				{/* <Field
					validate={[required, maxLength30]}
					placeholder={'Field For Writing Message'}
					name={'message'}
					component={Textarea}
				/> */}
			</div>
			<div className={styles.but}>
				<button>Send Message</button>
			</div>
		</form>
	)
}

export default reduxForm<MessageFormType>({ form: 'dialog-add-messages-form' })(
	AddMessagesForm
)
