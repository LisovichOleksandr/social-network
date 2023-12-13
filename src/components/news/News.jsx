import React from "react"
import classes from "./News.module.css"

const NewsForm = () => {
	return <forn>

	</forn>
}

const News = (props) => {

	let newsWrite = (e) => {
		let text = e.target.value
		props.inputText(text)
	}
	let onSendNewsClick = () => { props.onSendNewsClick()}

	let newsEl = props.newsPage.newsData.map((el, id) => <p key={id}>{el.news}</p>)

	return (
		<div className={classes.main}>
			<div className={classes.sendNews}>
				<h2>News</h2>
				<input type="text" onChange={newsWrite} value={props.newsPage.text} />
				<button onClick={onSendNewsClick}>Send</button>
			</div>
			<div className={classes.news}>{newsEl}</div>
		</div >
	)
}

export default News