const UPDATE_MUSIC_SEARCH_TEXT = 'music/UPDATE-MUSIC-SEARCH-TEXT'

let initialState = {
	searchText: 'I am Searching text',
}

type InitialStateType = typeof initialState

const musicReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case UPDATE_MUSIC_SEARCH_TEXT:
			return {
				...state,
			}

		default:
			return state
	}
}
// export const updateMusicSearchCreator = text => ({
// 	type: UPDATE_MUSIC_SEARCH_TEXT,
// 	newText: text,
// })

export default musicReducer
