import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo, getIsAuth, getLogin } from '../../redux/authSelector'
import { logout } from '../../redux/authReducer'

const Header = () => {
	const isAuth = useSelector(state => getIsAuth(state))
	const login = useSelector(state => getLogin(state))
	const info = useSelector(state => getInfo(state))

	const dispatch = useDispatch()

	return (
		<header className={classes.header}>
			<img src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg' />
			<h4>EVERY TIME</h4>
			<div className={classes.login__block}>
				{isAuth ? (
					<div>
						{' '}
						{login + '' + info}{' '}
						<button onClick={() => dispatch(logout())}>Log out</button>{' '}
					</div>
				) : (
					<NavLink to={'/login'} activeclassname={classes.active}>
						{' '}
						Login{' '}
					</NavLink>
				)}
			</div>
		</header>
	)
}
export default Header
