import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { login } from '../../redux/authReducer.ts'
import { getIsAuth } from '../../redux/authSelector.ts'
import {
	maxLengthCreator,
	required,
} from '../../utils/validators/validators.ts'
import {
	GetStringKeys,
	Input,
	createField,
} from '../common/formsControls/formsControls.tsx'
import style from '../common/formsControls/formControls.module.css'
import s from './login.module.css'

import { AppStateType } from '../../redux/reduxStore.ts'

const maxLogin30 = maxLengthCreator(30)
const maxPassword15 = maxLengthCreator(15)

type LoginFormOwnProps = {
	captchaUrl: string | null
}

const LoginForm: FC<
	InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField<LoginFormValuesTypeKeys>(Input, 'login', 'Email', [
				required,
				maxLogin30,
			])}
			{createField<LoginFormValuesTypeKeys>(
				Input,
				'password',
				'Password',
				[required, maxPassword15],
				{
					type: 'password',
				}
			)}
			{createField<LoginFormValuesTypeKeys>(
				Input,
				'rememberMe',
				undefined,
				[],
				{
					type: 'checkbox',
				},
				'remember me'
			)}

			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl &&
				createField<LoginFormValuesTypeKeys>(
					Input,
					'captcha',
					'Symbols from image',
					[required],
					'remember me'
				)}

			{error && <div className={style.form__summary__error}>{error}</div>}
			<div className={s.but}>
				<button>Login</button>
			</div>
		</form>
	)
}
/********************************************************* */
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
	form: 'login',
})(LoginForm)

/************************************************************ */

type MapStateToPropsType = {
	isAuth: boolean
	captchaUrl: string | null
}

type MapDispatchToPropsType = {
	login: (
		email: string,
		password: string,
		rememberMe: boolean,
		captcha: string
	) => void
}

type LoginFormValuesType = {
	login: string
	password: string
	rememberMe: boolean
	captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: FC<MapStateToPropsType & MapDispatchToPropsType> = props => {
	const onSubmit = (formData: LoginFormValuesType) => {
		props.login(
			formData.login,
			formData.password,
			formData.rememberMe,
			formData.captcha
		)
	}
	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}
	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	)
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	isAuth: getIsAuth(state),
	captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login)
