import { useState } from 'react'
import Navetr from '../../navApparatus/Navetr'
import IdiomElement from './idiomElement/idiomElement'
import styles from './idioms.module.css'
import { NavLink } from 'react-router-dom'
import YouTube from 'react-youtube'

const Idioms = ({ idioms, certainIdiom, setIdiom }) => {
	const [showVideo, setShowVideo] = useState(false)
	const onPlayerReady = event => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo()
	}

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
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
			{/* <div>
        <a href="https://www.youtube.com/watch?v=Hm-n-_uqCvQ" target="_blank">
          Learn the 100 Most Common Idioms in 30 Minutes (with examples)
        </a>
      </div> */}
			<div>
				<IdiomElement idioms={idioms} setIdiom={setIdiom} />
			</div>
		</div>
	)
}

export default Idioms
