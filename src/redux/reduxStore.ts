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
import etymologyReducer from './etymologyReducer.ts'
import musicReducer from './musicReducer.ts'
import newsReducer from './newsReducer.ts'
import profileReducer from './profileReducer.ts'
import usersReducer from './usersReducer.ts'
import wordsReducer from './wordsReducer.ts'

let rootReducer = combineReducers({
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

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store
