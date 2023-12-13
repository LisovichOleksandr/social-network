import {random, capitalize} from "../utils/englishTreningApparatus/randomWord";

const SIMPLE_PRESENT_SIMPLEST = 'SIMPLE_PRESENT_SIMPLEST'
const ADD_FORM_DATA = 'ADD_FORM_DATA'

let initialState = {
	name: '',
	verb: '',
	verbTwo: '',
	isChange: true,
	nameFromForm: ['i', 'it', 'he', 'she', 'you', 'we', 'they',],
	verbFromForm: [],
}
// let initialState = {
// 	countTmp: 0,
// 	temporaryVerb: [],
// 	arrTemporary: ['Start Off',],
// 	adjectives: ['sly', 'original', 'substantial', 'nice'],
// 	iYouHeShe: ['i', 'it', 'he', 'she', 'you', 'we', 'they',],
// 	modalVerb: ['can', 'may', 'must', 'will', 'should', 'would', 'have'],
// 	nouns: ['apple', 'cup', 'banana', 'director', 'table', 'manager', 'man', 'observer',],
// 	nounsName: ['mr trump', 'mr portnikov', 'mr kosta', 'mr fizick', 'mr shpack', 'mr director', 'mr nevzorov', 'mr shnyrov', 'mr zelenskiy', 'mr biden', 'mr putin', 'mr arestovich', 'mr yanukovich', 'mr ushchenko', 'mr kychma',],
// 	verbFirstPosition: [
// 		['go', 'went', 'gone', 'going'],
// 		['drive', 'drove', 'driven', 'driving'],
// 		['forget', 'forgot', 'forhotten', 'forgeting',],
// 		['like', 'liked', 'liked', 'liking',],
// 		['want', 'wanted', 'wanted', 'wanting'],
// 		['need', 'needed', 'needed', 'needing',],
// 		['advise'],
// 		['accomplish'],
// 	],
// 	verbVThree: [
// 		// ['see', 'saw', 'seen', 'seeing'],
// 		// ['go', 'went', 'gone', 'going'],
// 		// ['drive', 'drove', 'driven', 'driving'],
// 		// ['show', 'showed', 'shown', 'shoving'],
// 		// ['forget', 'forgot', 'forhotten', 'forgeting'],
// 		// ['like', 'liked', 'liked', 'liking',],
// 		// ['want', 'wanted', 'wanted', 'wanting'],
// 		// ['need', 'needed', 'needed', 'needing',],
// 		// ['ask', 'asked', 'asked', 'asking'],
// 		// ['listen', 'listened', 'listened', 'listening'],
// 		// ['define', 'defined', 'defined', 'defining'],
// 		// ['teach', 'taught', 'taught', 'teaching'],
// 		// ['learn', 'learned', 'learned', 'learning'],
// 		// ['get'],
// 		// ['start'],
// 		// ['love'],
// 		// ['finish'],
// 		// ['come'],
// 		// ['understand'],
// 		// ['live'],
// 		// ['tell'],
// 		// ['put'],
// 		// ['hate'],
// 		// ['work'],
// 		// ['play'],
// 		// ['buy'],
// 		// ['look'],
// 		// ['hear'],
// 		// ['let'],
// 		// ['help'],
// 		// ['read'],
// 		// ['wait'],
// 		// ['explain'],
// 		// ['drink'],
// 		// ['think'],
// 		// ['sleep'],
// 		// ['know'],
// 		// ['speak'],
// 		// ['eat'],
// 		// ['write'],
// 		// ['make'],
// 		// ['fight'],
// 		// ['do'],
// 		// ['give'],
// 		// ['rest'],
// 		// ['take'],
// 		// ['sit'],
// 		// ['hope'],
// 		// ['pay'],
// 		// ['run'],
// 		// ['stay'],
// 		// ['have'],
// 		// ['answer'],
// 		// ['execute'],
// 		// ['abandon'],
// 		// ['accept'],
// 		// ['accomplish'],
// 		// ['accumulate'],
// 		// ['achieve'],
// 		// ['act'],
// 		// ['adapt'],
// 		// ['add'],
// 		// ['address'],
// 		// ['administer'],
// 		// ['admit'],
// 		// ['adopt'],
// 		// ['adore'],
// 		// ['advance'],
// 		// ['advise'],
// 		// ['affirm'],
// 		// ['agree'],
// 		// ['aid'],
// 		// ['allow'],
// 		// ['amuse'],
// 		// ['analyse'],
// 		// ['announce'],
// 		// ['apologize'],
// 		// ['appear'],
// 		// ['approach'],
// 		// ['argue'],
// 		// ['arrive'],
// 		// ['assist'],
// 		// ['awake'],
// 		// ['award'],
// 		['back'],
// 		['bake'],
// 		// ['balance'],
// 		// ['ban'],
// 		['bandage'],
// 		// ['bang'],
// 		// ['bear'],
// 		// ['become'],
// 		// ['beg'],
// 		// ['begin'],
// 		['care'],
// 		['decide'],
// 		['elect'],
// 		['fail'],
// 	],
// }

const wordsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SIMPLE_PRESENT_SIMPLEST:
		let randomName = capitalize(random(state.nameFromForm))
		let randomVerb = random(state.verbFromForm)
		return {
				...state,
				name: randomName,
				verb: randomVerb,
			}	

		case ADD_FORM_DATA:
			return {
				...state,
				nameFromForm: [...state.nameFromForm,  ...action.name.split(', ')] ,
				verbFromForm: action.verb.split(', '),
			}	
			
		default:
			return state
	}
}

export const executeSimplePresent = () => ({ type: SIMPLE_PRESENT_SIMPLEST })
export const addFormData = (name, verb) => ({ type: ADD_FORM_DATA, name, verb })



export default wordsReducer