import { useEffect, useState } from 'react'
import classes from '../ProfileInfo.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusSelector } from '../../../../redux/profileSelector'
import { updateStatus } from '../../../../redux/profileReducer'

const ProfileStatus = () => {
	const dispatch = useDispatch()
	const mainStatus = useSelector(state => getStatusSelector(state))
	const [status, setStatus] = useState(mainStatus)
	const [editMode, setMode] = useState(false)

	useEffect(() => {
		setStatus(mainStatus)
	}, [mainStatus])
	const activateEditMode = () => {
		setMode(true)
	}
	const deActivateEditMode = e => {
		e.preventDefault()
		setMode(false)
		dispatch(updateStatus(status))
	}

	return (
		<div>
			{!editMode && (
				<div className={classes.status}>
					<span placeholder={'Status'} onClick={activateEditMode}>
						{mainStatus || 'status null'}
					</span>
				</div>
			)}
			{editMode && (
				<div className={classes.status}>
					<input
						autoFocus={true}
						onBlur={deActivateEditMode}
						onChange={e => {
							setStatus(e.target.value)
						}}
						value={status}
					/>
				</div>
			)}
		</div>
	)
}

export default ProfileStatus
