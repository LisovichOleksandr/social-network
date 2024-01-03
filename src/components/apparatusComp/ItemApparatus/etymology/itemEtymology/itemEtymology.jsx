import { NavLink } from 'react-router-dom'

const ItemEtymology = ({ id, baseForm, translate, genesis, description }) => {
	return (
		<div>
			<NavLink to={`/apparatus/etymology/${id}`}>{baseForm}</NavLink>
		</div>
	)
}

export default ItemEtymology
