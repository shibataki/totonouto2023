import React from 'react'
import { Box, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Imgs: { alt: string; url: string }[] = [
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Fimg1.png?alt=media&token=687f6259-30e3-4d48-a3d9-38cbc29b96ca',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Fimg2.png?alt=media&token=99ca046f-321a-405a-8e91-bdabab590106',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Fimg3.png?alt=media&token=a6b6c8e8-e5de-4067-992c-6c78626fe1cb',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Fimg4.png?alt=media&token=4f2aebd8-765b-403e-bcbb-1d2888642cb1',
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
		<Box component='h1'>
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
