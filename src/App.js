import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Idioms from './components/apparatusComp/ItemApparatus/idioms/idioms'
import Apparatus from './components/apparatusComp/apparatus'
import Preloader from './components/common/preloader/preloader'
import LoginPage from './components/login/login'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import ProfileContainer, {
	withRouter,
} from './components/profile/ProfileContainer'
import Settings from './components/settings/Settings'
import NavSoftSkills from './components/softSkills/navSoftSkills/navSoftSkills'
import SoftSkills from './components/softSkills/softSkills'
import { initializeApp } from './redux/appReducer'
import Music from './components/music/Music'
import IdiomPage from './components/apparatusComp/ItemApparatus/idioms/idiomElement/idiomPage/idiomPage'
import Etymology from './components/apparatusComp/ItemApparatus/etymology/etymology'
import DisplayEtymology from './components/apparatusComp/ItemApparatus/etymology/displayEtymology/displayEtymology'
import SpellCheck from './components/apparatusComp/ItemApparatus/spellCheck/spellCheck'
import FastStart from './components/apparatusComp/ItemApparatus/fastStart/fastStart'
import Complex from './components/apparatusComp/ItemApparatus/complex/Complex'
import SimplePresent from './components/apparatusComp/ItemApparatus/simplePresent/Simplepresent'
import Header from './components/header/Header'
const Dialogs = React.lazy(() => import('./components/dialogs/Dialogs'))
const Users = React.lazy(() => import('./components/users/Users'))

function App(props) {
	useEffect(() => {
		props.initializeApp()
	})

	if (!props.initialized) {
		return <Preloader />
	}
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route
						path='/dialogs'
						element={
							<Suspense fallback={<Preloader />}>
								<Dialogs />
							</Suspense>
						}
					/>
					<Route path='/' element={<ProfileContainer />} />
					<Route path='/profile/:id?' element={<ProfileContainer />} />
					<Route
						path='/users'
						element={
							<Suspense fallback={<Preloader />}>
								<Users />
							</Suspense>
						}
					/>
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/apparatus' element={<Apparatus />} />
					<Route path='/apparatus/simple-present' element={<SimplePresent />} />
					<Route path='/apparatus/complex' element={<Complex />} />
					<Route path='/apparatus/fast-start' element={<FastStart />} />
					<Route path='/apparatus/spellcheck' element={<SpellCheck />} />
					<Route path='/apparatus/idioms' element={<Idioms />} />
					<Route path='/apparatus/etymology' element={<Etymology />} />
					<Route
						path='/apparatus/etymology/:id?'
						element={<DisplayEtymology />}
					/>

					<Route path='/soft-skills' element={<NavSoftSkills />} />
					<Route path='/soft-skills/albert' element={<SoftSkills />} />

					<Route path='/apparatus/idioms/:id?' element={<IdiomPage />} />

					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)
