import { useEffect, useState } from 'react'
import randomFn from '../../../../../redux/apparatusFn/randomFn'
import styles from './simultaneousTranslation.module.css'
import {
	getDataVerb,
	getDataVerbTranslate,
} from '../../../../../redux/wordsSelector'
import { useSelector } from 'react-redux'

const SimultaneousTranslation = () => {
	const verbTranslate = useSelector(state => {
		let data = getDataVerb(state)
		return data.map(word => word.translate)
	})
	const [step, setStep] = useState(3000)
	const [counterIteration, setCounterIteration] = useState(0)
	const [word, setWord] = useState('go')
	useEffect(() => {
		const id = setInterval(() => {
			setCounterIteration(c => c + 1)
			setWord(c => {
				let newWords = verbTranslate.filter(word => word !== c)
				return (c = randomFn(newWords))
			})
		}, step)
		return () => clearInterval(id)
	}, [step])
	return (
		<div>
			<div className={styles.world}>
				<b>{word}</b>
			</div>
			<div className={styles.spead__block}>
				<button onClick={() => setStep(step + 500)}>Slower</button>
				<button onClick={() => setStep(step - 500)}>Quickly</button>
				<b>{`${step} ms`}</b>
				<b>{`${counterIteration}`}</b>
			</div>
		</div>
	)
}

export default SimultaneousTranslation
