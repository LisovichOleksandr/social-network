import { useState } from 'react'
import Navetr from '../../navApparatus/Navetr'
import styles from './spellCheck.module.css'
import Choosing from './choosing/choosing'
import OptReduxForm from './formOpt/formOpt'
import { reset } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import ShowResult from './showResult/showResult'
import {
	getDataVerb,
	getExamenList,
	getItemWithOpt,
	getShowResult,
	getSpellCheckOpt,
} from '../../../../redux/wordsSelector'
import {
	addWordReview,
	setAllVerb,
	showResultAC,
} from '../../../../redux/wordsReducer'
const SpellCheck = () => {
	const showResultData = useSelector(state => getShowResult(state))
	const examen = useSelector(state => getExamenList(state))
	const itemOpt = useSelector(state => getItemWithOpt(state))
	const spellCheckOpt = useSelector(state => getSpellCheckOpt(state))
	const dataVerb = useSelector(state => getDataVerb(state))

	const [editMode, setEditMode] = useState(false)
	const [showResult, setShowResult] = useState(false)

	const dispatch = useDispatch()

	const onSubmit = formData => {
		dispatch(addWordReview(formData))
		dispatch(reset('opt'))
	}
	return (
		<div>
			<Navetr />
			<div className={styles.grid__container}>
				<div>
					<h1>EXAMEN</h1>
					<button onClick={() => setEditMode(!editMode)}>
						{editMode ? 'start' : 'Go For'}
					</button>
					<button onClick={() => dispatch(setAllVerb())}>Set All</button>
				</div>
				{editMode ? (
					<Choosing dataVerb={dataVerb} spellCheckOpt={spellCheckOpt} />
				) : (
					<div>
						{Object.keys(itemOpt).length === 0 ? (
							<div>Clear</div>
						) : (
							<OptReduxForm onSubmit={onSubmit} itemOpt={itemOpt} />
						)}{' '}
						{examen.length > spellCheckOpt.length * 2 ? (
							<button
								onClick={() => {
									setShowResult(c => !c)
									dispatch(showResultAC())
								}}
							>
								Show Result
							</button>
						) : (
							''
						)}
						{showResult ? <ShowResult showResultData={showResultData} /> : ''}
					</div>
				)}
			</div>
		</div>
	)
}
export default SpellCheck
