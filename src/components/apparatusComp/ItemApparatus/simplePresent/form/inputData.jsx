import { Field, reduxForm } from "redux-form"
import { Navigate } from "react-router-dom"


const ApparatusForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder={"name"} name={'name'} component={'input'} />
			<Field placeholder={"verb"} name={'verb'} component={'input'} />
			<button>Go</button>
		</form>
	)
}

const ApparatusReduxForm = reduxForm({
// a unique name for the form
form: 'apparatus'
})(ApparatusForm)

export default ApparatusReduxForm
