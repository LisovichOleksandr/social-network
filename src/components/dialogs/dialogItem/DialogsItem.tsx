import React from 'react'
// import classes from "../Dialogs.module.css"
import { NavLink } from 'react-router-dom'
import classes from './DialogsItem.module.css'

type PropsType = {
	id: string
	name: number
}

const DialogItem: React.FC<PropsType> = props => {
	let path = '/dialogs/' + props.id
	return (
		<div className={classes.dialog}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvP1P-8tijqgk7CsLM80f7j7EUwTCpHXi2g&usqp=CAU' />
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem
