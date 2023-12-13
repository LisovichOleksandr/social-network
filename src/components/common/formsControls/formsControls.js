import classes from './formControls.module.css'


export const Textarea = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
			<div>
				<textarea {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const Input = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

//  const hoc = (Children, <element />) => { 
// 	Children = ({input, meta, ...props}) => {
// 	const hasError = meta.touched && meta.error
// 	return (
// 			<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
// 				<div>
// 					<input {...input} {...props} />
// 				</div>
// 				{hasError && <span>{meta.error}</span>}
// 			</div>
// 		)
// 	} 
// return Children
//  }
