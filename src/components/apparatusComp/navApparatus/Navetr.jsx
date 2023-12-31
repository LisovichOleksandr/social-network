import React from "react"
import classes from "./Navetr.module.css"
import { NavLink } from "react-router-dom"

const Navetr = (props) => {
	return (
		<div className={classes.container}>
			<nav className={classes.headApparatNav}>
				<div className={classes.item}>
					<NavLink to='/apparatus/simplepresent' activeclassname={classes.active} >Simple Present</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/apparatus/complex' >Complex</NavLink>
				</div>
			</nav>
		</div >
	)
}

export default Navetr