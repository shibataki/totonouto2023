import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

const saunaName: string[] = ['フタリサウナ', 'イロリサウナ']
const futariPrice: string[] = ['1名：4,800-', '2名：9,000-']
const iroriPrice: string[] = [
	'2名：12,000-',
	'3名：17,100-',
	'4名：22,000-',
	'5名：26,000-',
	'6名：30,000-',
]

const drinkName: { id: string; name: string }[] = [
	{ id: '1', name: 'シャリシャリオロポ' },
	{ id: '2', name: 'オロナミンC' },
	{ id: '3', name: 'ポカリスエット' },
	{ id: '4', name: 'イオンウォーター' },
	{ id: '5', name: 'ミネラルウォーター' },
]
const drinkPrice: { id: string; price: string }[] = [
	{ id: '1', price: '500' },
	{ id: '2', price: '200' },
	{ id: '3', price: '300' },
	{ id: '4', price: '300' },
	{ id: '5', price: '150' },
]

const rentalName: { id: string; name: string }[] = [
	{ id: '1', name: '2点セット' },
	{ id: '2', name: 'ポンチョ' },
	{ id: '3', name: 'サウナハット' },
	{ id: '4', name: 'フェイスタオル' },
	{ id: '5', name: 'バスタオル' },
	{ id: '6', name: '水着 | 男性用' },
]
const rentalPrice: { id: string; price: string }[] = [
	{ id: '1', price: '1000' },
	{ id: '2', price: '800' },
	{ id: '3', price: '500' },
	{ id: '4', price: '400' },
	{ id: '5', price: '800' },
	{ id: '6', price: '500' },
]

const aromaName: { id: string; name: string }[] = [
	{ id: '1', name: 'シラカバ' },
	{ id: '2', name: 'ユーカリ' },
]
const aromaPrice: { id: string; price: string }[] = [
	{ id: '1', price: '300' },
	{ id: '2', price: '300' },
]

const amenitiesName: string[] = [
	'ドライヤー',
	'化粧水',
	'乳液',
	'クレンジング',

	'綿棒',
	'シャンプー',
	'コンディショナー',
	'ボディソープ',
	'腕時計',
]

export default function Price() {
	return (
		<Box sx={{ paddingX: '10%', mb: 5 }}>
			<Grid
				container
				spacing={2}
				sx={{ color: '#FFF' }}
				alignItems={'flex-start'}
				justifyItems={'center'}
			>
				<Grid item xs={12}>
					<Typography
						variant='h2'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						料金メニュー
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						variant='h3'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						サウナご利用料金
					</Typography>
				</Grid>
				{saunaName.map((content) => (
					<Grid item xs={6} key={content}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography variant='h3' sx={{ writingMode: 'vertical-rl' }}>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}

				<Grid item xs={6} sx={{ height: '105px' }}>
					{futariPrice.map((content) => (
						<Typography
							variant='body1'
							sx={{ textAlign: 'center', mb: 0.2 }}
							key={content}
						>
							{content}
						</Typography>
					))}
				</Grid>
				<Grid item xs={6}>
					{iroriPrice.map((content) => (
						<Typography
							variant='body1'
							sx={{ textAlign: 'center', mb: 0.2 }}
							key={content}
						>
							{content}
						</Typography>
					))}
				</Grid>
				<Grid item xs={12}>
					<Typography
						variant='h3'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						ドリンク
					</Typography>
				</Grid>

				{drinkName.map((content) => (
					<Grid item xs={2.4} key={content.id}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								variant='body1'
								sx={{
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
								}}
							>
								{content.name}
							</Typography>
						</Box>
					</Grid>
				))}

				{drinkPrice.map((content) => (
					<Grid item xs={2.4} key={content.id}>
						<Typography variant='body1' sx={{ textAlign: 'center' }}>
							{content.price}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						variant='h3'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						レンタル
					</Typography>
				</Grid>
				{rentalName.map((content) => (
					<Grid item xs={2} key={content.id}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								variant='body1'
								sx={{
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
								}}
							>
								{content.name}
							</Typography>
						</Box>
					</Grid>
				))}

				{rentalPrice.map((content) => (
					<Grid item xs={2} key={content.id}>
						<Typography variant='body1' sx={{ textAlign: 'center' }}>
							{content.price}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						variant='h3'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						アロマ
					</Typography>
				</Grid>
				{aromaName.map((content) => (
					<Grid item xs={6} key={content.id}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography variant='body1' sx={{ writingMode: 'vertical-rl' }}>
								{content.name}
							</Typography>
						</Box>
					</Grid>
				))}

				{aromaPrice.map((content) => (
					<Grid item xs={6} key={content.id}>
						<Typography variant='body1' sx={{ textAlign: 'center' }}>
							{content.price}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						variant='h3'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						アメニティ
					</Typography>
				</Grid>

				{amenitiesName.map((content) => (
					<Grid item xs={1.3} key={content}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography variant='body1' sx={{ writingMode: 'vertical-rl' }}>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
