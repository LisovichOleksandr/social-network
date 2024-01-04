import React from 'react'
import classes from './Simplepresent.module.css'
import Navetr from '../../navApparatus/Navetr'
import ApparatusReduxForm from './form/inputData'
import { getName, getVerb, getVerbTwo } from '../../../../redux/wordsSelector'
import { useDispatch, useSelector } from 'react-redux'
import {
	addFormData,
	executeSimplePresent,
} from '../../../../redux/wordsReducer'

const SimplePresent = () => {
	const name = useSelector(state => getName(state))
	const verb = useSelector(state => getVerb(state))
	const verbTwo = useSelector(state => getVerbTwo(state))

	const dispatch = useDispatch()

	const onSubmit = formData => {
		console.log(formData)
		dispatch(addFormData(formData.name, formData.verb))
	}
	const nextPhrase = () => {
		dispatch(executeSimplePresent())
	}
	return (
		<div className={classes.container}>
			<Navetr />
			<h2>Simple Present</h2>
			<h3>English Trening Apparatus </h3>
			<ApparatusReduxForm onSubmit={onSubmit} />
			<h5>Every Time</h5>
			{name && verb ? (
				<p>{`${name} ${verb} ${verbTwo || ''}`}</p>
			) : (
				'Click NEXT'
			)}
			<button onClick={nextPhrase}>Next</button>
		</div>
	)
}

export default SimplePresent
