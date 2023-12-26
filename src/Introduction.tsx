import React from 'react'
import { Box, Typography, Container } from '@mui/material'

interface IntroductionCardProps {
	left: boolean
	alt: string
	url: string
	text: string[]
}

type IntroArray = { left: boolean; alt: string; url: string; typo: string[] }[]
const IntroObj: IntroArray = [
	{
		left: false,
		alt: 'フタリサウナ',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fo5c344094b5472ca6a4b513625f00a14d_4620693218578096449_210808_37.jpg?alt=media&token=542d7691-1e7d-4cdc-9e85-2565791e4a95',
		typo: [
			'店主こだわりのサウナ室',
			'小さな空間でのセルフロウリュは体感温度をグッと上昇させます。',
		],
	},
	{
		left: true,
		alt: 'イロリサウナ',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firorisauna.jpg?alt=media&token=61465f35-da67-46fa-9672-0855a3fa322f',
		typo: [
			'囲炉裏を囲み食事や暖をとり',
			'家族と語らい合う日本古来の様式を取り入れたサウナ室',
		],
	},
	{
		left: false,
		alt: '野沢の壁',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2FphotoComingSoon.png?alt=media&token=74afcc88-33ff-48e2-bae2-d06c503dc9bf',
		typo: [
			'フィンランドの燻されたサウナから着想し訪れる人を誘導する',
			'胴縁炙り仕上げの壁。熊取の大工野澤棟梁により施工されました。',
		],
	},
	{
		left: true,
		alt: 'だるまの庭',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2FphotoComingSoon.png?alt=media&token=74afcc88-33ff-48e2-bae2-d06c503dc9bf',
		typo: [
			'八尾の庭師 だるま 中塚氏により',
			'2100年に森になることを想定し作庭されました。',
			'豊岡の滝と合わせてお愉しみください',
		],
	},
	{
		left: false,
		alt: '豊岡の滝',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2FphotoComingSoon.png?alt=media&token=74afcc88-33ff-48e2-bae2-d06c503dc9bf',
		typo: [
			'サウナを愛する皆様に是非とも体感いただきたい',
			'頭上より降り注ぐ滝',
			'豊岡親子により施行されました',
		],
	},
	{
		left: true,
		alt: '立道の灯り',
		url: 'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2FphotoComingSoon.png?alt=media&token=74afcc88-33ff-48e2-bae2-d06c503dc9bf',
		typo: [
			'しっとりとした空間に明かりを灯します。',
			'夜の灯りも是非お楽しみください。',
			'立道親子により施行されました。',
		],
	},
]

function IntroductionCard({ left, alt, url, text }: IntroductionCardProps) {
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
						<Box
							component='img'
							width='100%'
							height='auto'
							src={url}
							alt={alt}
							sx={{}}
						/>
					</Box>
					<Box
						sx={{
							width: '20%',
							backgroundColor: '#3A3A3A',
							writingMode: 'vertical-rl',
						}}
					>
						<Typography>{alt}</Typography>
						<Typography sx={{ fontSize: '8px' }}>{text[0]}</Typography>
						<Typography sx={{ fontSize: '8px' }}>{text[1]}</Typography>
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
						<Typography sx={{ fontSize: '8px' }}>{text[0]}</Typography>
						<Typography sx={{ fontSize: '8px' }}>{text[1]}</Typography>
					</Box>
					<Box sx={{ width: '80%', margin: 'auto' }}>
						<Box
							component='img'
							width='100%'
							height='auto'
							src={url}
							alt={alt}
							sx={{}}
						/>
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
					url={content.url}
					text={content.typo}
				/>
			))}
		</>
	)
}
