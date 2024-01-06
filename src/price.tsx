import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

const saunaName: string[] = ['フタリサウナ', 'イロリサウナ']
const futariPrice: string[] = ['1名：4,800-', '2名：9,000-']
const iroriPrice: string[] = [
	'1名：12,000-',
	'2名：12,000-',
	'3名：17,100-',
	'4名：22,000-',
	'5名：26,000-',
	'6名：30,000-',
]

const drinkName: string[] = [
	'シャリシャリオロポ',
	'オロナミンC',
	'ポカリスエット',
	'イオンウォーター',
	'ビール',
	'ロンケロ',
]
const drinkPrice: string[] = ['500', '200', '300', '300', '500', '600']

const rentalName: string[] = [
	'2点セット',
	'ポンチョ',
	'サウナハット',
	'フェイスタオル',
	'バスタオル',
	'水着 | 男性用',
]
const rentalPrice: string[] = ['1000', '800', '500', '400', '800', '500']

const aromaName: string[] = ['シラカバ', 'ユーカリ', 'シトラス', '森林']
const aromaPrice: string[] = ['300', '300', '300', '300']

const amenitiesName: string[] = [
	'ドライヤー',
	'化粧水',
	'乳液',
	'クレンジング',
	'コットン',
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
						sx={{
							fontSize: '18px',
							color: '#FFF',
							textAlign: 'center',
							mt: 5,
						}}
					>
						料金
					</Typography>
				</Grid>
				{saunaName.map((content, i) => (
					<Grid item xs={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								key={i}
								sx={{ fontSize: '16px', writingMode: 'vertical-rl' }}
							>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}

				<Grid item xs={6} sx={{ height: '105px' }}>
					{futariPrice.map((content, i) => (
						<Typography sx={{ fontSize: '10px', textAlign: 'center', mb: 0.2 }}>
							{content}
						</Typography>
					))}
				</Grid>
				<Grid item xs={6}>
					{iroriPrice.map((content, i) => (
						<Typography sx={{ fontSize: '10px', textAlign: 'center', mb: 0.2 }}>
							{content}
						</Typography>
					))}
				</Grid>
				<Grid item xs={12}>
					<Typography
						sx={{
							fontSize: '18px',
							color: '#FFF',
							textAlign: 'center',
							mt: 5,
						}}
					>
						ドリンク
					</Typography>
				</Grid>

				{drinkName.map((content, i) => (
					<Grid item xs={2}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								key={i}
								sx={{
									fontSize: '16px',
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
								}}
							>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}

				{drinkPrice.map((content, i) => (
					<Grid item xs={2}>
						<Typography sx={{ fontSize: '12px', textAlign: 'center' }}>
							{content}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						sx={{
							fontSize: '18px',
							color: '#FFF',
							textAlign: 'center',
							mt: 5,
						}}
					>
						レンタル
					</Typography>
				</Grid>
				{rentalName.map((content, i) => (
					<Grid item xs={2}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								key={i}
								sx={{
									fontSize: '16px',
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
								}}
							>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}

				{rentalPrice.map((content, i) => (
					<Grid item xs={2}>
						<Typography sx={{ fontSize: '12px', textAlign: 'center' }}>
							{content}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						sx={{
							fontSize: '18px',
							color: '#FFF',
							textAlign: 'center',
							mt: 5,
						}}
					>
						アロマ
					</Typography>
				</Grid>
				{aromaName.map((content, i) => (
					<Grid item xs={3}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								key={i}
								sx={{ fontSize: '16px', writingMode: 'vertical-rl' }}
							>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}

				{aromaPrice.map((content, i) => (
					<Grid item xs={3}>
						<Typography sx={{ fontSize: '12px', textAlign: 'center' }}>
							{content}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						sx={{
							fontSize: '18px',
							color: '#FFF',
							textAlign: 'center',
							mt: 5,
						}}
					>
						アメニティ
					</Typography>
				</Grid>

				{amenitiesName.map((content, i) => (
					<Grid item xs={1.2}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								key={i}
								sx={{ fontSize: '16px', writingMode: 'vertical-rl' }}
							>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
