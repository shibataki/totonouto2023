import React from 'react'
import './App.css'
import Header from './Header'
import TopLogo from './TopLogo'
import { Box, Container, Typography } from '@mui/material'

//import Introduction from './Introduction'
//import Price from './price'
//import GuideMap from './GuideMap'
//import QA from './QA'
//import Access from './Access'
//import Campaign from './Campaign'
import Footer from './Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import lazyImport from './lazyImport'

const Introduction = lazyImport(() => import('./Introduction'))
const Price = lazyImport(() => import('./price'))
const GuideMap = lazyImport(() => import('./GuideMap'))
const QA = lazyImport(() => import('./QA'))
const Access = lazyImport(() => import('./Access'))
const Campaign = lazyImport(() => import('./Campaign'))

const theme = createTheme({
	typography: {
		fontFamily: ["'Noto Sans JP', sans-serif;"].join(','),
		h1: {
			fontWeight: 600,
			fontSize: 40,
			color: '#FFF',
		},
		h2: {
			fontWeight: 400,
			fontSize: 34,
			color: '#FFF',
		},
		h3: {
			fontWeight: 400,
			fontSize: 28,
			color: '#FFF',
		},
		h5: {
			fontWeight: 400,
			fontSize: 18,
			color: '#FFF',
		},
		body1: {
			fontWeight: 200,
			fontSize: 16,
			color: '#FFF',
		},
	},
})

function TopPage() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
					<Header />
				</Box>
				<Typography variant='body1' align='center' sx={{ mt: 10, mb: 1 }}>
					2024年リニューアル
				</Typography>
				<Typography variant='h1' sx={{ fontSize: '5vw' }} align='center'>
					関西｜大阪府|八尾市|完全予約制
					<br />
					貸切サウナととのうと
				</Typography>
				<Container maxWidth='sm' sx={{ mt: '40px', mb: '70px' }}>
					<Box id='top'>
						<TopLogo />
					</Box>
					<Box id='introduction'>
						<Introduction />
					</Box>
					<Box id='price'>
						<Price />
					</Box>
					<Box id='guidMap'>
						<GuideMap />
					</Box>
					<Box id='QA'> </Box>
					<QA />

					<Box id='access'>
						<Access />
					</Box>
					<Box id='campaign'>
						<Campaign />
					</Box>
				</Container>
				<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
					<Footer />
				</Box>
			</ThemeProvider>
		</>
	)
}

export default TopPage
