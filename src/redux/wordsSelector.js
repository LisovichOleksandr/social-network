import { createSelector } from "reselect"


export const getName = (state) => {
	return state.words.name
}

export const getNameSelector = createSelector(iYouHeShe => {
	debugger
	return iYouHeShe[Math.floor(Math.random() * iYouHeShe.length)]
	}
)



export const getVerb = (state) => {
	return state.words.verb
}

export const getVerbTwo = (state) => {
	return state.words.verbTwo
}

export const getIYouHeShe = (state) => {
	return state.words.iYouHeShe
}

export const getIsChange = (state) => state.words.isChange