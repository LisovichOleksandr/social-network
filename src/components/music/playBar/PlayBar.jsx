import { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Music'
import styles from './PlayBar.module.css'
import sToMMSS from '../../../utils/secondsToMMSS'

const PlayBar = () => {
	const [currentTime, setCurrentTime] = useState(0)
	const { audio, HandleToggleAudio, currentTrack, isPlaying } =
		useContext(AudioContext)
	const { artists, duration, preview, src, title } = currentTrack

	const formattedDuration = sToMMSS(duration)

	const sliderCurrentTime = Math.round((currentTime / duration) * 100)

	const formattedCurrentTime = sToMMSS(Math.round(currentTime))

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setCurrentTime(audio.currentTime)
		}, 1000)
	}, [])

	const handleChangeCurrentTime = e => {
		let v = e.target.value
		// const time = Math.round((e.target.value * 100) / duration)
		const time = Math.round((duration / 100) * e.target.value)
		setCurrentTime(time)
		audio.currentTime = time
	}
	return (
		<div className={styles.play__bar}>
			<div>
				<img src={preview} alt='' />
				<button onClick={() => HandleToggleAudio(currentTrack)}>
					{isPlaying ? 'pause' : 'play'}
				</button>
			</div>
			<div className={styles.credits}>
				<h4>{title}</h4>
				<p>{artists}</p>
			</div>
			<div className={styles.slider}>
				<p>{formattedCurrentTime}</p>
				<p>{formattedDuration}</p>
			</div>
			<input
				type='range'
				name='range'
				step={10}
				min={0}
				max={100}
				value={sliderCurrentTime}
				onChange={handleChangeCurrentTime}
			/>
		</div>
	)
}

export default PlayBar
