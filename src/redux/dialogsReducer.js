const UPDATE_NEW_MESSAGE_BODY = 'dialogs/UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

let initialState = {
	messegeNow: 'I am messages',
	messagesData: [
		{
			id: 1,
			message:
				'Розвивай мистецтво самоіронії, відкажись від власної важності!!!',
		},
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Whot is your name?' },
		{ id: 4, message: 'Galya is helping gerl.' },
		{ id: 5, message: 'Leonid mast go to home.' },
		{ id: 5, message: 'Can Andrew give me the table?' },
	],
	dialogsData: [
		{ id: 1, name: 'Sasha' },
		{ id: 2, name: 'Oleg' },
		{ id: 3, name: 'Viktor' },
		{ id: 4, name: 'Galya' },
		{ id: 5, name: 'Leonid' },
		{ id: 5, name: 'Andrew' },
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				messegeNow: action.newText,
			}

		case SEND_MESSAGE:
			let newMessage = {
				id: 5,
				message: action.messageText,
			}
			return {
				...state,
				messagesData: [...state.messagesData, newMessage],
			}

		default:
			return state
	}
}

export const sendMessage = messageText => ({ type: SEND_MESSAGE, messageText })
export const updateNewMessageBody = text => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newText: text,
})

export default dialogsReducer
