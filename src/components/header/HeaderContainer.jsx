import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/authReducer';

const HeaderContainer = (props) => {

// 	useEffect( () => {
// props.getAuthUserData()
// 	} )

	return <Header {...props}/>
}
const mapStateToProps = (state) => ({
				isAuth: state.auth.isAuth,
				login: state.auth.login,
				info: state.auth.info,
	
})



export default connect (mapStateToProps, {logout}) (HeaderContainer)
