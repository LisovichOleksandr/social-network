import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../redux/profileReducer.ts'
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts.tsx'
import { AppStateType } from '../../../redux/reduxStore.ts'

const mapStateToProps = (state: AppStateType) => {
	return {
		postData: state.profilePage.postData,
	}
}

const MyPostsContainer = connect<
	MapPropsType,
	DispatchPropsType,
	{},
	AppStateType
>(mapStateToProps, {
	addPost: actions.addPost,
})(MyPosts)

export default MyPostsContainer
