import React from 'react'
import preloader from '../../../assets/images/fade-stagger-squares.svg'

let Preloader: React.FC = () => {
	return (
		<div>
			<img src={preloader} width='100px' height='100px' />
		</div>
	)
}

export default Preloader
