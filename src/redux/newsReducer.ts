const ADD_NEWS = 'news/ADD-NEWS'
const INPUT_TEXT = 'news/INPUT_TEXT'

type NewsDataType = {
	id: number
	news: string
}

let initialState = {
	text: 'I am a news',
	newsData: [
		{ id: 1, news: 'Let my people go.' },
		{ id: 2, news: 'Redux is understanding' },
	] as Array<NewsDataType>,
}

type InitialStateType = typeof initialState

const newsReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case INPUT_TEXT:
			return {
				...state,
				text: action.text,
			}
		case ADD_NEWS:
			let post = { id: 1, news: state.text }
			return {
				...state,
				text: '',
				newsData: [...state.newsData, post],
			}
		default:
			return state
	}
}

type AddNewsActionCreatorType = {
	type: typeof ADD_NEWS
}
export const addNewsCreator = (): AddNewsActionCreatorType => ({
	type: ADD_NEWS,
})

type InputTextActionCreatorType = {
	type: typeof INPUT_TEXT
	text: string
}
export const inputText = (text: string): InputTextActionCreatorType => ({
	type: INPUT_TEXT,
	text,
})

export default newsReducer
