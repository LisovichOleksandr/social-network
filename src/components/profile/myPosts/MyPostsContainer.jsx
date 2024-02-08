import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../redux/profileReducer.ts'
import MyPosts from './MyPosts'

const mapStateToProps = state => {
	return {
		postData: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
		dialogsData: state.dialogsData,
	}
}

const MyPostsContainer = connect(mapStateToProps, { addPost: actions.addPost })(
	MyPosts
)

export default MyPostsContainer
