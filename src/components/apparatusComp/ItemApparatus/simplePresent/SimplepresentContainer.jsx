import { connect } from 'react-redux'
import {
	addFormData,
	executeSimplePresent,
} from '../../../../redux/wordsReducer.ts'
import {
	getName,
	getVerb,
	getVerbTwo,
} from '../../../../redux/wordsSelector.ts'
import SimplePresent from './SimplePresent.jsx'

const mapStateToProps = state => {
	return {
		name: getName(state),
		verb: getVerb(state),
		verbTwo: getVerbTwo(state),
	}
}

const SimplePresentContainer = connect(mapStateToProps, {
	executeSimplePresent,
	addFormData,
})(SimplePresent)

export default SimplePresentContainer
