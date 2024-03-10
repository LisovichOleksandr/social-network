import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import store from './redux/reduxStore.ts'
import './index.css'
import reportWebVitals from './reportWebVitals.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		{/* <React.StrictMode> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </React.StrictMode> */}
	</BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
