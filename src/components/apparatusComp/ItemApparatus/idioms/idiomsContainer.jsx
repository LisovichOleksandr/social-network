import { connect } from 'react-redux'

import Idioms from './idioms'
import { getIdioms } from '../../../../redux/wordsSelector.ts'
import { setIdiom } from '../../../../redux/wordsReducer.ts'

const mapStateToProps = state => {
	return {
		idioms: getIdioms(state),
	}
}
const IdiomsContainer = connect(mapStateToProps, { setIdiom })(Idioms)
export default IdiomsContainer
