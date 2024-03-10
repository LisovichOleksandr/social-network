import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/reduxStore'

const authMapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
})

type StatePropsType = {
	isAuth: boolean
}

type DispatchPropsType = {}

function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
	const AuthRedirectComponent: React.FC<
		StatePropsType & DispatchPropsType
	> = props => {
		let { isAuth, ...restProps } = props
		if (!isAuth) {
			return <Navigate replace to={'/login'} />
		}
		return <WrappedComponent {...(restProps as WCP)} />
	}

	let ConnectedAuthRedirectComponent = connect<
		StatePropsType,
		DispatchPropsType,
		WCP,
		AppStateType
	>(
		authMapStateToProps,
		{}
	)(AuthRedirectComponent)
	return ConnectedAuthRedirectComponent
}

export default withAuthRedirect
