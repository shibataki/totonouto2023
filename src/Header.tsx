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
//import { Link as DomLink } from 'react-router-dom'

type IconObj = { name: string; url: string; url2: string }
const Icons: IconObj[] = [
	{
		name: '貸切裏サウナととのうとの公式LINE',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FLINE_Brand_icon.png?alt=media&token=534427d4-ad3c-4e5e-88e2-4716f6f8e1a7',
		url2: 'https://lin.ee/vQYTxe4',
	},
	{
		name: '貸切サウナととのうとのX',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2Flogo-white.png?alt=media&token=d911f3a2-cefa-461e-a69d-bc4c40e2794f',
		url2: 'https://twitter.com/sauna_totonouto',
	},
	{
		name: '貸切サウナととのうとのinstagram',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FInstagram_Glyph_White.png?alt=media&token=fe81c495-1b6a-46f2-8fe1-78a1026f87d9',
		url2: 'https://www.instagram.com/sauna_totonouto/?hl=ja',
	},
	{
		name: '貸切サウナととのうとのfacebook',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FHeader%2FFacebook_Logo_Secondary.png?alt=media&token=e612ce07-60ca-48f5-bcf9-a33afde3622d',
		url2: 'https://www.facebook.com/sauna.totonouto',
	},
]
const scrollItems: { id: string; text: string }[] = [
	{ id: 'top', text: 'ページ最上部' },
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
							{scrollItems.map((content) => (
								<ListItem disablePadding key={content.id}>
									<ListItemButton>
										<Scroll
											to={content.id}
											smooth={true}
											duration={600}
											offset={-60}
											onClick={() => setIsOpen(false)}
										>
											<Typography variant='h2' sx={{ fontSize: 20 }}>
												{content.text}
											</Typography>
										</Scroll>
									</ListItemButton>
								</ListItem>
							))}
							<ListItem disablePadding>
								<Link href='SaunaWords' sx={{ textDecoration: 'none' }}>
									<ListItemButton>
										<Typography variant='h2' sx={{ fontSize: 20 }}>
											サウナ用語集
										</Typography>
									</ListItemButton>
								</Link>
							</ListItem>
						</List>
					</Box>
				</Drawer>
				<Typography variant='h1' sx={{ fontSize: 14 }}>
					大阪府八尾市のサウナ施設
					<br />
					貸切サウナととのうと
				</Typography>
				<Box sx={{ mr: 0, ml: 'auto' }}>
					{Icons.map((Icon) => (
						<Link href={Icon.url2} key={Icon.name}>
							<Box
								component='img'
								src={Icon.url}
								alt={Icon.name}
								sx={{ ml: 1, width: '20px', height: '20px' }}
							/>
						</Link>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}
