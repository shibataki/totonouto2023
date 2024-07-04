import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

const QAs: { Q: string; A: string[] }[] = [
	{
		Q: '利用人数の上限は何名ですか',
		A: [
			'【イロリサウナ】',
			'6名 ※男女利用可 7名以上でご利用したい場合はご相談ください。',
			'ご友人同士でのご利用はもちろん、カップルでのご利用も可能になります。',
			'　',
			'【フタリサウナ】',
			'2名 ※男女利用不可',
		],
	},
	{
		Q: '水風呂はありますか',
		A: [
			'【イロリサウナ】',
			'ご用意ございます。1名様ずつご利用くださいませ。',
			'2024年チラー導入予定',
			'　',
			'【フタリサウナ】',
			'ご用意ございます。',
			'チラーでの温度管理をしていません。水温が外気温に依存することをご了承くださいませ。',
		],
	},
	{
		Q: 'シャワーは何台ありますか',
		A: [
			'各サウナに1台ございます。',
			'2名様以上でご利用の場合は交互にご利用いただくようお願いいたします。',
		],
	},
	{
		Q: '何を持っていけば良いですか',
		A: [
			'下記が必要になります',
			'・水着：男性用のみ有料のレンタルがございます。女性用はございませんのでご注意くださいませ',
			'　',
			'【イロリサウナ】',
			'脱衣所を除くすべてのエリアで水着をご着用ください',
			'　',
			'【フタリサウナ】',
			'外気浴場では水着をご着用ください',
		],
	},
	{
		Q: '男女での利用は可能ですか',
		A: [
			'【イロリサウナ】',
			'男女で利用可能',
			'ご友人同士でのご利用はもちろん、カップルでのご利用も可能になります。',
			'　',
			'【フタリサウナ】',
			'男女で利用不可',
		],
	},
	{
		Q: 'どのように予約しますか？',
		A: [
			'本webページ下部「ご予約はこちらから」ボタンより予約ページにアクセスできます。',
		],
	},
	{
		Q: 'サウナ室では着衣が必要ですか',
		A: [
			'【イロリサウナ】',
			'必ず水着をご着用の上ご利用くださいませ',
			'　',
			'【フタリサウナ】',
			'外気浴時以外は着用の必要はありません。',
		],
	},
	{
		Q: '駐車場はありますか',
		A: [
			'専用の駐車場はございません',
			'近隣のコインパーキングをご利用ください。',
		],
	},
	{
		Q: 'アロマの持ち込みは可能ですか',
		A: ['持ち込みはご遠慮ください'],
	},
	{
		Q: 'ヴィヒタの持ち込みは可能ですか',
		A: ['持ち込みはご遠慮ください'],
	},
	{
		Q: '飲食物は持ち込み可能ですか',
		A: [
			'お飲み物のみ持ち込み可能です。※アルコールの持ち込みはご遠慮ください',
			'お食事の持ち込みはご遠慮ください。',
			'ゴミの分別にご協力ください。',
		],
	},
	{
		Q: 'ロウリュはできますか',
		A: [
			'セルフロウリュをお楽しみいただけます。',
			'オプション（有料）にてアロマ水をお楽しみいただけます',
			' ',
			'※水のかけ過ぎにご注意ください',
			'ストーブの故障・サウナ室の温度低下につながります。',
			'また、かなり熱くなりますのでやけどにご注意ください。',
		],
	},
	{
		Q: '問い合わせしたい',
		A: [
			'LINE、インスタグラムもしくは下記のメールアドレスにご送信ください',
			'お電話でのお問い合わせには対応しておりません',
			'sauna.totonouto@gmail.com',
		],
	},
	{
		Q: 'キャンセルポリシーはありますか',
		A: [
			'予約サイトに掲載、ご同意の上ご予約可能となっております。',
			'予約サイトより最新版をご確認くださいませ。',
		],
	},
	{
		Q: 'どこにありますか',
		A: [
			'大阪府八尾市にあるサウナ施設です。',
			'〒581-0084',
			'住所：大阪府八尾市植松町5-5-15',
		],
	},
]

export default function QA() {
	const [expanded, setExpanded] = React.useState<string | false>(false)

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false)
		}
	return (
		<Container sx={{ mb: 5 }}>
			<Box>
				<Typography
					sx={{ color: '#FFF', textAlign: 'center', fontSize: '18px' }}
				>
					Q&A
				</Typography>
				{QAs.map((content) => (
					<Accordion
						expanded={expanded === content.Q}
						onChange={handleChange(content.Q)}
						sx={{ background: '#333333', color: '#FFF' }}
						key={content.Q}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={content.Q}
							id={content.Q}
						>
							<Typography
								sx={{ width: '100%', flexShrink: 0, fontSize: '14px' }}
							>
								{content.Q}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Divider sx={{ background: '#FFF', mb: 1 }} />
							{content.A.map((ans, i) => (
								<Typography key={i} sx={{ fontSize: '12px' }}>
									{ans}
								</Typography>
							))}
						</AccordionDetails>
					</Accordion>
				))}
			</Box>
		</Container>
	)
}
