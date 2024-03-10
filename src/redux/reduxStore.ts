import {
	Action,
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
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

export type BaseThunkType<
	A extends Action = Action,
	R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

// export type InferActionsTypes<
// 	T extends { [key: string]: (...args: any[]) => any }
// > = ReturnType<PropertiesType<T>>

export type InferActionsTypes<T> = T extends {
	[key: string]: (...args: any[]) => infer U
}
	? U
	: never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

export type AppDispatch = typeof store.dispatch
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store
