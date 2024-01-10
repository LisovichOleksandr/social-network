import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/authReducer.ts'
import { getIsAuth } from '../../redux/authSelector'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import style from '../common/formsControls/formControls.module.css'
import { Input, createField } from '../common/formsControls/formsControls'
import s from './login.module.css'

const maxLogin30 = maxLengthCreator(30)
const maxPassword15 = maxLengthCreator(15)

const LoginForm = ({ handleSubmit, error }) => {
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
			{/* <Field
					placeholder={'Email'}
					name={'login'}
					component={Input}
					validate={[required, maxLogin30]}
				/> */}
			{/* <div>
				<Field
					placeholder={'Password'}
					name={'password'}
					type={'password'}
					component={Input}
					validate={[required, maxPassword15]}
				/>
			</div> */}
			{/* <div>
				<Field type={'checkbox'} name={'rememberMe'} component={Input} />{' '}
				remember me
			</div> */}
			{error && <div className={style.form__summary__error}>{error}</div>}
			<div className={s.but}>
				<button>Login</button>
			</div>
		</form>
	)
}
/********************************************************* */
const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login',
})(LoginForm)

/************************************************************ */

const Login = ({ login, isAuth }) => {
	const onSubmit = formData => {
		login(formData.login, formData.password, formData.rememberMe)
	}
	if (isAuth) {
		return <Navigate to={'/profile'} />
	}
	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = state => ({
	isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, { login })(Login)
