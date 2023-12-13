import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/settings/Settings';
import Apparatus from './components/apparatusComp/apparatus';
// import DialogsContainer from './components/dialogs/DialogsContainer';
import MusicContainer from './components/music/MusicContainer';
import SimplePresentContainer from './components/apparatusComp/ItemApparatus/simplePresent/SimplepresentContainer';
import ComplexContainer from './components/apparatusComp/ItemApparatus/complex/ComplexContainer';
import NewsContainer from './components/news/NewsContainer';
// import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/login/login';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './components/profile/ProfileContainer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { WithSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));



function App(props) {

	useEffect(() => {
		props.initializeApp()
	})

	if (!props.initialized) {
		return <Preloader />
	}
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/dialogs' element={
						<Suspense fallback={<Preloader />}>
							<DialogsContainer />
						</Suspense>
					} />
					<Route path='/' element={<ProfileContainer />} />
					<Route path='/profile/:id?' element={<ProfileContainer />} />
					<Route path='/users' element={
						<Suspense fallback={<Preloader />}>
							<UsersContainer />
						</Suspense>} />
					<Route path='/news' element={<NewsContainer />} />
					<Route path='/music' element={<MusicContainer />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/apparatus' element={<Apparatus />} />
					<Route path='/apparatus/simplepresent' element={<SimplePresentContainer />} />
					<Route path='/apparatus/complex' element={<ComplexContainer />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</div >
		</div >
	);
}

const mapStateToprops = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToprops, { initializeApp }))(App);
