import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { compose } from 'redux'

import withAuthRedirect from '../../hoc/redirect.tsx'

import {
	getStatus,
	getUserCurrent,
	savePhoto,
	saveProfile,
	updateStatus,
} from '../../redux/profileReducer.ts'
import { actions } from '../../redux/usersReducer.ts'
import Profile from './Profile.tsx'

import { getAuthorizedUserId, getIsAuth } from '../../redux/authSelector.ts'
import { getProfile, getStatusSelector } from '../../redux/profileSelector.ts'
import { AppStateType } from '../../redux/reduxStore.ts'
import { ProfileType } from '../../types/types.ts'

type WithRouterProps = {
	match: { params: { id: number | null } }
}

export const withRouter = <Props extends WithRouterProps>(
	Children: React.ComponentType<Props>
) => {
	return (props: any) => {
		const match = { params: useParams() }
		return <Children {...props} match={match} />
	}
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
	getUserCurrent: (userId: number) => void
	getStatus: (userId: number) => void
	updateStatus: (status: string) => void
	savePhoto: (file: File) => void
	saveProfile: (formData: ProfileType) => Promise<any>
}

type PropsType = MapPropsType & DispatchPropsType & WithRouterProps

class ProfileContainer extends React.Component<PropsType> {
	refreshProfile() {
		let userId = this.props.match.params.id
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				// todo: may be replace push with redirect?
				this.props.history.push('/login')
			}
		}

		if (!userId) {
			console.error('ID should exist in URI params or in state')
		} else {
			this.props.getUserCurrent(userId)
			this.props.getStatus(userId)
		}
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prev: PropsType) {
		if (this.props.match.params.id != prev.match.params.id)
			this.refreshProfile()
	}

	render() {
		return (
			<Profile
				{...this.props}
				savePhoto={this.props.savePhoto}
				isOwner={!this.props.match.params.id}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				saveProfile={this.props.saveProfile}
			/>
		)
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {
		profile: getProfile(state),
		status: getStatusSelector(state),
		authorizedUserId: getAuthorizedUserId(state),
		isAuth: getIsAuth(state),
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {
		// setCurrentPage: actions.setCurrentPage,
		getUserCurrent,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
