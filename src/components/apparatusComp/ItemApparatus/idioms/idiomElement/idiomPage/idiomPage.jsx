import style from './idiomPage.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Navetr from '../../../../navApparatus/Navetr'
import { useDispatch, useSelector } from 'react-redux'
import { getCertainIdiom } from '../../../../../../redux/wordsSelector'
import { setIdiom } from '../../../../../../redux/wordsReducer'

const IdiomPage = () => {
	const dispatch = useDispatch()
	const certainIdiom = useSelector(state => getCertainIdiom(state))
	//   const match = { params: useParams() };
	const { id } = useParams()
	useEffect(() => {
		dispatch(setIdiom(id))
	}, [id])
	return (
		<div>
			<div>
				<Navetr />
			</div>
			<h1>{certainIdiom.idiom}</h1>
			<p>
				Description: <b>{certainIdiom.description}</b>
			</p>
			<p>
				Example: <b>{certainIdiom.example}</b>
			</p>
		</div>
	)
}
export default IdiomPage
