import React from 'react'
import { Box, Container, Typography } from '@mui/material'

export default function GuidMap() {
	return (
		<Container sx={{ mb: 5, mt: 10 }}>
			<Typography variant='h2' sx={{ textAlign: 'center' }}>
				施設案内図
			</Typography>
			<Box
				component='img'
				width='100%'
				src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FGuideMap%2F20231209_%E3%81%A8%E3%81%A8%E3%81%AE%E3%81%86%E3%81%A8%20MAP.jpg?alt=media&token=3418ba9f-b39f-4686-9aaa-354706789ac1'
				alt='施設案内図'
			/>
		</Container>
	)
}
