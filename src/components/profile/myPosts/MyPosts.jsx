import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
	maxLengthCreator,
	required,
} from '../../../utils/validators/validators.ts'
import { Textarea } from '../../common/formsControls/formsControls.tsx'
import Post from '../post/Post'
import classes from './MyPosts.module.css'

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

const MyPosts = props => {
	let postElements = [...props.postData]
		.reverse()
		.map((post, id) => (
			<Post key={id} message={post.post} likesCount={post.likesCount} />
		))

	const onSubmit = data => {
		props.addPost(data.post)
	}
	console.log('RENDER')
	return (
		<div className={classes.postsBlock}>
			<h3>Mu posts</h3>
			<PostReduxForm onSubmit={onSubmit} />
			<div className={classes.posts}>
				{postElements}
				{/* {post} */}
			</div>
		</div>
	)
}

export default MyPosts
