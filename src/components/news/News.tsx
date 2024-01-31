import React, { FC, useState } from 'react'
import classes from './News.module.css'
import { InitialNewsStateType } from '../../redux/newsReducer'

type PropsType = {
	inputText: (text: string) => void
	addNewsCreator: (text: string) => void
	newsPage: InitialNewsStateType
}

const News: FC<PropsType> = ({ inputText, addNewsCreator, newsPage }) => {
	const [text, setText] = useState<string>('')

	let newsWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
		let text = e.target.value
		setText(text)
	}
	let onSendNewsHandleClick = () => {
		debugger
		addNewsCreator(text)
		setText('')
	}

	let newsEl = newsPage.newsData.map((el, id) => <p key={id}>{el.news}</p>)

	return (
		<div className={classes.main}>
			<div className={classes.sendNews}>
				<h2>News</h2>
				<input
					placeholder='Create pleas a new news'
					type='text'
					onChange={newsWrite}
					value={text}
				/>
				<button onClick={onSendNewsHandleClick}>Send</button>
			</div>
			<div className={classes.news}>{newsEl}</div>
		</div>
	)
}

export default News
