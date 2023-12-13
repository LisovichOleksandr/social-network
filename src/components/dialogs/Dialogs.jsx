import React from "react"
import classes from "./Dialogs.module.css"
import DialogItem from "./dialogItem/DialogsItem"
import Message from "./message/Message"
import AddMessagesForm from "./addMessagesForm/addMessagesForm"


const Dialogs = (props) => {

	let state = props.messagesPage
	let dialogsElements = state.dialogsData.map((dialog, id) => (
									<DialogItem key={id} name={dialog.name} id={dialog.id} />))
	let messagesElements = state.messagesData.map((message, id) => (
									<Message key={id} message={message.message} />))

	const onSubmit = (data) => {
		props.sendMessage(data.message)
	}

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogs__items}>
					{dialogsElements}
				</div>
				<div className={classes.messages}>
					{messagesElements}
				</div>
			</div>
			<AddMessagesForm onSubmit={onSubmit}/>
		</div>
	)
}

export default Dialogs