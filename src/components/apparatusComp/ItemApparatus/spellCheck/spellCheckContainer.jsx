import { connect } from 'react-redux'
import SpellCheck from './spellCheck'
import {
	getDataVerb,
	getExamenList,
	getItemWithOpt,
	getShowResult,
	getSpellCheckOpt,
} from '../../../../redux/wordsSelector'
import {
	addPackageWord,
	addWordReview,
	setAllVerb,
	showResultAC,
} from '../../../../redux/wordsReducer.ts'

const mapStateToProps = state => {
	return {
		dataVerb: getDataVerb(state),
		spellCheckOpt: getSpellCheckOpt(state),
		itemOpt: getItemWithOpt(state),
		examen: getExamenList(state),
		showResultData: getShowResult(state),
	}
}
const SpellCheckContainer = connect(mapStateToProps, {
	addPackageWord,
	addWordReview,
	showResultAC,
	setAllVerb,
})(SpellCheck)
export default SpellCheckContainer
