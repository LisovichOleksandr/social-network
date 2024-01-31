import { connect } from 'react-redux'

import Etymology from './etymology'
import { getEtymologyData } from '../../../../redux/etymologySelector.ts'

const mapStateToProps = state => {
	return {
		etymologyData: getEtymologyData(state),
	}
}

const EtymologyContainer = connect(mapStateToProps, {})(Etymology)

export default EtymologyContainer
