import React, { FC } from 'react'

import DialogItem from './dialogItem/DialogsItem.tsx'
import Message from './message/Message.tsx'
import AddMessagesForm from './addMessagesForm/addMessagesForm.tsx'
import classes from './Dialogs.module.css'

import { DialogsInitialStateType } from '../../redux/dialogsReducer.ts'

type PropsType = {
	messagesPage: DialogsInitialStateType
	sendMessage: (messageText: string) => void
}

const Dialogs: FC<PropsType> = props => {
	let state = props.messagesPage
	let dialogsElements = state.dialogsData.map((dialog, id) => (
		<DialogItem key={id} name={dialog.name} id={dialog.id} />
	))
	let messagesElements = state.messagesData.map((message, id) => (
		<Message key={id} message={message.message} />
	))

	const onSubmit = (data: MessageFormType) => {
		props.sendMessage(data.message)
	}

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogs__items}>{dialogsElements}</div>
				<div className={classes.messages}>{messagesElements}</div>
			</div>
			<AddMessagesForm onSubmit={onSubmit} />
		</div>
	)
}

export type MessageFormType = {
	message: string
}

export default Dialogs
