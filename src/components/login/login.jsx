import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import s from './login.module.css'
import { Input } from '../common/formsControls/formsControls'
import { maxLengthCreator, required } from "../../utils/validators/validators"
import { login } from "../../redux/authReducer"
import style from '../common/formsControls/formControls.module.css'

const maxLogin30 = maxLengthCreator(30)
const maxPassword15 = maxLengthCreator(15)

const LoginForm = ({ handleSubmit, error }) => {

	return <form onSubmit={handleSubmit}>
		<div>
			<Field placeholder={"Email"}
				name={'login'}
				component={Input}
				validate={[required, maxLogin30]} />
		</div>
		<div>
			<Field placeholder={"Password"}
				name={'password'}
				type={"password"}
				component={Input}
				validate={[required, maxPassword15]} />
		</div>
		<div>
			<Field type={"checkbox"}
				name={'rememberMe'}
				component={Input} /> remember me
		</div>
		{error && <div className={style.form__summary__error}>
			{error}
		</div>}
		<div className={s.but}>
			<button>Login</button>
		</div>
	</form>
}
/********************************************************* */
const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm)

/************************************************************ */

const Login = ({ login, isAuth }) => {

	const onSubmit = (formData) => {
		login(formData.login, formData.password, formData.rememberMe)
	}
	if (isAuth) {
		return <Navigate to={'/profile'} />
	}
	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)