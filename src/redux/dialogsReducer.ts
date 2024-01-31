const UPDATE_NEW_MESSAGE_BODY = 'dialogs/UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

type DialogsType = {
	id: number
	name: string
}

type MessagesType = {
	id: number
	message: string
}

let initialState = {
	messageNow: 'I am messages',
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
	] as Array<MessagesType>,
	dialogsData: [
		{ id: 1, name: 'Sasha' },
		{ id: 2, name: 'Oleg' },
		{ id: 3, name: 'Viktor' },
		{ id: 4, name: 'Galya' },
		{ id: 5, name: 'Leonid' },
		{ id: 5, name: 'Andrew' },
	] as Array<DialogsType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				messageNow: action.newText,
			}

		case SEND_MESSAGE:
			let newMessage: MessagesType = {
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

type ActionsType = SendMessageActionType | UpdateNewMessageActionType

type SendMessageActionType = {
	type: typeof SEND_MESSAGE
	messageText: string
}

type UpdateNewMessageActionType = {
	type: typeof UPDATE_NEW_MESSAGE_BODY
	newText: string
}

export const sendMessage = (messageText: string): SendMessageActionType => ({
	type: SEND_MESSAGE,
	messageText,
})
export const updateNewMessageBody = (
	text: string
): UpdateNewMessageActionType => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newText: text,
})

export default dialogsReducer
