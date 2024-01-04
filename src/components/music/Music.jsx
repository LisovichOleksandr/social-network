import React, { createContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getTrack } from '../../redux/musicSelector'
import classes from './Music.module.css'
import Track from './Track'
import PlayBar from './playBar/PlayBar'

const audio = new Audio()

export const AudioContext = createContext({})
const AudioProvider = ({ children }) => {
	const tracks = useSelector(state => getTrack(state))
	const [currentTrack, setCurrentTrack] = useState(tracks[0])
	const [isPlaying, setPlaying] = useState(false)

	const HandleToggleAudio = track => {
		audio.src = track.src
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track)
			setPlaying(true)

			audio.src = track.src
			audio.currentTime = 0
			audio.play()
			return
		}

		if (isPlaying) {
			audio.pause()
			setPlaying(false)
		} else {
			audio.play()
			setPlaying(true)
		}
		console.log('click')
	}
	const value = { audio, currentTrack, isPlaying, HandleToggleAudio }

	return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

const Music = props => {
	const tracks = useSelector(state => getTrack(state))
	const onSubmit = formData => {
		alert(formData.music)
	}
	return (
		<div className={classes.main}>
			<h2>Music</h2>
			<MusicReduxForm onSubmit={onSubmit} />
			<AudioProvider>
				<div>
					{tracks.map(track => (
						<Track key={track.id} audio={audio} {...track} />
					))}
					<PlayBar />
				</div>
			</AudioProvider>
		</div>
	)
}

const MusicForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder='Name Composition' name='music' component='textarea' />
			<button>Gooo</button>
		</form>
	)
}
const MusicReduxForm = reduxForm({ form: 'music' })(MusicForm)

export default Music
