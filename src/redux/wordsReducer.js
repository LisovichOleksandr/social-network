import { capitalize, random } from '../utils/englishTreningApparatus/randomWord'

const SIMPLE_PRESENT_SIMPLEST = 'words/SIMPLE_PRESENT_SIMPLEST'
const ADD_FORM_DATA = 'words/ADD_FORM_DATA'
const ADD_PACKGE_WORD = 'words/ADD_PACKGE_WORD'
const SET_IDIOM = 'words/SET_IDIOM'
const ADD_FOR_REIVIEW = 'words/ADD_FOR_REIVIEW'
const SHOW_RESULT = 'words/SHOW_RESULT'
const SET_ALL_VERB = 'words/SET_ALL_VERB'

let initialState = {
	name: '',
	verb: '',
	verbTwo: '',
	isChange: true,
	nameFromForm: ['i', 'it', 'he', 'she', 'you', 'we', 'they'],
	verbFromForm: [],
	spellCheckOpt: [],
	dataVerb: [
		{
			id: 1,
			baseForm: 'like',
			translate: 'нравиться',
			pastSimple: 'liked',
			pastParticiple: 'liked',
			gerund: 'liking',
		},
		{
			baseForm: 'want',
			id: 2,
			translate: 'хотеть',
			pastSimple: 'wanted',
			pastParticiple: 'wanted',
			gerund: 'wanting',
		},
		{
			baseForm: 'need',
			id: 3,
			translate: 'нуждаться',
			pastSimple: 'needed',
			pastParticiple: 'needed',
			gerund: 'needing',
		},
		{
			id: 4,
			baseForm: 'ask',
			translate: 'спрашивать',
			pastSimple: 'asked',
			pastParticiple: 'asked',
			gerund: 'asking',
		},
		{
			id: 5,
			baseForm: 'listen',
			translate: 'слушать',
			pastSimple: 'listened',
			pastParticiple: 'listened',
			gerund: 'listening',
		},
		{
			id: 6,
			baseForm: 'get',
			translate: 'получать',
			pastSimple: 'got',
			pastParticiple: 'gotten',
			gerund: 'getting',
		},
		{
			id: 7,
			baseForm: 'start',
			translate: 'начать',
			pastSimple: 'started',
			pastParticiple: 'started',
			gerund: 'starting',
		},
		{
			id: 8,
			baseForm: 'love',
			translate: 'любить',
			pastSimple: 'loved',
			pastParticiple: 'loved',
			gerund: 'loving',
		},
		{
			id: 9,
			baseForm: 'finish',
			translate: 'заканчивать',
			pastSimple: 'finished',
			pastParticiple: 'finished',
			gerund: 'finishing',
		},
		{
			id: 10,
			baseForm: 'come',
			translate: 'приходить',
			pastSimple: 'came',
			pastParticiple: 'come',
			gerund: 'coming',
		},
		{
			id: 11,
			baseForm: 'understand',
			translate: 'понимать',
			pastSimple: 'understood',
			pastParticiple: 'understood',
			gerund: 'understanding',
		},
		{
			id: 12,
			baseForm: 'live',
			translate: 'жить',
			pastSimple: 'lived',
			pastParticiple: 'lived',
			gerund: 'living',
		},
		{
			id: 13,
			baseForm: 'tell',
			translate: 'рассказывать',
			pastSimple: 'told',
			pastParticiple: 'told',
			gerund: 'telling',
		},
		{
			id: 14,
			baseForm: 'put',
			translate: 'класть',
			pastSimple: 'put',
			pastParticiple: 'put',
			gerund: 'putting',
		},
		{
			id: 15,
			baseForm: 'hate',
			translate: 'ненавидеть',
			pastSimple: 'hated',
			pastParticiple: 'hated',
			gerund: 'hating',
		},
		{
			id: 16,
			baseForm: 'work',
			translate: 'работать',
			pastSimple: 'worked',
			pastParticiple: 'worked',
			gerund: 'working',
		},
		{
			id: 17,
			baseForm: 'teach',
			translate: 'преподавать',
			pastSimple: 'taught',
			pastParticiple: 'taught',
			gerund: 'teaching',
		},
		{
			id: 18,
			baseForm: 'play',
			translate: 'играть',
			pastSimple: 'played',
			pastParticiple: 'played',
			gerund: 'playing',
		},
		{
			id: 19,
			baseForm: 'buy',
			translate: 'покупать',
			pastSimple: 'bought',
			pastParticiple: 'bought',
			gerund: 'buying',
		},
		{
			id: 20,
			baseForm: 'see',
			translate: 'видеть',
			pastSimple: 'saw',
			pastParticiple: 'seen',
			gerund: 'seeing',
		},
		{
			id: 21,
			baseForm: 'learn',
			translate: 'учиться',
			pastSimple: 'learnt',
			pastParticiple: 'learnt',
			gerund: 'learned',
		},
		{
			id: 22,
			baseForm: 'look',
			translate: 'смотреть',
			pastSimple: 'looked',
			pastParticiple: 'looked',
			gerund: 'looking',
		},
		{
			id: 23,
			baseForm: 'hear',
			translate: 'слышать',
			pastSimple: 'heard',
			pastParticiple: 'heard',
			gerund: 'hearing',
		},
		{
			id: 24,
			baseForm: 'let',
			translate: 'позволять',
			pastSimple: 'let',
			pastParticiple: 'let',
			gerund: 'letting',
		},
		{
			id: 25,
			baseForm: 'help',
			translate: 'помогать',
			pastSimple: 'helped',
			pastParticiple: 'helped',
			gerund: 'helping',
		},
		{
			id: 26,
			baseForm: 'read',
			translate: 'читать',
			pastSimple: 'read',
			pastParticiple: 'read',
			gerund: 'reading',
		},
		{
			id: 27,
			baseForm: 'wait',
			translate: 'ждать',
			pastSimple: 'wait',
			pastParticiple: 'wait',
			gerund: 'waiting',
		},
		{
			id: 28,
			baseForm: 'explain',
			translate: 'объяснять',
			pastSimple: 'explained',
			pastParticiple: 'explained',
			gerund: 'explained',
		},
		{
			id: 29,
			baseForm: 'drink',
			translate: 'пить',
			pastSimple: 'drank',
			pastParticiple: 'drunk',
			gerund: 'drinking',
		},
		{
			id: 30,
			baseForm: 'think',
			translate: 'думать',
			pastSimple: 'thought',
			pastParticiple: 'thought',
			gerund: 'thinking',
		},
	],
	idioms: [
		{
			id: 1,
			idiom: 'a blessing in disguise',
			description: 'a good thing that seemed bad at first.',
			example: 'lossing that job was a blessing in disguise',
		},
		{
			id: 2,
			idiom: 'place for two Idiom',
			description: 'place for description two Idiom',
			example: 'place for example two Idiom',
		},
	],
	certainIdiom: {},
	examen: [],
	showResult: {},
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
				nameFromForm: [...state.nameFromForm, ...action.name.split(', ')],
				verbFromForm: action.verb.split(', '),
			}
		case ADD_PACKGE_WORD:
			let soughtAfterPackage = state.dataVerb.filter(
				verbPackage => action.id === verbPackage.id
			)
			if (state.spellCheckOpt.some(el => el.id === action.id)) {
				let newArrey = state.spellCheckOpt.filter(el => el.id !== action.id)
				return {
					...state,
					spellCheckOpt: [...newArrey],
				}
			} else {
				return {
					...state,
					spellCheckOpt: [...state.spellCheckOpt, ...soughtAfterPackage],
				}
			}
		case SET_IDIOM:
			let ac = action.id
			let findForId = state.idioms.filter(idiom => idiom.id == ac)
			return {
				...state,
				certainIdiom: findForId[0],
			}

		case ADD_FOR_REIVIEW:
			let r = action.word
			return {
				...state,
				examen: [...state.examen, action.word],
			}

		case SHOW_RESULT:
			let opt = state.spellCheckOpt
			let examen = state.examen.map(knowledge => {
				let value = Object.values(knowledge)[0]
				let key = Object.keys(knowledge)[0]
				let id = key.match(/\d+/)
				let timeId = key
					.split('')
					.filter(el => isNaN(Number(el)))
					.join('')
				let correctly = state.spellCheckOpt.filter(el => el.id == id)
				return {
					id: id[0],
					time: timeId,
					myVersion: value,
					original: correctly[0][timeId],
					translate: correctly[0].translate,
				}
			})
			return {
				...state,
				showResult: examen,
			}
		case SET_ALL_VERB:
			return {
				...state,

				spellCheckOpt: [...state.dataVerb],
			}
		default:
			return state
	}
}

export const executeSimplePresent = () => ({ type: SIMPLE_PRESENT_SIMPLEST })
export const addFormData = (name, verb) => ({
	type: ADD_FORM_DATA,
	name,
	verb,
})
export const addPackageWord = id => ({
	type: ADD_PACKGE_WORD,
	id,
})
export const setIdiom = id => ({
	type: SET_IDIOM,
	id,
})

export const addWordReview = word => ({
	type: ADD_FOR_REIVIEW,
	word,
})

export const showResultAC = () => ({
	type: SHOW_RESULT,
})

export const setAllVerb = () => ({
	type: SET_ALL_VERB,
})

export default wordsReducer
