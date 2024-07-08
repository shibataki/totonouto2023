import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface IntroductionCardProps {
	alt: string
	urls: string[]
	text: string[]
}

type IntroArray = {
	alt: string
	urls: string[]
	typo: string[]
}[]
const IntroObj: IntroArray = [
	{
		alt: 'フタリサウナ',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari2.jpeg?alt=media&token=40a51b52-b757-4e8f-91a0-6d72a4d357a1',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari.jpeg?alt=media&token=3968d423-4f60-4dbe-a688-3214f2262d7b',
		],
		typo: [
			'店主こだわりのサウナ室でプライベートな空間をお楽しみください。',
			'小さな空間でのセルフロウリュは体感温度をグッと上昇させます。',
			'熱いサウナがお好みの方におすすめです。',
		],
	},
	{
		alt: 'イロリサウナ',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori.jpeg?alt=media&token=1a3bd9b6-6c76-4d67-ad49-64f6f6d91e22',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori2.jpeg?alt=media&token=44376ac3-aa29-40b1-99d4-66afaabc395d',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori3.jpeg?alt=media&token=361dc426-6e2a-41ad-bf2a-9043fd84c6a8',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori4.jpeg?alt=media&token=7527b22c-571c-4790-a734-9eb522444a9e',
		],
		typo: [
			'囲炉裏を囲み食事や暖をとり、家族と語らい合う日本古来の様式を取り入れたサウナ室。',
			'6名様までご利用できるサウナ室になります。ご友人同士でのプライベートな空間をお楽しみください',
			'男女利用、カップル利用可能ですので、サウナデートにもおすすめです。',
		],
	},
	{
		alt: '野沢の壁',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fnozawa.jpeg?alt=media&token=e846c6de-c730-4052-bec8-697e368d6563',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fnozawa2.jpeg?alt=media&token=aab78cc2-a0a8-422d-b30e-2aa2570a9e22',
		],
		typo: [
			'フィンランドのスモークサウナから着想し訪れる人を誘導する',
			'胴縁炙り仕上げの壁。熊取の大工野澤棟梁により施工されました。',
		],
	},
	{
		alt: 'だるまの庭',
		urls: [
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma.jpeg?alt=media&token=3f53663c-505d-49e7-99f7-a0279a6d723e',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma2.jpeg?alt=media&token=37202126-2219-4843-8cbe-5495114a9597',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma3.jpeg?alt=media&token=701c786b-8f2f-4676-9531-dd6bf7a7602c',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma4.jpeg?alt=media&token=4cc15789-1a86-4c62-a29f-648923b8e05d',
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma5.jpeg?alt=media&token=03a13618-0a92-465c-983d-f2fcc3cf820e',
		],
		typo: [
			'八尾の庭師 だるま 中塚氏により',
			'2100年に森になることを想定し作庭されました。',
			'草花に囲まれた外気浴は格別です。',
		],
	},
	{
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

function IntroductionCard({ alt, urls, text }: IntroductionCardProps) {
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
			<Box
				sx={{
					width: '100%',
					backgroundColor: '#3A3A3A',
				}}
			>
				<Typography variant='h3'>{alt}</Typography>
				<Box sx={{ p: 1, mt: 3 }}>
					{text.map((text) => (
						<Typography variant='body1' key={text} sx={{}}>
							{text}
						</Typography>
					))}
				</Box>
				<Box sx={{ display: 'flex', my: 2 }}>
					<Box sx={{ width: '70%', margin: 'auto' }}>
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
				</Box>
			</Box>
		</Container>
	)
}

export default function Introduction() {
	return (
		<>
			<Typography variant='h2' sx={{ textAlign: 'center', mb: 5 }}>
				施設紹介
			</Typography>
			{IntroObj.map((content, i) => (
				<IntroductionCard
					key={i}
					alt={content.alt}
					urls={content.urls}
					text={content.typo}
				/>
			))}
		</>
	)
}
