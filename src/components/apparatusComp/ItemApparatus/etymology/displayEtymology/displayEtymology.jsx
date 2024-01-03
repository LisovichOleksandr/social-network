import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

const DisplayEtymology = () => {
	const { id } = useParams()
	const showItem = useSelector(state => {
		let etymology = state.etymology.etymologyData
		let d = etymology.filter(item => item.id == id)
		return d
	})
	let data = showItem[0]
	return (
		<div>
			<NavLink to={`/apparatus/etymology`}>Back off</NavLink>
			<h1>{data.baseForm}</h1>
			<h2>{data.translate}</h2>
			{data.genesis.map(el => (
				<b>{`${el.baseForm} - ${el.translate} `}</b>
			))}
			<h3>{data.description}</h3>
		</div>
	)
}

export default DisplayEtymology
