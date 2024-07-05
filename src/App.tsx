import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TopPage from './TopPage'
import SaunaWords from './SaunaWords'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<TopPage />} />
					<Route path='/saunaWords' element={<SaunaWords />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
