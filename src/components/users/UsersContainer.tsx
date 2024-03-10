import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/redirect.tsx'
import { AppStateType } from '../../redux/reduxStore.ts'
import {
	follow,
	getUsers,
	actions,
	unFollow,
} from '../../redux/usersReducer.ts'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsersAll,
} from '../../redux/usersSelectors.ts'
import { UserType } from '../../types/types.ts'
import Preloader from '../common/preloader/preloader.tsx'
import Users from './Users.tsx'

type OwnPropsType = {
	title: string
}

type MapDispatchPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	getUsers: (currentPage: number, pageSize: number) => void
	setCurrentPage: (pageNumber: number) => void
}

type MapStatePropsType = {
	currentPage: number
	pageSize: number
	isFetching: boolean
	totalUsersCount: number
	users: Array<UserType>
	followingInProgress: boolean
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.getUsers(currentPage, pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		const { pageSize } = this.props
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, pageSize)
	}

	render() {
		return (
			<>
				<h2>{this.props.title}</h2>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					users={this.props.users}
					onPageChanged={this.onPageChanged}
					followingInProgress={this.props.followingInProgress}
					unFollow={this.props.unFollow}
					follow={this.props.follow}
				/>
			</>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
		mapStateToProps,
		{
			follow,
			unFollow,
			getUsers,
			setCurrentPage: actions.setCurrentPage,
		}
	),
	withAuthRedirect
)(UsersContainer)
