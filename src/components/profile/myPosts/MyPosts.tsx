import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

import {
	maxLengthCreator,
	required,
} from '../../../utils/validators/validators.ts'
import {
	GetStringKeys,
	Input,
	Textarea,
	createField,
} from '../../common/formsControls/formsControls.tsx'
import Post from '../post/Post.tsx'
import classes from './MyPosts.module.css'
import { PostDataType } from '../../../types/types.js'

let maxLengthCreator100 = maxLengthCreator(100)

type PropsType = {}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const PostForm: React.FC<
	InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType
> = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{createField<AddPostFormValuesTypeKeys>(Textarea, 'post', 'Your Post', [
					required,
				])}
			</div>
			<div className={classes.but}>
				<button>Add Post</button>
			</div>
		</form>
	)
}

const PostReduxForm = reduxForm<AddPostFormValuesType, PropsType>({
	form: 'post',
})(PostForm)

type AddPostFormValuesType = {
	post: string
}

export type MapPropsType = {
	postData: Array<PostDataType>
}
export type DispatchPropsType = {
	addPost: (data: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
	let postElements = [...props.postData]
		.reverse()
		.map((post, id) => (
			<Post key={id} message={post.post} likesCount={post.likesCount} />
		))

	const onSubmit = (data: AddPostFormValuesType) => {
		props.addPost(data.post)
	}
	return (
		<div className={classes.postsBlock}>
			<h3>Mu posts</h3>
			<PostReduxForm onSubmit={onSubmit} />
			<div className={classes.posts}>{postElements}</div>
		</div>
	)
}
const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized
