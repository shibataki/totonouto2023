import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TopPage from './TopPage'
//import SaunaWords from './SaunaWords'
const SaunaWords = React.lazy(() => import('./SaunaWords'))
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<TopPage />} />
					<Route
						path='saunaWords'
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<SaunaWords />
							</Suspense>
						}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
