import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import ComplexContainer from './components/apparatusComp/ItemApparatus/complex/ComplexContainer'
import DisplayEtymologyContainer from './components/apparatusComp/ItemApparatus/etymology/displayEtymology/displayEtymologyContainer'
import EtymologyContainer from './components/apparatusComp/ItemApparatus/etymology/etymologyContainer'
import FastStartContainer from './components/apparatusComp/ItemApparatus/fastStart/fastStartContainer'
import IdiomPageContainer from './components/apparatusComp/ItemApparatus/idioms/idiomElement/idiomPage/idiomPageContainer'
import IdiomsContainer from './components/apparatusComp/ItemApparatus/idioms/idiomsContainer'
import SimplePresentContainer from './components/apparatusComp/ItemApparatus/simplePresent/SimplepresentContainer'
import SpellCheckContainer from './components/apparatusComp/ItemApparatus/spellCheck/spellCheckContainer'
import Apparatus from './components/apparatusComp/apparatus'
import Preloader from './components/common/preloader/preloader'
import HeaderContainer from './components/header/HeaderContainer'
import LoginPage from './components/login/login'
import MusicContainer from './components/music/MusicContainer'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import ProfileContainer, {
	withRouter,
} from './components/profile/ProfileContainer'
import Settings from './components/settings/Settings'
import NavSoftSkills from './components/softSkills/navSoftSkills/navSoftSkills'
import SoftSkills from './components/softSkills/softSkills'
import { initializeApp } from './redux/appReducer'
const Dialogs = React.lazy(() => import('./components/dialogs/Dialogs'))
const Users = React.lazy(() => import('./components/users/Users'))

function App(props) {
	useEffect(() => {
		props.initializeApp()
	})

	if (!props.initialized) {
		return <Preloader />
	}
	//todo df eer e
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
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
					<Route path='/music' element={<MusicContainer />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/apparatus' element={<Apparatus />} />
					<Route
						path='/apparatus/simple-present'
						element={<SimplePresentContainer />}
					/>
					<Route path='/apparatus/complex' element={<ComplexContainer />} />
					<Route
						path='/apparatus/fast-start'
						element={<FastStartContainer />}
					/>
					<Route
						path='/apparatus/spellcheck'
						element={<SpellCheckContainer />}
					/>
					<Route path='/apparatus/idioms' element={<IdiomsContainer />} />
					<Route path='/apparatus/etymology' element={<EtymologyContainer />} />
					<Route
						path='/apparatus/etymology/:id?'
						element={<DisplayEtymologyContainer />}
					/>

					<Route path='/soft-skills' element={<NavSoftSkills />} />
					<Route path='/soft-skills/albert' element={<SoftSkills />} />

					<Route
						path='/apparatus/idioms/:id?'
						element={<IdiomPageContainer />}
					/>

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
