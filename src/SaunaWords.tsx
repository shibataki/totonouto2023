import React from 'react'
import { Box, Typography, Container } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import Header2 from './Header2'

import Divider from '@mui/material/Divider'

import Link from '@mui/material/Link'

const theme = createTheme({
	typography: {
		fontFamily: ["'Zen Old Mincho', serif"].join(','),
		body1: {
			fontWeight: 400,
			fontFamily: "'Noto Sans JP', sans-serif;",
			fontSize: 15,
		},
		h2: {
			fontWeight: 600,
			fontFamily: "'Noto Sans JP', sans-serif;",
			fontSize: 36,
		},
		h3: {
			fontWeight: 600,
			fontFamily: "'Noto Sans JP', sans-serif;",
			fontSize: 22,
		},
	},
})

interface WordItemProps {
	word: string
	text: string[]
	linkUrls: string[]
	linkText: string[]
	imgUrl: string
	alt: string
}

function WordItem({
	word,
	text,
	linkUrls,
	linkText,
	imgUrl,
	alt,
}: WordItemProps) {
	return (
		<Box sx={{ my: 5 }}>
			<Typography variant='h3'>{word}</Typography>
			<Divider sx={{ background: '#FFF', mb: 1 }} />
			<Box>
				{text.map((text) => (
					<Typography variant='body1' key={text}>
						{text}
					</Typography>
				))}
			</Box>

			<Box component='img' width='100%' src={imgUrl} alt={alt} />

			{linkUrls.map((url, i) => (
				<Link href={url} key='{url}' sx={{ color: '#99CCFF' }} color='inherit'>
					<Typography variant='body1'>{linkText[i]}</Typography>
				</Link>
			))}
			<Divider sx={{ background: '#FFF', my: 1 }} />
		</Box>
	)
}

export default function SaunaWords() {
	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					p: 0,
				}}
			>
				<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
					<Header2 />
				</Box>
				<Container
					maxWidth='sm'
					sx={{ mt: '60px', mb: '70px', color: '#FFF', p: 2 }}
				>
					<Box>
						<Typography variant='h2' sx={{ my: 2 }}>
							サウナ用語集
						</Typography>
					</Box>
					<Box sx={{ px: 2 }}>
						{wordList.map((Item) => (
							<WordItem
								word={Item.word}
								text={Item.text}
								linkUrls={Item.linkUrls}
								linkText={Item.linkText}
								imgUrl={Item.imgUrl}
								alt={Item.alt}
								key={Item.word}
							/>
						))}
					</Box>
					<Box>
						<Typography variant='body2'>
							誤り、載せて欲しい用語があれば店主まで。
						</Typography>
						<Typography variant='body2'>
							サウナタイム様の記事を参考にさせていただきました。
						</Typography>
						<Link
							href='https://saunatime.jp/sauna-wiki/'
							sx={{ color: '#99CCFF' }}
							color='inherit'
						>
							<Typography variant='body2'>
								これで全てがわかる！サウナ用語集【サウナWiki】
							</Typography>
						</Link>
					</Box>
				</Container>
			</Container>
		</ThemeProvider>
	)
}

const wordList: WordItemProps[] = [
	{
		word: 'サウナストーブ',
		text: [
			'サウナ室を温めるストーブ。',
			'貸切サウナととのうとのサウナストーブは電気式です。他にも薪、ガスなどを熱源とするものもあります。フィンランドにはオイル式もありました。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari.jpg?alt=media&token=e4bbe4de-07d0-485e-b053-ad644f4eb2be',
		alt: '貸切サウナととのうとのサウナストーブ',
	},
	{
		word: 'サウナストーン',
		text: [
			'サウナストーブの上で熱した石。',
			'サウナストーンにはサウナ室の温度を保つ効果があります。大きい石ほど熱しにくく冷めにくい。熱した石からの輻射熱、、、気持ち良いですよね。また、サウナストーンはロウリュにも利用されます。ロウリュの際は水をかけ過ぎないでください。サウナ室の温度が下がるだけでなく、ストーブの故障にもつながります。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori2.jpg?alt=media&token=db345b16-4296-4c83-b13a-235ea40c5712',
		alt: '貸切サウナととのうとのサウナストーン',
	},
	{
		word: 'ロウリュ',
		text: [
			'熱したサウナストーンに水をかけることで発生する蒸気を楽しむこと。',
			'日本では熱波を送るサービスのことを指すこともありますね。フィンランドのおじいさんに教えてもらったロウリュの極意では、体感温度の上昇と下降の波を楽しむのだとか。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'セルフロウリュ',
		text: [
			'自分でサウナストーンに水などをかけて蒸気を発生させること。',
			'貸切サウナととのうとではセルフロウリュが楽しめます！',
			'水をかけ過ぎないでください。サウナ室の温度が下がるだけでなく、ストーブの故障にもつながります。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'アウフグース',
		text: [
			'ロウリュで発生させた蒸気を、タオルなどを使いサウナ室中に蒸気を広げ、一人一人に向かってあおぐサービス。',
			'発祥はドイツ。店主はドイツには行ったことがないです。ドイツ行ったことあるよって方お話し聞かせてください',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '熱波',
		text: ['アウフグースのこと'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '休憩',
		text: [
			'サウナや水風呂の後に座ったり寝転がったりしながら身体を休めること。',
			'体の水気を拭いてから休憩するのがおすすめ。貸切サウナととのうとでは外気浴をお勧めしています。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '外気浴',
		text: [
			'外で休憩すること。外の景色や風を楽しむことができる。',
			'貸切サウナととのうとには素敵なお庭があります。通称だるまの庭。植物たちを眺めながら風にあたると格別です。椅子に座ったり、レンガに寝転んだり各々のやり方でお楽しみください。',
			'ととのうとのお庭を作った人：だるまと店主とその仲間たち',
		],
		linkUrls: ['https://www.instagram.com/daruma.244/'],
		linkText: ['ニワダルマ'],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma.jpg?alt=media&token=72763422-ac9d-4bb5-a316-dceb812c1dc6',
		alt: '貸切サウナととのうとの外気浴場',
	},
	{
		word: '水風呂',
		text: [
			'水のお風呂。銭湯とかだと18度くらいが多い。',
			'貸切サウナととのうとでも水風呂をお楽しみいただけます。',
			'フィンランドの水風呂はほとんどが湖でした。カモとおじいさんいっしょに泳いでいました。冬場は表面が凍っています。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari2.jpg?alt=media&token=dea80162-b732-4ca1-989c-32b6da5d5510',
		alt: '貸切サウナととのうとの水風呂',
	},
	{
		word: 'チラー',
		text: [
			'水を冷やすための冷却装置。',
			'貸切サウナととのうとでは「イロリサウナ」に2024年夏導入予定です。',
			'フィンランドではチラーなしでも十分冷たい水に入れます。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'シングル（グルシン）',
		text: ['10度未満の水風呂のこと。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '汗流しカットマン',
		text: [
			'サウナ室でかいた汗を水などで流さずにそのまま水風呂に入る人。',
			'絶対にやめてください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},

	{
		word: 'ととのう',
		text: [
			'サウナ、水風呂、休憩を繰り返すことでその域に到達するとされている。',
			'なんでしょうねこれ。百聞は一見にしかず。ご来店お待ちしております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ととのい椅子',
		text: [
			'休憩をするときに座る椅子。',
			'プラスチック製のものが多い。リクライニングタイプや、ベンチタイプなど種類は様々。貸切サウナととのうとではリクライニングタイプのととのい椅子や、レンガに寝転ぶなど自分なりの楽しみ方でお過ごしください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'あまみ',
		text: [
			'サウナと水風呂を楽しんでいる時に、体の表面に赤いまだら模様が現れたことないですか？それ、あまみです。 血行が良くなっている証拠だとか。怖がらなくて良いみたい。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'イオンウォーター',
		text: [
			'休憩の時に飲むと美味しい。サウナーの定番ドリンク。',
			'貸切サウナととのうとでは、グラスで提供しております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'オロポ',
		text: [
			'オロナミンCとポカリスエットを混ぜた飲み物。これまたサウナーの定番ドリンク。',
			'貸切サウナととのうとでは、グラスで提供しております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'シャリシャリオロポ',
		text: [
			'貸切サウナととのうと店主が考案した新オロポ。',
			'凍らせたポカリスエットをかき氷にして、オロナミンCをかける。最高。サウナライフしょーへいさんとの会話中に思いついた。',
		],
		linkUrls: ['https://neverjp.com/'],
		linkText: ['しょーへいさんの会社'],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ヴィヒタ',
		text: [
			'白樺の枝葉を束ねたもの。',
			'フィンランドではこれで身体を叩いたりする。血行促進や殺菌効果があるとかないとか。フィンランドの山奥で使った時は気持ちよかったなぁ。。。良い香りがするんですよね。',
			'貸切サウナととのうとではヴィヒタは使用できませんのでご注意ください。配管が詰まります。絶対にやめてください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ウィスキング',
		text: [
			'ヴィヒタで身体を叩いたりしながらマッサージを楽しむサービス。店主はやったことないです。感想お待ちしております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '温度の羽衣',
		text: [
			'水風呂に入ってしばらくジッとしてると、冷たさを感じにくくなります。それ、温度の羽衣です。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '公衆浴場',
		text: [
			'一般的な入浴施設のこと。 普通公衆浴場その他公衆浴場があります。',
			'貸切サウナととのうとはその他公衆浴場の営業許可を取得しています。保健所の指導のもと運営しておりますので安心してご利用ください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナー',
		text: ['サウナ愛好家のこと。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナマット',
		text: [
			'サウナ室でベンチに座る際にお尻の下に敷くもの。タオルやビート板などが一般的。',
			'貸切サウナととのうとでは小さなすのこをマットがわりにご利用いただけます。フタリサウナのサウナマットは背もたれにちょうどハマるとか、お試しあれ。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナハット',
		text: [
			'サウナで頭を熱からまもる帽子。髪の毛が痛みにくくなったり、のぼせにくくなったりします。',
			'貸切サウナととのうとではサウナハットのレンタルがございます。ぜひご利用ください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナ飯',
		text: [
			'サウナのあとにとる食事。',
			'貸切サウナととのうとの近隣のサウナ飯については店主にお問合せください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'スモークサウナ',
		text: [
			'サウナ室の中で薪を燃やしてサウナストーンを温める。サウナ室に煙が充満するがサウナ室が十分に温まったあと煙を排出する。',
			'フィンランドで体験しました。激熱でした。やんちゃなおじいさんのロウリュが過激。',
			'日本では岡山県の久米屋さんで体験できます。ととのうとを作る時にサウナのことを色々と教えていただきました。施設の方も良い方ばかりでイチオシです。',
		],
		linkUrls: ['https://nakaute.com/'],
		linkText: ['久米屋'],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'テントサウナ',
		text: [
			'テント内をストーブで温めて入るサウナ。テント内でストーブを使う際は火災と一酸化炭素中毒に気をつけてくださいね。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'トントゥ',
		text: ['小さい妖精。北欧の森やサウナなどに住んでいるらしい。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'バイブラ',
		text: [
			'下から泡がぶくぶく出てくるお風呂のこと。血行促進によいとか、水が拡散されて良いとか、、、',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ドライサウナ',
		text: [
			'高温で湿度が低い乾燥したタイプのサウナ室。乾燥肌の人は少し肌を濡らして入ってくださいね。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'バーニャ',
		text: ['ロシア式サウナ。店主は入ったことないです。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ハマーム',
		text: ['東アジア浴場。綺麗な内観のものが多いですね。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ホームサウナ',
		text: [
			'お気に入りサウナ施設のこと。店主のホームサウナはヘルシーバスニュー栄です。',
		],
		linkUrls: ['https://newsakae.com/'],
		linkText: ['ヘルシーバスニュー栄'],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ラドル',
		text: ['ロウリュで水をかけるのに使う柄杓。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
]
