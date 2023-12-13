import { Field, reduxForm } from "redux-form"
import {Textarea} from '../../common/formsControls/formsControls'
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import classes from './addMessagesForm.module.css'

const maxLength30 = maxLengthCreator(30)

const AddMessagesForm = (props) => {
	return <form className={classes.send} onSubmit={props.handleSubmit}>
	<div>
		<Field validate={[required, maxLength30]}
		placeholder={"Field For Writeing Message"} name={'message'} component={Textarea}/>
	</div>
	<div className={classes.but}>
		<button>Send Message</button>
	</div>
</form>
}

export default reduxForm({form: 'dialog-add-messages-form'})(AddMessagesForm)