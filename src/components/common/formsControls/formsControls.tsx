import React, { FC } from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import classes from './formControls.module.css'
import { FieldValidatorType } from '../../../utils/validators/validators'

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div
			className={classes.formControl + ' ' + (hasError ? classes.error : '')}
		>
			<div>
				<textarea {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

type InputPropsType = {
	meta: {
		touched: boolean
		error: string
	}
}

export const Input: FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div
			className={classes.formControl + ' ' + (hasError ? classes.error : '')}
		>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export function createField<FormKeysType extends string>(
	component: React.FC<WrappedFieldProps>,
	name: FormKeysType,
	placeholder: string | undefined,
	validate: Array<FieldValidatorType>,
	props = {},
	text = ''
) {
	return (
		<div>
			<Field
				placeholder={placeholder}
				name={name}
				component={component}
				validate={validate}
				{...props}
			/>{' '}
			{text}
		</div>
	)
}

export type GetStringKeys<T> = Extract<keyof T, string>

//  const hoc = (Children, <element />) => {
// 	Children = ({input, meta, ...props}) => {
// 	const hasError = meta.touched && meta.error
// 	return (
// 			<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
// 				<div>
// 					<input {...input} {...props} />
// 				</div>
// 				{hasError && <span>{meta.error}</span>}
// 			</div>
// 		)
// 	}
// return Children
//  }
