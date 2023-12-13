import React from "react"
import classes from "./Music.module.css"
import { Field, reduxForm } from "redux-form"

const MusicForm = (props) => {

	return <form onSubmit={props.handleSubmit}>
			<Field placeholder='Name Composition' name='music' component='textarea' />
			<button>Gooo</button>
		</form>
}

const MusicReduxForm = reduxForm({form: 'music'})(MusicForm)

const Music = (props) => {

	const onSubmit = (formData) => {
		alert(formData.music)
		}

	return (
		<div className={classes.main}>
			<h2>Music</h2>
			<MusicReduxForm onSubmit={onSubmit} />
		</div>
	)
}



export default Music