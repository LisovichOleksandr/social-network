import React from 'react'

import classes from './Post.module.css'

type PropsType = {
	likesCount: number
	message: string
}

const Post: React.FC<PropsType> = props => {
	return (
		<div className={classes.item}>
			<div className={classes.person}>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvP1P-8tijqgk7CsLM80f7j7EUwTCpHXi2g&usqp=CAU' />
				<span>like</span> {props.likesCount}
			</div>
			<div className={classes.mess}>
				<p>{props.message}</p>
			</div>
		</div>
	)
}

export default Post
