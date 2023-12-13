import React from "react"
import classes from "./FriendsNav.module.css"
import DialogItem from "../../dialogs/dialogItem/DialogsItem"

const FriendsNav = (props) => {

	let dialogsElements = props.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />))

	return (

		<div>
			<h6>Friends</h6>
			{dialogsElements}
		</div>
	)
}

export default FriendsNav