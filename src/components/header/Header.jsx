import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = props => {
	return (
		<header className={classes.header}>
			<img src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg' />
			<h4>EVERY TIME</h4>
			<div className={classes.login__block}>
				{props.isAuth ? (
					<div>
						{' '}
						{props.login + '' + props.info}{' '}
						<button onClick={props.logout}>Log out</button>{' '}
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
