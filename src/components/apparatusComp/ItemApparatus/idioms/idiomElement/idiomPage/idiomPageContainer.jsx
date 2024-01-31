import { connect } from 'react-redux'

import IdiomPage from './idiomPage'
import { getCertainIdiom } from '../../../../../../redux/wordsSelector.ts'
import { setIdiom } from '../../../../../../redux/wordsReducer.ts'

const mapStateToProps = state => {
	return {
		certainIdiom: getCertainIdiom(state),
	}
}

const IdiomPageContainer = connect(mapStateToProps, { setIdiom })(IdiomPage)
export default IdiomPageContainer
