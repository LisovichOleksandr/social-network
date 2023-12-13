import React from "react"
import classes from "./Friends.module.css"
import DialogItem from "../dialogs/dialogItem/DialogsItem"


const Friends = (props) => {

	let dialogsElements = props.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />))

	return (

		<div className={classes.friends}>
			<h3>Friends</h3>
			{dialogsElements}
		</div>
	)
}

export default Friends