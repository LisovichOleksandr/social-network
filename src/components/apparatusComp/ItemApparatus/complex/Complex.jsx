import React from "react"
import classes from "./Complex.module.css"
import Navetr from "../../navApparatus/Navetr"


const Complex = (props) => {

	let state = props.state
	const nextComplex = () => {
		props.executeComplex()
	}
	return (
		<div className={classes.container}>
			<Navetr />
			<h2>Complex</h2>
			<h3>English Trening Apparatus</h3>
			<p>{state.arrTemporary.at(-1)}</p>
			<button onClick={nextComplex}>Next</button>
		</div >
	)
}

export default Complex