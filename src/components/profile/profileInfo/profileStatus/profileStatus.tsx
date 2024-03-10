import React, { ChangeEvent, useEffect, useState } from 'react'
import classes from '../ProfileInfo.module.css'

type PropsType = {
	status: string
	updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = props => {
	const [status, setStatus] = useState(props.status)
	const [editMode, setMode] = useState(false)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])
	const activateEditMode = () => {
		setMode(true)
	}
	const deActivateEditMode = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.charCode === 13 || e.type === 'blur') {
			e.preventDefault()
			setMode(false)
			props.updateStatus(status)
		}
	}

	return (
		<div>
			{!editMode && (
				<div className={classes.status}>
					<span placeholder={'Status'} onClick={activateEditMode}>
						{props.status || 'status null'}
					</span>
				</div>
			)}
			{editMode && (
				<div className={classes.status}>
					<input
						autoFocus={true}
						onBlur={deActivateEditMode}
						onKeyPress={deActivateEditMode}
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
