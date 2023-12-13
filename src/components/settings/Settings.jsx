import React from "react"
import classes from "./Settings.module.css"

const Settings = (props) => {
	const handleClick = () => {
		console.log('handleClick')
	}
	return (
		<div onClick={handleClick} className={classes.set}>
			<h1>Settings</h1>
			<canvas width='200' height='200'></canvas>
		</div>
	)
}



export default Settings