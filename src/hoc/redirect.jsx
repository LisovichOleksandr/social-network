import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const authMapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

	const withAuthRedirect = (Children)=>{

		const AuthRedirectComponent = (props) => {
			if(!props.isAuth){ return <Navigate replace to ={"/login"} /> }
				return <Children {...props} />
		}

			let ConnectedAuthRedirectComponent = connect(authMapStateToProps)(AuthRedirectComponent)
		return ConnectedAuthRedirectComponent
	}


export default withAuthRedirect