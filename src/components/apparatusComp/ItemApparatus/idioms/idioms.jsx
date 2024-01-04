import { useState } from 'react'
import Navetr from '../../navApparatus/Navetr'
import IdiomElement from './idiomElement/idiomElement'
import styles from './idioms.module.css'
import { NavLink } from 'react-router-dom'
import YouTube from 'react-youtube'
import { useSelector } from 'react-redux'
import { getIdioms } from '../../../../redux/wordsSelector'

const Idioms = () => {
	const idioms = useSelector(state => getIdioms(state))
	const [showVideo, setShowVideo] = useState(false)

	const onPlayerReady = event => {
		event.target.pauseVideo()
	}

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	}

	return (
		<div className={styles.idioms}>
			<Navetr />
			<h1>Learn the 100 Most Common Idioms</h1>

			{!showVideo ? (
				<button onClick={() => setShowVideo(true)}>Show Video</button>
			) : (
				<>
					<YouTube videoId='Hm-n-_uqCvQ' opts={opts} onReady={onPlayerReady} />
					<button onClick={() => setShowVideo(false)}>Show On</button>
				</>
			)}
			<div>
				<IdiomElement idioms={idioms} />
			</div>
		</div>
	)
}

export default Idioms
