import style from './showResult.module.css'

const ShowResult = ({ showResultData }) => {
	return (
		<div>
			{showResultData.map(resultItem => (
				<div className={style.container}>
					<b>{resultItem.translate}: </b>
					<b
						className={
							resultItem.myVersion !== resultItem.original ? style.error : ''
						}
					>
						{resultItem.myVersion}{' '}
					</b>
					<b className={style.original}> {resultItem.original} </b>
				</div>
			))}
		</div>
	)
}

export default ShowResult
