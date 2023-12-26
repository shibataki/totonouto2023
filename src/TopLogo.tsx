import React from 'react'
import { Box, Container } from '@mui/material'

export default function TopLogo() {
	return (
		<Box component='h1'>
			<Container
				sx={{
					height: 'calc(100vh - 104px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					component='img'
					width='100%'
					src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2F%E3%83%AD%E3%82%B3%E3%82%99%E7%99%BD.png?alt=media&token=949aa7e8-886c-4a7b-a790-9be2b2716a28'
					alt='貸切サウナととのうと'
					sx={{ position: 'absolute', margin: 0 }}
				/>
			</Container>
		</Box>
	)
}
