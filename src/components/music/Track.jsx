import styles from './Music.module.css'
import { useContext } from 'react'
import sToMMSS from '../../utils/secondsToMMSS'
import { AudioContext } from './Music'

const Track = ({ audio, ...track }) => {
	const context = useContext(AudioContext)
	const { artists, duration, id, preview, src, title } = track

	const isCurrentTrack = context.currentTrack.id === track.id

	const formattedDuration = sToMMSS(duration)

	return (
		<div className={styles.track__container}>
			<div className={styles.imj__block}>
				<img src={preview} alt='' />
			</div>
			<div className={styles.main__block}>
				<address>{artists}</address>
				<b>{title}</b>
				<button onClick={() => context.HandleToggleAudio(track)}>
					{isCurrentTrack && context.isPlaying ? 'pause' : 'play'}
				</button>
				<input type='range' name='range' min={0} max={100} />
				<b>{formattedDuration}</b>
			</div>
		</div>
	)
}

export default Track
