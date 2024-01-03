import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
	follow,
	unfollow,
	setCurrentPage,
	setUsers,
	setTotalUsersCount,
	toggleFollowingProgress,
	togglePreloader,
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { getUsers } from '../../redux/usersReducer'
import withAuthRedirect from '../../hoc/redirect'
import {
	getUsersAll,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
	componentDidMount() {
		// This is download users on the page with help a THUNKCREATOR
		const { currentPage, pageSize } = this.props
		this.props.getUsers(currentPage, pageSize)
	}

	onPageChanged = pageNumber => {
		const { pageSize } = this.props
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					onPageChanged={this.onPageChanged}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
					setCurrentPage={this.props.setCurrentPage}
				/>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: getUsersAll(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		toggleFollowingProgress,
		getUsers,
		togglePreloader,
	}),
	withAuthRedirect
)(UsersContainer)
