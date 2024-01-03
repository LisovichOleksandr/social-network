const ADD_NEWS = 'news/ADD-NEWS'
const INPUT_TEXT = 'news/INPUT_TEXT'

let initialState = {
	text: 'I am a news',
	newsData: [
		{ id: 1, news: 'Let my piple go.' },
		{ id: 2, news: 'Redux is undertating' },
	],
}

const newsReducer = (state = initialState, action) => {
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

export const addNewsCreator = () => ({ type: ADD_NEWS })
export const inputText = text => ({ type: INPUT_TEXT, text })

export default newsReducer
