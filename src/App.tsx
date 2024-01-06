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
					<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
						<Header />
					</Box>
					<Container maxWidth='sm' sx={{ mt: '40px', mb: '70px' }}>
						<Box id='top' sx={{ mt: '60px' }}>
							<TopLogo />
						</Box>
						<Box id='introduction'>
							<Introduction />
						</Box>
						<Box id='price'>
							<Price />
						</Box>
						<Box id='guidMap'>
							<GuidMap />
						</Box>
						<Box id='QA'> </Box>
						<QA />

						<Box id='access'>
							<Access />
						</Box>
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
