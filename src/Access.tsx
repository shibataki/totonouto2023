import React from 'react'
import { Box, Typography } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

const AccessTheme = createTheme({
	typography: {
		fontFamily: ["'Zen Old Mincho', serif"].join(','),
		fontSize: 10,
	},
})
const containerStyle = {
	width: '100%',
	height: '50vh',
}

const center = {
	lat: 34.6163228,
	lng: 135.5927798,
}

export default function Access() {
	return (
		<Box sx={{ color: '#FFF', textAlign: 'center' }}>
			<Box sx={{ mb: 1 }}>
				<Typography sx={{ fontSize: '18px' }}>アクセス</Typography>
			</Box>
			<LoadScript
				googleMapsApiKey={process.env.REACT_APP_MAPS_JAVASCRIPT_APIKEY}
			>
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
					<MarkerF position={center} />
				</GoogleMap>
			</LoadScript>
			<ThemeProvider theme={AccessTheme}>
				<Box sx={{ mb: 3 }}>
					<Typography>〒581-0084</Typography>
					<Typography>大阪府八尾市植松町5-5-15</Typography>
				</Box>
				<Box sx={{ mb: 3 }}>
					<Typography>【電車でお越しの方へ</Typography>
					<Typography>JR八尾から徒歩4分</Typography>
					<Typography>近鉄八尾から徒歩20分</Typography>
				</Box>
				<Box sx={{ mb: 3 }}>
					<Typography>【お車でお越しの方へ】</Typography>
					<Typography>近隣のコインパーキングをご利用ください</Typography>
				</Box>
			</ThemeProvider>
		</Box>
	)
}
