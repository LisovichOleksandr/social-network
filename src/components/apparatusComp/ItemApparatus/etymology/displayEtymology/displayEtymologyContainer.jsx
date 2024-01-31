import { connect } from 'react-redux'

import DisplayEtymology from './displayEtymology'
import { getEtymologyData } from '../../../../../redux/etymologySelector.ts'

const mapStateToProps = state => {
	return {
		etymologyData: getEtymologyData(state),
	}
}
const DisplayEtymologyContainer = connect(mapStateToProps, {})(DisplayEtymology)

export default DisplayEtymologyContainer
