import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer.ts'
import authReducer from './authReducer.ts'
import dialogsReducer from './dialogsReducer.ts'
import etymologyReducer from './etymologyReducer'
import musicReducer from './musicReducer'
import newsReducer from './newsReducer'
import profileReducer from './profileReducer.ts'
import usersReducer from './usersReducer'
import wordsReducer from './wordsReducer'

let reducers = combineReducers({
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
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
