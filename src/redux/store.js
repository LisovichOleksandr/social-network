import dialogsReducer from "./dialogsReducer"
import musicReducer from "./musicReducer"
import profileReducer from "./profileReducer"
import wordsReducer from "./wordsReducer"


let store = {
	_state: {
		musicPage: {
			searchText: 'I am Searching text'
		},
		profilePage: {
			postData: [
				{ id: 1, post: 'Ind My name is Oleksandr', likesCount: 12 },
				{ id: 2, post: 'Ind It is my first post', likesCount: 13 },
				{ id: 3, post: 'Ind I am developer app apparatus', likesCount: 122 },
				{ id: 4, post: 'Ind Movement is life.', likesCount: 32 },
			],
			newPostText: 'Romanets arque'
		},
		messagesPage: {
			messegeNow: 'I am messages',
			messagesData: [
				{ id: 1, message: 'I appear here' },
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
		},
		words: {
			temporaryVerb: [],
			arrTemporary: ['Start Off',],
			adjectives: ['sly', 'original', 'substantial', 'nice'],
			iYouHeShe: ['i', 'it', 'he', 'she', 'you', 'we', 'they',],
			modalVerb: ['can', 'may', 'must', 'will', 'should', 'would', 'have'],
			nouns: ['apple', 'cup', 'banana', 'director', 'table', 'manager', 'man', 'observer',],
			nounsName: ['portnikov', 'ivan vasileevich', 'Mikhail Volodimirovich', 'nadiya pavlivna', 'mikola evstachiovich', 'aleksander nevzorov', 'sergey shnyrov', 'vladimir zelenskiy', 'joseph baiden', 'vladimir putin', 'aleksey arestovich', 'viktor yanukovich', 'viktor ushchenko', 'leonid kychma',],
			verbFirstPosition: [
				['go', 'went', 'gone', 'going'],
				['drive', 'drove', 'driven', 'driving'],
				['forget', 'forgot', 'forhotten', 'forgeting',],
				['like', 'liked', 'liked', 'liking',],
				['want', 'wanted', 'wanted', 'wanting'],
				['need', 'needed', 'needed', 'needing',],
				['advise'],
				['accomplish'],
			],
			verbVThree: [
				['see', 'saw', 'seen', 'seeing'],
				['go', 'went', 'gone', 'going'],
				['drive', 'drove', 'driven', 'driving'],
				['show', 'showed', 'shown', 'shoving'],
				['forget', 'forgot', 'forhotten', 'forgeting'],
				['like', 'liked', 'liked', 'liking',],
				['want', 'wanted', 'wanted', 'wanting'],
				['need', 'needed', 'needed', 'needing',],
				['ask', 'asked', 'asked', 'asking'],
				['listen', 'listened', 'listened', 'listening'],
				['define', 'defined', 'defined', 'defining'],
				['teach', 'taught', 'taught', 'teaching'],
				['learn', 'learned', 'learned', 'learning'],
				// ['get'],
				// ['start'],
				// ['love'],
				// ['finish'],
				// ['come'],
				// ['understand'],
				// ['live'],
				// ['tell'],
				// ['put'],
				// ['hate'],
				// ['work'],
				// ['play'],
				// ['buy'],
				// ['look'],
				// ['hear'],
				// ['let'],
				// ['help'],
				// ['read'],
				// ['wait'],
				// ['explain'],
				// ['drink'],
				// ['think'],
				// ['sleep'],
				// ['know'],
				// ['speak'],
				// ['eat'],
				// ['write'],
				// ['make'],
				// ['fight'],
				// ['do'],
				// ['give'],
				// ['rest'],
				// ['take'],
				// ['sit'],
				// ['hope'],
				// ['pay'],
				// ['run'],
				// ['stay'],
				// ['have'],
				// ['answer'],
				// ['execute'],
				// ['abandon'],
				// ['accept'],
				// ['accomplish'],
				// ['accumulate'],
				// ['achieve'],
				// ['act'],
				// ['adapt'],
				// ['add'],
				// ['address'],
				// ['administer'],
				// ['admit'],
				// ['adopt'],
				// ['adore'],
				// ['advance'],
				// ['advise'],
				// ['affirm'],
				// ['agree'],
				// ['aid'],
				// ['allow'],
				// ['amuse'],
				// ['analyse'],
				// ['announce'],
				// ['apologize'],
				// ['appear'],
				// ['approach'],
				// ['argue'],
				// ['arrive'],
				// ['assist'],
				// ['awake'],
				// ['award'],
			],
		}
	},

	_callSubscriber() { },
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
		this._state.musicPage = musicReducer(this._state.musicPage, action)
		this._state.words = wordsReducer(this._state.words, action)
		this._callSubscriber(this._state)
	},
}

// window.store = store


// export default store
