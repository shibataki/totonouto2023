import React from 'react'
import { Box, Container } from '@mui/material'

//画像のプリロード

const images: HTMLImageElement = new Image()
const src: string =
	'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FtopLogo1.jpeg?alt=media&token=b5bd74d5-dedf-491e-8ddb-29e7936fffd1'
images.src = src

export default function TopLogo() {
	return (
		<Box>
			<Container
				sx={{
					height: 'calc(100vh - 104px)',
					position: 'relative',
				}}
			>
				<Box
					component='img'
					width='100%'
					height='auto'
					src={src}
					alt='大阪府の貸切サウナととのうと'
				/>
			</Container>
		</Box>
	)
}
