import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer.ts'
import Header from './Header'

const HeaderContainer = props => {
	// 	useEffect( () => {
	// props.getAuthUserData()
	// 	} )

	return <Header {...props} />
}
const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	info: state.auth.info,
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
