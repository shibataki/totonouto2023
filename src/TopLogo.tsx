import React from 'react'
import { Box, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Imgs: { alt: string; url: string }[] = [
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FtopLogo1.jpeg?alt=media&token=b5bd74d5-dedf-491e-8ddb-29e7936fffd1',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FtopLogo2.jpeg?alt=media&token=e9e50517-e10b-4cba-9d27-46a95564dbad',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FtopLogo3.jpeg?alt=media&token=3ad2b7b5-91a4-4b79-94ef-854e17d4992c',
	},
	{
		alt: '大阪府の貸切サウナととのうと',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FtopLogo4.jpeg?alt=media&token=3648e206-ff22-404c-86f1-425488544b07',
	},
]

const img = new Image()
img.src = Imgs[0].url
const img2 = new Image()
img2.src = Imgs[1].url
const img3 = new Image()
img3.src = Imgs[2].url
const img4 = new Image()
img4.src = Imgs[3].url

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
