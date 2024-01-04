import React from 'react'
import classes from './Complex.module.css'
import Navetr from '../../navApparatus/Navetr'

const Complex = () => {
	const nextComplex = () => {
		console.log('yes')
	}
	return (
		<div className={classes.container}>
			<Navetr />
			<h2>Complex</h2>
			<h3>English Training Apparatus</h3>
			<button onClick={nextComplex}>Next</button>
		</div>
	)
}

export default Complex
