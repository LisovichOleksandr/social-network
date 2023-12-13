import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import DialogItem from '../dialogs/dialogItem/DialogsItem';
import FriendsThre from '../friends/Friends';
import Friends from '../friends/Friends';

const Navbar = (props) => <nav className={classes.nav}>
	<div className={classes.item}>
		<NavLink to='/profile' activeclassname={classes.active}>Profile</NavLink>
	</div>
	<div className={`${classes.item} ${classes.active}`}>
		<NavLink to='/dialogs' activeclassname={classes.activelink}>Messages</NavLink>
	</div>
	<div className={classes.item}>
		<NavLink to='/news' activeclassname={classes.activelink}>News</NavLink>
	</div>
	<div className={classes.item}>
		<NavLink to='/music' activeclassname={classes.activelink}>Music</NavLink>
	</div>
	<div className={classes.item}>
		<NavLink to='/settings' activeclassname={classes.activelink}>Settings</NavLink>
	</div>
	<div className={classes.item}>
		<NavLink to='/apparatus' activeclassname={classes.activelink}>Apparatus</NavLink>
	</div>
	<div className={`${classes.item} ${classes.friends}`}>
		<NavLink to='/friends' activeclassname={classes.activelink}>Friends</NavLink>
	</div>
	<div className={`${classes.item}`}>
		<NavLink to='/users' activeclassname={classes.activelink}>Find Users</NavLink>
	</div>
	
</nav>

export default Navbar