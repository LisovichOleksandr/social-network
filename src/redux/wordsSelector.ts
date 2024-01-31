import { createSelector } from 'reselect'
import { random } from '../utils/englishTreningApparatus/randomWord'
import { AppStateType } from './reduxStore'
import { DataVerbType } from './wordsReducer'

export const getIdioms = (state: AppStateType) => {
	return state.words.idioms
}

export const getCertainIdiom = (state: AppStateType) => {
	return state.words.certainIdiom
}

export const getDataVerb = (state: AppStateType) => {
	return state.words.dataVerb
}

export const getSpellCheckOpt = (state: AppStateType) => {
	return state.words.spellCheckOpt
}

export const getExamenList = (state: AppStateType) => {
	return state.words.examen
}

type ItemWithOptType = {
	id: number
	translate: string
	check: Array<string>
}

export const getItemWithOpt = createSelector(
	getSpellCheckOpt,
	getExamenList,
	(OptArray: Array<DataVerbType>) => {
		if (OptArray.length === 0) {
			return {}
		} else {
			let element: DataVerbType = random(OptArray)
			let newObject = (arr: DataVerbType) => {
				let identification: string = random([
					'baseForm',
					'gerund',
					'pastParticiple',
					'pastSimple',
				])
				let newArr: ItemWithOptType = {
					id: arr.id,
					translate: arr.translate,
					check: [identification, arr[identification]],
				}
				return newArr
			}
			let createObject = newObject(element)
			return createObject
		}
	}
)

export const getShowResult = (state: AppStateType) => {
	return state.words.showResult
}

export const getName = (state: AppStateType) => {
	return state.words.name
}

export const getVerb = (state: AppStateType) => {
	return state.words.verb
}

export const getVerbTwo = (state: AppStateType) => {
	return state.words.verbTwo
}
