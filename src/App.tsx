import React from 'react'
import './App.css'
import Header from './Header'
import TopLogo from './TopLogo'
import { Box, Container } from '@mui/material'
import Introduction from './Introduction'
import Price from './price'
import GuidMap from './GuideMap'
import QA from './QA'
import Access from './Access'
import Footer from './Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
	typography: {
		fontFamily: ["'Zen Old Mincho', serif"].join(','),
	},
})

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						fontFamily: "'Sawarabi Mincho', serif",
					}}
				>
					<Container maxWidth='sm' sx={{ mb: '70px' }}>
						<Header />
						<TopLogo />
						<Introduction />
						<Price />
						<GuidMap />
						<QA />
						<Access />
					</Container>
					<Box
						sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}
					>
						<Footer />
					</Box>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default App
