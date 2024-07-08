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
				src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FGuideMap%2F%E6%96%BD%E8%A8%AD%E6%A1%88%E5%86%85%E5%9B%B3.jpeg?alt=media&token=d21be541-97b9-448c-8034-3ca5e2121208'
				alt='施設案内図'
			/>
		</Container>
	)
}
