import React from 'react'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Link from '@mui/material/Link'
type IconObj = { name: string; url: string; url2: string }
const Icons: IconObj[] = [
	{
		name: 'X',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2Flogo-white.png?alt=media&token=d911f3a2-cefa-461e-a69d-bc4c40e2794f',
		url2: 'https://twitter.com/sauna_totonouto',
	},
	{
		name: 'instagram',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FInstagram_Glyph_White.png?alt=media&token=fe81c495-1b6a-46f2-8fe1-78a1026f87d9',
		url2: 'https://www.instagram.com/sauna_totonouto/?hl=ja',
	},
	{
		name: 'facebook',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FFacebook_Logo_Secondary.png?alt=media&token=e612ce07-60ca-48f5-bcf9-a33afde3622d',
		url2: 'https://www.facebook.com/sauna.totonouto',
	},
]

export default function Header() {
	return (
		<AppBar position='static'>
			<Toolbar variant='dense' sx={{ backgroundColor: '#000' }}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Box sx={{ mr: 0, ml: 'auto' }}>
					{Icons.map((Icon, i) => (
						<Link href={Icon.url2}>
							<Box
								component='img'
								key={i}
								src={Icon.url}
								alt={Icon.name}
								sx={{ ml: 2, width: '20px', height: '20px' }}
							/>
						</Link>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}
