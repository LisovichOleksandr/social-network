import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { compose } from 'redux'

import withAuthRedirect from '../../hoc/redirect'

import {
	getStatus,
	getUserCurrent,
	savePhoto,
	saveProfile,
	setUserProfile,
	updateStatus,
} from '../../redux/profileReducer.ts'
import { actions } from '../../redux/usersReducer.ts'
import Profile from './Profile.tsx'

import { getAuthorizedUserId, getIsAuth } from '../../redux/authSelector.ts'
import { getProfile, getStatusSelector } from '../../redux/profileSelector.ts'

export const withRouter = Children => {
	return props => {
		const match = { params: useParams() }
		return <Children {...props} match={match} />
	}
}

class ProfileContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.match.params.id
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}

		this.props.getUserCurrent(userId)
		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prev) {
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

const mapStateToProps = state => {
	return {
		profile: getProfile(state),
		status: getStatusSelector(state),
		authorizedUserId: getAuthorizedUserId(state),
		isAuth: getIsAuth(state),
	}
}

export default compose(
	connect(mapStateToProps, {
		setUserProfile,
		setCurrentPage: actions.setCurrentPage,
		getUserCurrent,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
