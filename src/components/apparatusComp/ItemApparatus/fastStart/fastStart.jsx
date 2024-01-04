import { useState } from 'react'
import Navetr from '../../navApparatus/Navetr'
import styles from './fastStart.module.css'
import SimultaneousTranslation from './simultaneousTranslation/simultaneousTranslation'

const FastStart = () => {
	const [editMode, setEditMode] = useState(false)

	return (
		<div className={styles.container}>
			<div>
				<Navetr />
				<h2>Fast Start</h2>
				<div className={!editMode ? styles.on__block : styles.off__block}>
					<button onClick={() => setEditMode(!editMode)}>
						{!editMode ? 'Start' : 'Stop'}
					</button>
				</div>
			</div>
			<div>
				{editMode ? (
					<SimultaneousTranslation />
				) : (
					'This`s training is name Fast Start. Forward to Success'
				)}
			</div>
		</div>
	)
}

export default FastStart
