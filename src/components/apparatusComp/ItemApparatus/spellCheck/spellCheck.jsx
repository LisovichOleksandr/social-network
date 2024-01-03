import { useState } from 'react'
import Navetr from '../../navApparatus/Navetr'
import styles from './spellCheck.module.css'
import Choosing from './choosing/choosing'
import OptReduxForm from './formOpt/formOpt'
import { reset } from 'redux-form'
import { useDispatch } from 'react-redux'
import ShowResult from './showResult/showResult'
const SpellCheck = ({
	dataVerb,
	spellCheckOpt,
	addPackageWord,
	itemOpt,
	addWordReview,
	examen,
	showResultData,
	showResultAC,
	setAllVerb,
}) => {
	const [editMode, setEditMode] = useState(false)
	const [showResult, setShowResult] = useState(false)

	const dispatch = useDispatch()
	const onSubmit = formData => {
		addWordReview(formData)
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
					<button onClick={setAllVerb}>Set All</button>
				</div>
				{editMode ? (
					<Choosing
						dataVerb={dataVerb}
						spellCheckOpt={spellCheckOpt}
						addPackageWord={addPackageWord}
					/>
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
									showResultAC()
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
