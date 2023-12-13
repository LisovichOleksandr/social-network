import React from "react"
import Music from "./Music"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
	return {
		state: state.musicPage
	}
}

const MusicContainer = connect(mapStateToProps)(Music)

export default MusicContainer