import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './MyPosts.module.css'
import Post from '../post/Post'
import {
	required,
	maxLengthCreator,
} from '../../../utils/validators/validators'
import { Textarea } from '../../common/formsControls/formsControls'
import { useDispatch, useSelector } from 'react-redux'
import { getPostData } from '../../../redux/profileSelector'
import { addPost } from '../../../redux/profileReducer'

const MyPosts = props => {
	const postData = useSelector(state => getPostData(state))
	const dispatch = useDispatch()
	let postElements = postData
		.reverse()
		.map((post, id) => (
			<Post key={id} message={post.post} likesCount={post.likesCount} />
		))
	const onSubmit = data => {
		dispatch(addPost(data.post))
	}
	return (
		<div className={classes.postsBlock}>
			<h3>Mu posts</h3>
			<PostReduxForm onSubmit={onSubmit} />
			<div className={classes.posts}>{postElements}</div>
		</div>
	)
}

let maxLengthCreator100 = maxLengthCreator(100)

const PostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder={'Write me please post'}
					name={'post'}
					component={Textarea}
					validate={[maxLengthCreator100, required]}
				/>
			</div>
			<div className={classes.but}>
				<button>Add Post</button>
			</div>
		</form>
	)
}
const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

export default MyPosts
