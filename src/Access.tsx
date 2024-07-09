import React from 'react'

import { Box, Typography } from '@mui/material'

import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { Map } from './Map'
import { Marker } from './Marker'

const render = (status: Status) => {
	return <h1>{status}</h1>
}

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

			<Box sx={{ mb: 3 }}>
				<Typography variant='body1'>店舗情報</Typography>
				<Typography variant='body1'>〒581-0084</Typography>
				<Typography variant='body1'>大阪府八尾市植松町5-5-15</Typography>
				<Typography variant='body1'>営業時間 10:00〜22:00</Typography>
				<Typography variant='body1'>定休日 火曜日</Typography>
				<Typography variant='body1'>クレジット決済可</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant='body1'>【電車でお越しの方へ】</Typography>
				<Typography variant='body1'>JR八尾から徒歩4分</Typography>
				<Typography variant='body1'>近鉄八尾から徒歩20分</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant='body1'>【お車でお越しの方へ】</Typography>
				<Typography variant='body1'>
					無料駐車場はございません。
					<br />
					近隣のコインパーキングをご利用ください
				</Typography>
			</Box>
		</Box>
	)
}
