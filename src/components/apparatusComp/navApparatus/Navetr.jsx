import React from 'react'
import classes from './Navetr.module.css'
import { NavLink } from 'react-router-dom'

const Navetr = props => {
	return (
		<div className={classes.container}>
			<nav className={classes.headApparatNav}>
				<div className={classes.item}>
					<NavLink to='/apparatus/simple-present' active={classes.active}>
						Simple Present
					</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/apparatus/complex'>Complex</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/apparatus/fast-start'>Fast Start</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/apparatus/spellcheck'>Spell Check</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/apparatus/idioms'>Idioms</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/apparatus/etymology'>Etymology</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default Navetr
