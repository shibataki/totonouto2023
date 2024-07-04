import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface IntroductionCardProps {
	left: boolean
	alt: string
	urls: string[]
	text: string[]
}

type IntroArray = {
	left: boolean
	alt: string
	urls: string[]
	typo: string[]
}[]
const IntroObj: IntroArray = [
	{
		left: false,
		alt: 'フタリサウナ',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari.jpg?alt=media&token=e4bbe4de-07d0-485e-b053-ad644f4eb2be',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari2.jpg?alt=media&token=dea80162-b732-4ca1-989c-32b6da5d5510',
		],
		typo: [
			'店主こだわりのサウナ室でプライベートな空間をお楽しみください。',
			'小さな空間でのセルフロウリュは体感温度をグッと上昇させます。',
			'熱いサウナがお好みの方におすすめです。',
		],
	},
	{
		left: true,
		alt: 'イロリサウナ',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori.jpg?alt=media&token=80a1b1c0-558d-4ee3-9241-3124301e6676',

			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori2.jpg?alt=media&token=db345b16-4296-4c83-b13a-235ea40c5712',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori3.jpg?alt=media&token=5c1439cd-8580-45ad-91e8-2f0404e3ec03',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori4.jpg?alt=media&token=c6bb03e4-8190-4c4e-92f9-76715e6bdd80',
		],
		typo: [
			'囲炉裏を囲み食事や暖をとり、家族と語らい合う日本古来の様式を取り入れたサウナ室',
			'6名様までご利用できるサウナ室になります。ご友人同士でのプライベートな空間をお楽しみください',
			'男女利用、カップル利用可能ですので、サウナデートにもおすすめです。',
		],
	},
	{
		left: false,
		alt: '野沢の壁',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fnozawa.jpg?alt=media&token=6d407b07-3680-45e2-8d06-87667a1a08e5',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fnozawa2.jpg?alt=media&token=1d44f32d-18a3-47b1-a853-1c8fe4c1970c',
		],
		typo: [
			'フィンランドのスモークサウナから着想し訪れる人を誘導する',
			'胴縁炙り仕上げの壁。熊取の大工野澤棟梁により施工されました。',
		],
	},
	{
		left: true,
		alt: 'だるまの庭',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma.jpg?alt=media&token=72763422-ac9d-4bb5-a316-dceb812c1dc6',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma2.jpg?alt=media&token=de3eda8c-13a6-4bf7-a2b7-b69037e398f6',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma3.jpg?alt=media&token=c13ee95c-21be-42e6-a1bb-70e9e935c26a',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma4.jpg?alt=media&token=889cd172-d0c7-4f9c-b6e2-6ce382ad50b9',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma5.jpg?alt=media&token=aedbdd61-2e00-464e-91d5-4164ea5a08aa',
		],
		typo: [
			'八尾の庭師 だるま 中塚氏により',
			'2100年に森になることを想定し作庭されました。',
			'草花に囲まれた外気浴は格別です。',
		],
	},
	{
		left: false,
		alt: '豊岡の滝',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ftaki.jpg?alt=media&token=fa2d7019-1d52-462d-98d4-7d9bffae5558',
		],
		typo: [
			'サウナを愛する皆様に是非とも体感いただきたい、頭上より降り注ぐ滝',
			'頭からドバッと水を被りたい方におすすめです。※冬場は水がかなり冷たく',
			'豊岡親子により施行されました',
		],
	},
	{
		left: true,
		alt: '立道の灯り',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ftatemichi.jpg?alt=media&token=e4f21ead-2d93-4680-8f3d-af78235e4df1',
		],
		typo: [
			'立道親子により施行されました。',
			'しっとりとした空間に明かりを灯します。',
			'夜の灯りも是非お楽しみください。カップルでもご友人同士でも楽しめる素敵な空間です。',
		],
	},
]

function IntroductionCard({ left, alt, urls, text }: IntroductionCardProps) {
	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		adaptiveHeight: true,
	}
	return (
		<Container
			sx={{
				color: '#FFF',
				maxWidth: '400px',
			}}
		>
			{left === false && (
				<Box sx={{ display: 'flex', backgroundColor: '#000' }}>
					<Box sx={{ width: '80%', margin: 'auto' }}>
						<Slider {...settings}>
							{urls.map((url, i) => (
								<Box
									component='img'
									width='100%'
									height='auto'
									src={url}
									alt={alt + i}
									key={url}
									sx={{ objectFit: 'fill' }}
								/>
							))}
						</Slider>
					</Box>
					<Box
						sx={{
							width: '20%',
							backgroundColor: '#3A3A3A',
							writingMode: 'vertical-rl',
						}}
					>
						<Typography>{alt}</Typography>
						{text.map((text) => (
							<Typography key={text} sx={{ fontSize: '8px' }}>
								{text}
							</Typography>
						))}
					</Box>
				</Box>
			)}
			{left === true && (
				<Box sx={{ display: 'flex', backgroundColor: '#000' }}>
					<Box
						sx={{
							width: '20%',
							backgroundColor: '#3A3A3A',
							writingMode: 'vertical-rl',
						}}
					>
						<Typography>{alt}</Typography>
						{text.map((text) => (
							<Typography key={text} sx={{ fontSize: '8px' }}>
								{text}
							</Typography>
						))}
					</Box>
					<Box sx={{ width: '80%', margin: 'auto' }}>
						<Slider {...settings}>
							{urls.map((url, i) => (
								<Box
									component='img'
									width='100%'
									height='auto'
									src={url}
									alt={alt + i}
									key={url}
								/>
							))}
						</Slider>
					</Box>
				</Box>
			)}
		</Container>
	)
}

export default function Introduction() {
	return (
		<>
			{IntroObj.map((content, i) => (
				<IntroductionCard
					key={i}
					left={content.left}
					alt={content.alt}
					urls={content.urls}
					text={content.typo}
				/>
			))}
		</>
	)
}
