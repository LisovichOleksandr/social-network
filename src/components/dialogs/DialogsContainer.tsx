import { compose } from 'redux'
import { connect } from 'react-redux'

import Dialogs from './Dialogs.tsx'
import { actions } from '../../redux/dialogsReducer.ts'
import withAuthRedirect from '../../hoc/redirect.tsx'

import { AppStateType } from '../../redux/reduxStore.ts'

const mapStateToProps = (state: AppStateType) => {
	return {
		messagesPage: state.messagesPage,
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, { ...actions }),
	withAuthRedirect
)(Dialogs)