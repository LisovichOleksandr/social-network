import React from 'react'
import classes from './SimplePresent.module.css'
import Navetr from '../../navApparatus/Navetr'
import ApparatusReduxForm from './form/inputData'

const SimplePresent = props => {
	const onSubmit = formData => {
		console.log(formData)
		props.addFormData(formData.name, formData.verb)
	}

	const nextPhrase = () => {
		props.executeSimplePresent()
	}
	return (
		<div className={classes.container}>
			<Navetr />
			<h2>Simple Present</h2>
			<h3>English Training Apparatus </h3>
			<ApparatusReduxForm onSubmit={onSubmit} />
			<h5>Every Time</h5>
			{props.name && props.verb ? (
				<p>{`${props.name} ${props.verb} ${props.verbTwo || ''}`}</p>
			) : (
				'Click NEXT'
			)}
			<button onClick={nextPhrase}>Next</button>
		</div>
	)
}

export default SimplePresent
