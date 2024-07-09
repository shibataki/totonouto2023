import React from 'react'

import { Box, Typography } from '@mui/material'
import Link from '@mui/material/Link'

export default function Access() {
	return (
		<Box sx={{ color: '#FFF', textAlign: 'center', mb: 8 }}>
			<Box sx={{ mb: 1 }}>
				<Typography variant='h2'>【アクセス】</Typography>
			</Box>

			<Box sx={{ mb: 3 }}>
				<Typography variant='body1'>店舗情報</Typography>

				<Typography variant='body1'>〒581-0084</Typography>
				<Typography variant='body1'>大阪府八尾市植松町5-5-15</Typography>
				<Link href='https://www.google.com/maps/place/%E8%B2%B8%E5%88%87%E3%82%B5%E3%82%A6%E3%83%8A%E3%81%A8%E3%81%A8%E3%81%AE%E3%81%86%E3%81%A8/@34.6161464,135.591077,17z/data=!3m1!4b1!4m6!3m5!1s0x6000d9fd0c5b2105:0x84d2c47a31899af3!8m2!3d34.616142!4d135.5936519!16s%2Fg%2F11rr3zld5c?entry=ttu'>
					<Typography variant='body1' sx={{ color: '#99CCFF' }}>
						Googleマップはこちらをクリック
					</Typography>
				</Link>
				<Typography variant='body1'>営業時間 10:00〜22:00</Typography>
				<Typography variant='body1'>定休日 火曜日</Typography>
				<Typography variant='body1'>クレジットカード決済可</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant='body1'>【電車でお越しのお客様へ】</Typography>
				<Typography variant='body1'>JR八尾から徒歩4分</Typography>
				<Typography variant='body1'>近鉄八尾から徒歩20分</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant='body1'>【お車でお越しのお客様へ】</Typography>
				<Typography variant='body1'>
					無料駐車場はございません。
					<br />
					近隣のコインパーキングをご利用ください
				</Typography>
			</Box>
		</Box>
	)
}
