import React from "react"
import Complex from "./Complex"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
	return {
		state: state.words
	}
}

const ComplexContainer = connect(mapStateToProps)(Complex)

export default ComplexContainer