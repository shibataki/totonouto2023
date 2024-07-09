import React from 'react'
import { Box, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Link from '@mui/material/Link'

//import { Link as DomLink } from 'react-router-dom'

type IconObj = { name: string; url: string; url2: string }
const Icons: IconObj[] = [
	{
		name: 'LINE',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FLINE.png?alt=media&token=143a3c7c-fb0e-4529-994a-9caf2e851200',
		url2: 'https://lin.ee/vQYTxe4',
	},
	{
		name: 'X',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FX.png?alt=media&token=60f0e54c-05da-4ef2-ac51-3385b570b02c',
		url2: 'https://twitter.com/sauna_totonouto',
	},
	{
		name: 'instagram',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FInstagram.png?alt=media&token=71d0b586-2a87-4c24-a51c-ef54e4f4c3d4',
		url2: 'https://www.instagram.com/sauna_totonouto/?hl=ja',
	},
	{
		name: 'facebook',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2Ffacebook.png?alt=media&token=0f10422b-2692-47d2-aca3-9d5e7b6fc912',
		url2: 'https://www.facebook.com/sauna.totonouto',
	},
]

export default function Header2() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<AppBar position='static'>
			<Toolbar variant='dense' sx={{ backgroundColor: '#000', height: '40px' }}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					onClick={() => setIsOpen(true)}
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
					<Box
						onClick={() => setIsOpen(false)}
						sx={{ backgroundColor: '#3a3a3a', height: '100%' }}
					>
						<List>
							<ListItem disablePadding>
								<Link href='/' sx={{ textDecoration: 'none' }}>
									<ListItemButton>
										<Typography sx={{ color: '#FFF' }}>トップページ</Typography>
									</ListItemButton>
								</Link>
							</ListItem>
						</List>
					</Box>
				</Drawer>
				<Box sx={{ mr: 0, ml: 'auto' }}>
					{Icons.map((Icon) => (
						<Link href={Icon.url2} key={Icon.name}>
							<Box
								component='img'
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
