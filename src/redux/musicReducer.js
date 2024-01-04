const UPDATE_MUSIC_SEARCH_TEXT = 'music/UPDATE-MUSIC-SEARCH-TEXT'

let initialState = {
	track: [
		{
			id: 1,
			src: 'https://mp3uk.net/mp3/files/hammali-navai-ptichka-mp3.mp3',
			preview:
				'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/113/1000x0/falling-1649412036-lkoB5hiJq8.jpg',
			duration: 190,
			title: 'Ptichka',
			artists: 'Hammali&&Navai',
		},
		{
			id: 2,
			src: 'https://mp3uk.net/mp3/files/emin-hammali-do-tebya-mp3.mp3',
			preview:
				'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/113/1000x0/falling-1649412036-lkoB5hiJq8.jpg',
			duration: 176,
			title: 'Do tebya',
			artists: 'emin-hammali',
		},
		{
			id: 3,
			src: 'https://mp3uk.net/mp3/files/hammali-navai-u-okna-mp3.mp3',
			preview:
				'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/113/1000x0/falling-1649412036-lkoB5hiJq8.jpg',
			duration: 174,
			title: 'U Okna',
			artists: 'Hammali&&Navai',
		},
	],
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
