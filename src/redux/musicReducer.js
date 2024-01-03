const UPDATE_MUSIC_SEARCH_TEXT = 'music/UPDATE-MUSIC-SEARCH-TEXT'

let initialState = {
	searchText: 'I am Searching text',
}

const musicReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MUSIC_SEARCH_TEXT:
			return {
				...state,
				searchText: action.newText,
			}

		default:
			return state
	}
}
export const updateMusicSearchCreator = text => ({
	type: UPDATE_MUSIC_SEARCH_TEXT,
	newText: text,
})

export default musicReducer
