import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogsItem'
import Message from './message/Message'
import AddMessagesForm from './addMessagesForm/addMessagesForm'
import { useDispatch, useSelector } from 'react-redux'
import { getMessagesAll } from '../../redux/dialogsSelector'
import { sendMessage } from '../../redux/dialogsReducer'

const Dialogs = props => {
	const { dialogsData, messagesData } = useSelector(state =>
		getMessagesAll(state)
	)
	const dispatch = useDispatch()

	const onSubmit = data => {
		dispatch(sendMessage(data.message))
	}
	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogs__items}>
					{dialogsData.map((dialog, id) => (
						<DialogItem key={id} name={dialog.name} id={dialog.id} />
					))}
				</div>
				<div className={classes.messages}>
					{messagesData.map((message, id) => (
						<Message key={id} message={message.message} />
					))}
				</div>
			</div>
			<AddMessagesForm onSubmit={onSubmit} />
		</div>
	)
}

export default Dialogs
