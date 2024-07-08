import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Imgs: { alt: string; url: string }[] = [
	{
		alt: '大阪府の貸切サウナととのうとのサウナストーブ',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FTopLogo1.jpeg?alt=media&token=badbf268-81af-4519-91d5-b4b5239fc406',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FTopLogo2.jpeg?alt=media&token=a8b2ccd0-9367-47d9-b9d7-15818582cf5b',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FTopLogo3.jpeg?alt=media&token=c8df48c6-4436-4d2e-a450-5e66d95af4d9',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FTopLogo4.jpeg?alt=media&token=f69dd3de-bce1-49c0-93e3-a461c9c23357',
	},
]

export default function TopLogo() {
	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	}
	return (
		<Box>
			<Typography variant='h1' sx={{ mt: 10 }} align='center'>
				大阪府八尾市のサウナ施設
				<br />
				貸切サウナととのうと
			</Typography>

			<Container
				sx={{
					height: 'calc(100vh - 104px)',
					position: 'relative',
					//display: 'flex',
					//flexDirection: 'row',
					//justifyContent: 'center',
					//alignItems: 'center',
				}}
			>
				<Slider {...settings} className='top-logos'>
					{Imgs.map((contents) => (
						<Box
							component='img'
							width='100%'
							height='auto'
							src={contents.url}
							alt={contents.alt}
						/>
					))}
				</Slider>
			</Container>
		</Box>
	)
}
