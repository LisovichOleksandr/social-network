import React from "react"
import classes from "./apparatus.module.css"
import Navetr from "./navApparatus/Navetr"


const Apparatus = (props) => {



	return (
		<div className={classes.container}>
			<Navetr />
			<h3>English Trening Apparatus</h3>
			<h4>EVERY TIME</h4>
			<div>
				<div>В розділі APPARATUS ви можете відпрацювати Англійську мову за двома напрямками: simple and comlpex.
					Тренування на simple аппараті, має в собі три можливих розвитки подій:
					<p>1. Іменник або займенник + дієслово. В такому випадку на Hi, Shi, а також іменник -
						добавляємо в кінець дієслова s чи es . Получаємо Igor wants, Olga goes.</p>
					<p>2. Іменник або займенник + дієслово + дієслово. Аналогічно з першим випадком, тільки
						якщо два дієслова разом то ставимо між ними to. Получаємо Igor wants to work, Olga goes to work.</p>
					<p>3. Іменник або займенник + модальне дієслово + дієслово. Модальне дієслово
						can, may, mast, will, shoud, would, ставимо на другу позицію і за ним зразу дієслово.
						Получаємо Igor can work, Olga mast go.</p>
				</div>
			</div>
		</div >
	)
}

export default Apparatus