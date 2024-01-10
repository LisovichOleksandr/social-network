import { compose } from 'redux'
import { connect } from 'react-redux'
import {
	sendMessage,
	updateNewMessageBody,
} from '../../redux/dialogsReducer.ts'
import Dialogs from './Dialogs'
import withAuthRedirect from '../../hoc/redirect'

const mapStateToProps = state => {
	return {
		messagesPage: state.messagesPage,
	}
}

const mapDispatchToProps = {
	updateNewMessageBody,
	sendMessage,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)
