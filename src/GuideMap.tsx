import React, { Suspense } from 'react'
import { Box, Container, Typography } from '@mui/material'

export default function GuideMap() {
	return (
		<Container sx={{ mb: 5, mt: 10 }}>
			<Typography variant='h2' sx={{ textAlign: 'center' }}>
				【施設案内図】
			</Typography>
			<Suspense fallback={<div>Loading...</div>}>
				<Box
					component='img'
					width='100%'
					src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FGuideMap%2FguidMap.jpeg?alt=media&token=11c12731-c27c-4f80-a502-8bc4901094f0'
					alt='施設案内図'
				/>
			</Suspense>
		</Container>
	)
}
