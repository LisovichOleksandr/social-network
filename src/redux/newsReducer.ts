const ADD_NEWS = 'news/ADD-NEWS'
const INPUT_TEXT = 'news/INPUT_TEXT'

export type NewsDataType = {
	id: number
	news: string
}

let initialState = {
	newsData: [
		{ id: 1, news: 'Let my people go.' },
		{ id: 2, news: 'Redux is understanding' },
	] as Array<NewsDataType>,
}

export type InitialNewsStateType = typeof initialState

export const newsReducer = (
	state = initialState,
	action: ActionsType
): InitialNewsStateType => {
	switch (action.type) {
		case ADD_NEWS:
			let post = { id: 1, news: action.text }
			return {
				...state,
				newsData: [...state.newsData, post],
			}
		default:
			return state
	}
}
type ActionsType = AddNewsActionCreatorType

export type AddNewsActionCreatorType = {
	type: typeof ADD_NEWS
	text: string
}

export const addNewsCreator = (text: string): AddNewsActionCreatorType => ({
	type: ADD_NEWS,
	text,
})

export default newsReducer
