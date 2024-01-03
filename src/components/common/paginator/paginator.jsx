import styles from './paginator.module.css'
import { useState } from 'react'

const Paginator = ({ totalItems, pageSize, onPageChanged }) => {
	const [currentPage, setCurrentPage] = useState(1)

	let quantityPage = totalItems / pageSize
	const pages = []
	const getArrayPages = () => {
		if (currentPage <= 5) {
			for (let i = 1; i <= 10; i++) {
				pages.push(i)
			}
		}
		if (currentPage > 5 && currentPage < quantityPage - 5) {
			for (let i = currentPage - 5; i <= currentPage + 5; i++) {
				pages.push(i)
			}
		}
		if (currentPage >= quantityPage - 5 && currentPage <= quantityPage) {
			for (let i = quantityPage - 10; i < quantityPage; i++) {
				pages.push(i)
			}
		}
		pages.push(quantityPage)

		let r = pages.map(el => {
			return (
				<div key={el} className={styles.paginator__item}>
					<li className={currentPage === el ? styles.active : ''}>
						<button
							onClick={() => {
								setCurrentPage(el)
								onPageChanged(el)
							}}
						>
							{el}
						</button>
					</li>
				</div>
			)
		})
		return r
	}
	return (
		<div className={styles.container}>
			<ul>{getArrayPages()}</ul>
		</div>
	)
}

export default Paginator
