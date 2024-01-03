import React from 'react'
import classes from './News.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsData } from '../../redux/newsSelector'
import { addNewsCreator, inputText } from '../../redux/newsReducer'

const News = props => {
	const { newsData, text } = useSelector(state => getNewsData(state))
	const dispatch = useDispatch()

	let newsWrite = e => {
		let enterText = e.target.value
		dispatch(inputText(enterText))
	}

	return (
		<div className={classes.main}>
			<div className={classes.sendNews}>
				<h2>News</h2>
				<input type='text' onChange={newsWrite} value={text} />
				<button onClick={() => dispatch(addNewsCreator())}>Send</button>
			</div>
			<div className={classes.news}>
				{newsData.map((el, id) => (
					<p key={id}>{el.news}</p>
				))}
			</div>
		</div>
	)
}

export default News
