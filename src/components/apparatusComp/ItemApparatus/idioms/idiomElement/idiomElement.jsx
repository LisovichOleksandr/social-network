import { NavLink } from 'react-router-dom'
import style from './idiomElement.module.css'
import { useDispatch } from 'react-redux'
import { setIdiom } from '../../../../../redux/wordsReducer'

const IdiomElement = ({ idioms }) => {
	const dispatch = useDispatch()
	return (
		<div className={style.idiom}>
			<ul>
				{idioms.map(idiom => (
					<NavLink to={`/apparatus/idioms/${idiom.id}`}>
						<li
							onClick={() => {
								dispatch(setIdiom(idiom.id))
							}}
							key={idiom.id}
						>
							{idiom.idiom}
						</li>
					</NavLink>
				))}
			</ul>
		</div>
	)
}
export default IdiomElement
