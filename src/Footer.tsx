import React from 'react'
import { Box, Typography } from '@mui/material'

import Link from '@mui/material/Link'

export default function Footer() {
	return (
		<Box
			sx={{
				background: '#CF3636',
				border: 'none',
				height: '64px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Link
				href='https://squareup.com/appointments/book/80qow5lpnzjxk6/LKYP0BZWKK5VX/services'
				underline='none'
				sx={{ width: '100%', textAlign: 'center' }}
			>
				<Typography sx={{ color: '#FFF', fontSize: '22px' }}>
					ご予約はこちらから
				</Typography>
			</Link>
		</Box>
	)
}
