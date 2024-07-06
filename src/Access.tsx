import React from 'react'

import { Box, Typography } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { Map } from './Map'
import { Marker } from './Marker'

const render = (status: Status) => {
	return <h1>{status}</h1>
}

const AccessTheme = createTheme({
	typography: {
		fontFamily: ["'Zen Old Mincho', serif"].join(','),
		fontSize: 10,
	},
})

export default function Access() {
	const position: google.maps.LatLngLiteral = {
		lat: 34.616142,
		lng: 135.5936519,
	}

	return (
		<Box sx={{ color: '#FFF', textAlign: 'center' }}>
			<Box sx={{ mb: 1 }}>
				<Typography variant='h2'>アクセス</Typography>
			</Box>

			<Wrapper
				apiKey={process.env.REACT_APP_MAPS_JAVASCRIPT_APIKEY}
				render={render}
			>
				<Map
					style={{ width: '100%', aspectRatio: '1/1' }}
					center={position}
					zoom={15}
				>
					<Marker position={position} />
				</Map>
			</Wrapper>
			<ThemeProvider theme={AccessTheme}>
				<Box sx={{ mb: 3 }}>
					<Typography variant='body1'>〒581-0084</Typography>
					<Typography variant='body1'>大阪府八尾市植松町5-5-15</Typography>
				</Box>
				<Box sx={{ mb: 3 }}>
					<Typography variant='body1'>【電車でお越しの方へ】</Typography>
					<Typography variant='body1'>JR八尾から徒歩4分</Typography>
					<Typography variant='body1'>近鉄八尾から徒歩20分</Typography>
				</Box>
				<Box sx={{ mb: 3 }}>
					<Typography variant='body1'>【お車でお越しの方へ】</Typography>
					<Typography variant='body1'>
						近隣のコインパーキングをご利用ください
					</Typography>
				</Box>
			</ThemeProvider>
		</Box>
	)
}
