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
import { Link as Scroll } from 'react-scroll'

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
const scrollItems: { id: string; text: string }[] = [
	{ id: 'top', text: 'トップ' },
	{ id: 'introduction', text: '施設紹介' },
	{ id: 'price', text: '料金' },
	{ id: 'guidMap', text: 'フロアマップ' },
	{ id: 'QA', text: 'よくある質問' },
	{ id: 'access', text: 'アクセス' },
]

export default function Header() {
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
							{scrollItems.map((content, i) => (
								<ListItem disablePadding>
									<ListItemButton>
										<Scroll
											to={content.id}
											smooth={true}
											duration={600}
											offset={-60}
											onClick={() => setIsOpen(false)}
										>
											<Typography sx={{ color: '#FFF' }}>
												{content.text}
											</Typography>
										</Scroll>
									</ListItemButton>{' '}
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
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
