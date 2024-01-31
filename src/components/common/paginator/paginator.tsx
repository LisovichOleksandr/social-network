import React, { FC } from 'react'
import styles from './paginator.module.css'
import { useState } from 'react'

type PropsType = {
	totalItems: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
}

const Paginator: FC<PropsType> = ({ totalItems, pageSize, onPageChanged }) => {
	const [currentPage, setCurrentPage] = useState<number>(1)

	let quantityPage = totalItems / pageSize
	const pages: Array<number> = []

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

	return (
		<div className={styles.container}>
			<ul>
				{pages.map(elNumber => (
					<div key={elNumber} className={styles.paginator__item}>
						<li className={currentPage === elNumber ? styles.active : ''}>
							<button
								onClick={() => {
									setCurrentPage(elNumber)
									onPageChanged(elNumber)
								}}
							>
								{elNumber}
							</button>
						</li>
					</div>
				))}
			</ul>
		</div>
	)
}

export default Paginator
