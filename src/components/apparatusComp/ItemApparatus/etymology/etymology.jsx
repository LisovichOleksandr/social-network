import React, { useState } from 'react'
import YouTube from 'react-youtube'
import styles from './etymology.module.css'
import ItemEtymology from './itemEtymology/itemEtymology'
import Navetr from '../../navApparatus/Navetr'

const Etymology = ({ etymologyData }) => {
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
		<div>
			<Navetr />
			<div className={styles.etymology}>
				<h1>Etymology Yuri Dryzhbinski</h1>

				{!showVideo ? (
					<button onClick={() => setShowVideo(true)}>Show Video</button>
				) : (
					<>
						<YouTube
							videoId='9Es6HnqDn-E'
							opts={opts}
							onReady={onPlayerReady}
						/>
						<button onClick={() => setShowVideo(false)}>Show On</button>
					</>
				)}
				{etymologyData.map(el => (
					<ItemEtymology {...el} />
				))}
			</div>
		</div>
	)
}

export default Etymology
