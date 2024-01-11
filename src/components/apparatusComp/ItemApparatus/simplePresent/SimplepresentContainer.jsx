import React from 'react'
import {
	addFormData,
	executeSimplePresent,
} from '../../../../redux/wordsReducer.ts'
import SimplePresent from './Simplepresent'
import { connect } from 'react-redux'
import { getName, getVerb, getVerbTwo } from '../../../../redux/wordsSelector'

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
