import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { reduxForm, InjectedFormProps } from 'redux-form'

import { login } from '../../redux/authReducer.ts'
import { getIsAuth } from '../../redux/authSelector.ts'

import {
	maxLengthCreator,
	required,
} from '../../utils/validators/validators.js'
import { Input, createField } from '../common/formsControls/formsControls.tsx'

import style from '../common/formsControls/formControls.module.css'
import s from './login.module.css'
import { AppStateType } from '../../redux/reduxStore.js'

const maxLogin30 = maxLengthCreator(30)
const maxPassword15 = maxLengthCreator(15)

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({
	handleSubmit,
	error,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField(Input, 'login', 'Email', [required, maxLogin30])}
			{createField(Input, 'password', 'Password', [required, maxPassword15], {
				type: 'password',
			})}
			{createField(
				Input,
				'rememberMe',
				null,
				[],
				{
					type: 'checkbox',
				},
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
const LoginReduxForm = reduxForm<LoginFormValuesType>({ form: 'login' })(
	LoginForm
)

/************************************************************ */

type MapStateToPropsType = {
	isAuth: boolean
}

type MapDispatchToPropsType = {
	login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginFormValuesType = {
	login: string
	password: string
	rememberMe: boolean
}
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = props => {
	const onSubmit = (formData: LoginFormValuesType) => {
		props.login(formData.login, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}
	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, { login })(Login)
