import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
		dialogsData: state.dialogsData
	}
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer