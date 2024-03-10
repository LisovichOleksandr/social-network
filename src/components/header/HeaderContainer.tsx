import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer.ts'
import Header, { DispatchPropsType, MapPropsType } from './Header.tsx'
import { AppStateType } from '../../redux/reduxStore.js'

const HeaderContainer: React.FC<MapPropsType & DispatchPropsType> = props => {
	// 	useEffect( () => {
	// props.getAuthUserData()
	// 	} )

	return <Header {...props} />
}
const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	info: state.auth.info,
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
	mapStateToProps,
	{ logout }
)(HeaderContainer)
