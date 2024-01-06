import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Profile from './Profile'
import {
	savePhoto,
	setUserProfile,
	updateStatus,
} from '../../redux/profileReducer'
import { setCurrentPage } from '../../redux/usersReducer'
import { getUserCurrent } from '../../redux/profileReducer'
import { getStatus } from '../../redux/profileReducer'
import withAuthRedirect from '../../hoc/redirect'
import { getProfile, getStatusSelector } from '../../redux/profileSelector'
import { getAuthorizedUserId, getIsAuth } from '../../redux/authSelector'

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
			// {...this.props}
			// isOwner={!this.props.match.params.id}
			// profile={this.props.profile}
			// status={this.props.status}
			// savePhoto={this.props.savePhoto}
			// updateStatus={this.props.updateStatus}
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
		setCurrentPage,
		getUserCurrent,
		getStatus,
		updateStatus,
		savePhoto,
	}),
	withAuthRedirect
)(ProfileContainer)
