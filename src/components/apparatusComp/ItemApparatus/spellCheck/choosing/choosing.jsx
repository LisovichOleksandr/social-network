import { useDispatch } from 'react-redux'
import styles from './choosing.module.css'
import { addPackageWord } from '../../../../../redux/wordsReducer'

const Choosing = ({ dataVerb, spellCheckOpt }) => {
	const dispatch = useDispatch()
	return (
		<div>
			<h2>Choose Select Pick Opt Elect Take</h2>
			<div className={styles.list}>
				<ul>
					{dataVerb.map(verbPackage => {
						let active = spellCheckOpt.some(obj => obj.id === verbPackage.id)
						return (
							<div
								key={verbPackage.id}
								className={active ? styles.favorites : undefined}
							>
								<li
									onClick={() => {
										dispatch(addPackageWord(verbPackage.id))
									}}
								>
									{verbPackage.baseForm}
								</li>
							</div>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Choosing
