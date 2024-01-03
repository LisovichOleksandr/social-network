import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import musicReducer from './musicReducer'
import wordsReducer from './wordsReducer'
import newsReducer from './newsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'
import etymologyReducer from './etymologyReducer'

let redusers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	musicPage: musicReducer,
	words: wordsReducer,
	newsPage: newsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
	etymology: etymologyReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	redusers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

// let store = createStore(redusers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
