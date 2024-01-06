import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsAuth } from '../redux/authSelector'

const withAuthRedirect = Children => {
	const AuthRedirectComponent = props => {
		const isAuth = useSelector(state => getIsAuth(state))
		if (!isAuth) {
			return <Navigate replace to={'/login'} />
		}
		return <Children {...props} />
	}

	return AuthRedirectComponent
}

export default withAuthRedirect
