import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/Untitled.png'


let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
		let pages = []
		if (props.currentPage <= 5){
			for (let i = 1; i <= 10; i++){
				pages.push(i)
			}
		} if(props.currentPage > 5 && props.currentPage < pagesCount -5) {
			for (let i = props.currentPage - 5; i <=  props.currentPage + 5; i++){
				pages.push(i)
			}
		} if (props.currentPage >= pagesCount - 5 && props.currentPage <= pagesCount){
			for (let i = pagesCount - 10; i <  pagesCount; i++){
				pages.push(i)
			}
		}
		pages.push(pagesCount)
// debugger
		return <div>
		<div>
			 {/* this is pages oll list */}
			{pages.map((p, key) => {
				return <span key={key} className={props.currentPage === p && styles.selectedPage}
			onClick={() => {props.onPageChanged(p)}}>{p + '  '}</span>
			})}	
			{/* <Paginator currentPage={props.currentPage}
							pagesCount ={props.pagesCount}
							pageChangedMethod={props.onPageChanged}
							className={styles.selectedPage}/> */}
			{/* <Paginator pagesArray={pages} currentPage={props.currentPage} classNameStyles={styles.selectedPage} pageChangedMethod={props.onPageChanged}/> */}
		</div>
		{
			// this is a body of page that set users
			props.users.map(u => <div key={u.id} className={styles.userContainer}>

				<div>
					<div  >
						<NavLink to={'/profile/' + u.id}>
						<img  src={ u.photos.small != null ? u.photos.small : userPhoto } alt="photo"  className={styles.userPhoto} />
						</NavLink>
					</div>
					<div className={styles.button}>
						{u.followed 
						? <button disabled={props.followingInProgress} onClick={() => {
							props.unfollow(u.id)
							 }}>unfollow</button>
						: <button disabled={props.followingInProgress} onClick={() => {
							props.follow(u.id)
							 }}>Follow</button> }
					</div>
				</div>
				<div>
					<div>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</div>
					<div>
						<div>{'u.location.country'}</div>
						<div>{'u.location.sity'}</div>
					</div>
				</div>

				</div>)
		}
		<div>
			{/* oll list of pages */}
			{pages.map((p, key) => {
				return <span key={key} className={props.currentPage === p && styles.selectedPage}
			onClick={() => {props.onPageChanged(p)}}>{p + '  '}</span>
			})}	
		</div>
	</div>
}

const Paginator = ( currentPage, pagesCount, pageChangedMethod, classN) => {
	debugger	
	let pages = []
		if (currentPage <= 5){
			for (let i = 1; i <= 10; i++){
				pages.push(i)
			}
		} if(currentPage > 5 && currentPage < pagesCount -5) {
			for (let i = currentPage - 5; i <=  currentPage + 5; i++){
				pages.push(i)
			}
		} if (currentPage >= pagesCount - 5 && currentPage <= pagesCount){
			for (let i = pagesCount - 10; i <  pagesCount; i++){
				pages.push(i)
			}
		}
		pages.push(pagesCount)
	return ( 
		<div>
			{pages.map((p, key) => {
				return <span key={key} className={currentPage === p && classN}
			onClick={() => {pageChangedMethod(p)}}>{p + '  '}</span>
			})}
		</div> 
	)
}

export default Users