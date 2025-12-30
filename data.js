const charData = [
  {
    id: '01',
    name: 'LCB囚人 イサン',
    org: '囚人',
    skills: [
      { name: '弾く', file: '01-sin-s1.png' },
      { name: '突き刺す', file: '01-sin-s2.png' },
      { name: '連撃', file: '01-sin-s3.png' }
    ]
  },
  {
    id: '02',
    name: 'LCB囚人 ファウスト',
    org: '囚人',
    skills: [
      { name: '縦斬り', file: '02-sin-s1.png' },
      { name: '斬り上げ', file: '02-sin-s2.png' },
      { name: '抉り刺し', file: '02-sin-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'LCB囚人 ドンキホーテ',
    org: '囚人',
    skills: [
      { name: '刺す', file: '03-sin-s1.png' },
      { name: '束ね刺し', file: '03-sin-s2.png' },
      { name: '正義のため！', file: '03-sin-s3.png' }
    ]
  },
  {
    id: '04',
    name: 'LCB囚人 良秀',
    org: '囚人',
    skills: [
      { name: '塗る', file: '04-sin-s1.png' },
      { name: 'ばら撒く', file: '04-sin-s2.png' },
      { name: '描き出す', file: '04-sin-s3.png' }
    ]
  },
  {
    id: '05',
    name: 'LCB囚人 ムルソー',
    org: '囚人',
    skills: [
      { name: 'ワン、ツー', file: '05-sin-s1.png' },
      { name: '突き立てる拳', file: '05-sin-s2.png' },
      { name: '連撃', file: '05-sin-s3.png' }
    ]
  },
  {
    id: '06',
    name: 'LCB囚人 ホンル',
    org: '囚人',
    skills: [
      { name: '縦斬り', file: '06-sin-s1.png' },
      { name: '二連撃', file: '06-sin-s2.png' },
      { name: '旋風', file: '06-sin-s3.png' }
    ]
  },
  {
    id: '07',
    name: 'LCB囚人 ヒースクリフ',
    org: '囚人',
    skills: [
      { name: 'バットで殴る', file: '07-sin-s1.png' },
      { name: '撃ち落とす', file: '07-sin-s2.png' },
      { name: '腹いせ', file: '07-sin-s3.png' }
    ]
  },
  {
    id: '08',
    name: 'LCB囚人 イシュメール',
    org: '囚人',
    skills: [
      { name: '強打', file: '08-sin-s1.png' },
      { name: 'スライディング', file: '08-sin-s2.png' },
      { name: '防御', file: '08-sin-s3.png' }
    ]
  },
  {
    id: '09',
    name: 'LCB囚人 ロージャ',
    org: '囚人',
    skills: [
      { name: '振り下ろす', file: '09-sin-s1.png' },
      { name: '連続斬り', file: '09-sin-s2.png' },
      { name: '処断', file: '09-sin-s3.png' }
    ]
  },
  {
    id: '11',
    name: 'LCB囚人 シンクレア',
    org: '囚人',
    skills: [
      { name: '縦斬り', file: '11-sin-s1.png' },
      { name: '連続斬り', file: '11-sin-s2.png' },
      { name: '掻き切る', file: '11-sin-s3.png' }
    ]
  },
  {
    id: '12',
    name: 'LCB囚人 ウーティス',
    org: '囚人',
    skills: [
      { name: '抜剣', file: '12-sin-s1.png' },
      { name: '背後斬り', file: '12-sin-s2.png' },
      { name: '突き抜く', file: '12-sin-s3.png' }
    ]
  },
  {
    id: '13',
    name: 'LCB囚人 グレゴール',
    org: '囚人',
    skills: [
      { name: '斬る', file: '13-sin-s1.png' },
      { name: '抉る', file: '13-sin-s2.png' },
      { name: '切り刻む', file: '13-sin-s3.png' }
    ]
  },
  {
    id: '02',
    name: '南部ツヴァイ協会4課 ファウスト',
    org: 'ツヴァイ',
    skills: [
      { name: '巡察', file: '02-2-s1.png' },
      { name: '顧客保護', file: '02-2-s2.png' },
      { name: '治安守護', file: '02-2-s3.png' }
    ]
  },
  {
    id: '08',
    name: '西部ツヴァイ協会3課 イシュメール',
    org: 'ツヴァイ',
    skills: [
      { name: 'ツヴァイ騎士団大剣術', file: '08-2w-s1.png' },
      { name: '素通りさせることはできません。', file: '08-2w-s2.png' },
      { name: '守護', file: '08-2w-s3.png' }
    ]
  },
  {
    id: '09',
    name: '南部ツヴァイ協会5課 ロージャ',
    org: 'ツヴァイ',
    skills: [
      { name: '牽制', file: '09-2-s1.png' },
      { name: '集中防御', file: '09-2-s2.png' },
      { name: '脅威対象制圧', file: '09-2-s3.png' }
    ]
  },
  {
    id: '11',
    name: '南部ツヴァイ協会6課 シンクレア',
    org: 'ツヴァイ',
    skills: [
      { name: '打撃', file: '11-2-s1.png' },
      { name: '制圧', file: '11-2-s2.png' },
      { name: '強打', file: '11-2-s3.png' }
    ]
  },
  {
    id: '13',
    name: '南部ツヴァイ協会4課 グレゴール',
    org: 'ツヴァイ',
    skills: [
      { name: '立ち向かう', file: '13-2-s1.png' },
      { name: '柔軟な制圧', file: '13-2-s2.png' },
      { name: '守護者', file: '13-2-s3.png' }
    ]
  },
  {
    id: '11',
    name: '西部ツヴァイ協会3課 シンクレア',
    org: 'ツヴァイ',
    skills: [
      { name: '制圧します。', file: '11-2-s1.png' },
      { name: '戦闘準備', file: '11-2-s2.png' },
      { name: '囲い', file: '11-2-s3.png' }
    ]
  },
  {
    id: '02',
    name: '東部シ協会3課 ファウスト',
    org: 'シ',
    skills: [
      { name: '刈り取る', file: '02-4e-s1.png' },
      { name: '間合いを取る', file: '02-4e-s2.png' },
      { name: '弓閃', file: '02-4e-s3.png' },
      { name: '閃弓', file: '02-4e-s3_2.png' }
    ]
  },
  {
    id: '03',
    name: '南部シ協会5課 ドンキホーテ',
    org: 'シ',
    skills: [
      { name: '息を整える', file: '03-4-s1.png' },
      { name: '双撃', file: '03-4-s2.png' },
      { name: '過呼吸', file: '03-4-s3.png' }
    ]
  },
  {
    id: '07',
    name: '南部シ協会5課 ヒースクリフ',
    org: 'シ',
    skills: [
      { name: '極剣', file: '07-4-s1.png' },
      { name: '飛剣', file: '07-4-s2.png' },
      { name: '閃撃', file: '07-4-s3.png' }
    ]
  },
  {
    id: '08',
    name: '南部シ協会5課 イシュメール',
    org: 'シ',
    skills: [
      { name: '飛剣', file: '08-4-s1.png' },
      { name: '閃撃', file: '08-4-s2.png' },
      { name: '息を整える', file: '08-4-s3.png' }
    ]
  },
  {
    id: '03',
    name: '東部センク協会3課 ドンキホーテ',
    org: 'センク',
    skills: [
      { name: '発勁', file: '03-5e-s1.png' },
      { name: '草炎掌', file: '03-5e-s2.png' },
      { name: '一手頼み申す', file: '03-5e-s3.png' }
    ]
  },
  {
    id: '03',
    name: '南部センク協会5課 部長 ドンキホーテ',
    org: 'センク',
    skills: [
      { name: 'ルミーズ', file: '03-5-s1.png' },
      { name: 'フレッシュ', file: '03-5-s2.png' },
      { name: 'サリュー！', file: '03-5-s3.png' }
    ]
  },
  {
    id: '05',
    name: '西部センク協会3課 ムルソー',
    org: 'センク',
    skills: [
      { name: 'アレ', file: '05-5-s1.png' },
      { name: 'フォント', file: '05-5-s2.png' },
      { name: 'サリュー	', file: '05-5-s3.png' }
    ]
  },
  {
    id: '11',
    name: '南部センク協会4課 部長 シンクレア',
    org: 'センク',
    skills: [
      { name: 'ルミーズ', file: '11-5-s1.png' },
      { name: 'アンガジェマン', file: '11-5-s2.png' },
      { name: 'コントラタック', file: '11-5-s3.png' }
    ]
  },
  {
    id: '12',
    name: '南部センク協会4課 ウーティス',
    org: 'センク',
    skills: [
      { name: 'マルシュ', file: '12-5-s1.png' },
      { name: 'ピュニスィオン', file: '12-5-s2.png' },
      { name: 'バレストラフォント', file: '12-5-s3.png' }
    ]
  },
  {
    id: '01',
    name: '南部リウ協会3課 イサン',
    org: 'リウ',
    skills: [
      { name: '炎斬', file: '01-6-s1.png' },
      { name: '正面突破', file: '01-6-s2.png' },
      { name: '剣の流れ', file: '01-6-s3.png' }
    ]
  },
  {
    id: '04',
    name: '南部リウ協会4課 良秀',
    org: 'リウ',
    skills: [
      { name: '全面戦争', file: '04-6-s1.png' },
      { name: '炎手撃', file: '04-6-s2.png' },
      { name: '炎絶', file: '04-6-s3.png' }
    ]
  },
  {
    id: '05',
    name: '南部リウ協会 6課 ムルソー',
    org: 'リウ',
    skills: [
      { name: '突破', file: '05-6-s1.png' },
      { name: '震脚', file: '05-6-s2.png' },
      { name: '練武崩拳', file: '05-6-s3.png' }
    ]
  },
  {
    id: '06',
    name: '南部リウ協会 5課 ホンル',
    org: 'リウ',
    skills: [
      { name: '身体をほぐす', file: '06-6-s1.png' },
      { name: '流れる火花', file: '06-6-s2.png' },
      { name: '紅炎拳', file: '06-6-s3.png' }
    ]
  },
  {
    id: '08',
    name: '南部リウ協会4課 イシュメール',
    org: 'リウ',
    skills: [
      { name: '丹脚', file: '08-6-s1.png' },
      { name: '正面突破', file: '08-6-s2.png' },
      { name: '裡門頂肘', file: '08-6-s3.png' }
    ]
  },
  {
    id: '09',
    name: '南部リウ協会4課部長 ロージャ',
    org: 'リウ',
    skills: [
      { name: '炎拳撃', file: '09-6-s1.png' },
      { name: '炎手撃-燃', file: '09-6-s2.png' },
      { name: '一点突破', file: '09-6-s3.png' }
    ]
  },
  {
    id: '13',
    name: '南部リウ協会6課 グレゴール',
    org: 'リウ',
    skills: [
      { name: '一点突き', file: '13-6-s1.png' },
      { name: '一網打尽', file: '13-6-s2.png' },
      { name: '練武掌打', file: '13-6-s3.png' }
    ]
  },
  {
    id: '01',
    name: '南部セブン協会6課 イサン',
    org: 'セブン',
    skills: [
      { name: 'フレッシュ', file: '01-7-s1.png' },
      { name: 'リポスト', file: '01-7-s2.png' },
      { name: 'ムリネ', file: '01-7-s3.png' }
    ]
  },
  {
    id: '02',
    name: '南部セブン協会4課 ファウスト',
    org: 'セブン',
    skills: [
      { name: '予測分析', file: '02-7-s1.png' },
      { name: '対象解体', file: '02-7-s2.png' },
      { name: 'プロファイリング', file: '02-7-s3.png' }
    ]
  },
  {
    id: '04',
    name: '南部セブン協会6課 良秀',
    org: 'セブン',
    skills: [
      { name: 'スラッシュ', file: '04-7-s1.png' },
      { name: 'アッパースラッシュ', file: '04-7-s2.png' },
      { name: 'スワッシュ', file: '04-7-s3.png' }
    ]
  },
  {
    id: '07',
    name: '南部セブン協会4課 ヒースクリフ',
    org: 'セブン',
    skills: [
      { name: '直感', file: '04-7-s1.png' },
      { name: '事後収拾', file: '04-7-s2.png' },
      { name: '現場資料分析', file: '04-7-s3.png' }
    ]
  },
  {
    id: '12',
    name: '南部セブン協会6課 部長 ウーティス',
    org: 'セブン',
    skills: [
      { name: '予測分析', file: '12-7-s1.png' },
      { name: '現場指揮', file: '12-7-s2.png' },
      { name: '隙看破', file: '12-7-s3.png' }
    ]
  },
  {
    id: '09',
    name: '北部ヂェーヴィチ協会3課 ロージャ',
    org: 'ヂェーヴィチ',
    skills: [
      { name: 'デリバリーキャリア-崩壊ナイフ', file: '09-9-s1.png' },
      { name: 'デリバリーキャリア- ガジェット射出', file: '09-9-s2.png' },
      { name: 'ポルー！ちょっと頑張って！', file: '09-9-s3.png' }
    ]
  },
  {
    id: '11',
    name: '北部ヂェーヴィチ協会3課 シンクレア',
    org: 'ヂェーヴィチ',
    skills: [
      { name: 'デリバリーキャリア- 崩壊ハンマー', file: '11-9-s1.png' },
      { name: 'デリバリーキャリア- 突破ガジェット', file: '11-9-s2.png' },
      { name: 'ポルードニツァ… お願いします！', file: '11-9-s3.png' }
    ]
  },
  {
    id: '01',
    name: '南部ディエーチ協会4課 イサン',
    org: 'ディエーチ',
    skills: [
      { name: '知識消耗', file: '01-10-s1.png' },
      { name: '締め閉じる', file: '01-10-s2.png' },
      { name: '知識の加護', file: '01-10-s3.png' }
    ]
  },
  {
    id: '05',
    name: '南部ディエーチ協会4課 部長 ムルソー',
    org: 'ディエーチ',
    skills: [
      { name: '学業精進', file: '05-10-s1.png' },
      { name: '学びの時間', file: '05-10-s2.png' },
      { name: '知識全焼', file: '05-10-s3.png' }
    ]
  },
  {
    id: '06',
    name: '南部ディエーチ協会4課 ホンル',
    org: 'ディエーチ',
    skills: [
      { name: '知識消耗', file: '06-10-s1.png' },
      { name: '開け放つ', file: '06-10-s2.png' },
      { name: '循環する知識', file: '06-10-s3.png' }
    ]
  },
  {
    id: '09',
    name: '南部ディエーチ協会4課 ロージャ',
    org: 'ディエーチ',
    skills: [
      { name: '無知を明かさん', file: '09-10-s1.png' },
      { name: '知識の重さ', file: '09-10-s2.png' },
      { name: '苦痛に満ちた啓蒙', file: '09-10-s3.png' }
    ]
  },
  {
    id: '07',
    name: '南部ウーフィ協会3課 ヒースクリフ',
    org: 'ウーフィ',
    skills: [
      { name: '履行勧告', file: '07-11-s1.png' },
      { name: '最終警告', file: '07-11-s2.png' },
      { name: '執行宣告', file: '07-11-s3.png' }
    ]
  },
  {
    id: '01',
    name: '黒獣-午筆頭 イサン',
    org: 'H',
    skills: [
      { name: '切り伏せん', file: '01-H-s1.png' },
      { name: '月刀撃', file: '01-H-s2.png' },
      { name: '先鋒走破', file: '01-H-s3.png' },
      { name: '黒風馬脚月斬', file: '01-H-s3_2.png' }
    ]
  },
  {
    id: '02',
    name: '黒獣-卯筆頭 ファウスト',
    org: 'H',
    skills: [
      { name: '瞬歩', file: '02-H-s1.png' },
      { name: '道を切り拓きます、主君。', file: '02-H-s2.png' },
      { name: '目でも耳でも追えぬように。', file: '02-H-s3.png' },
      { name: '黒獣 卯 奥義-雲解顕現', file: '02-H-s3_2.png' }
    ]
  },
  {
    id: '03',
    name: '黒獣-未 ドンキホーテ',
    org: 'H',
    skills: [
      { name: '突破', file: '03-H-s1.png' },
      { name: '破竹之勢', file: '03-H-s2.png' },
      { name: '破砕角', file: '03-H-s3.png' }
    ]
  },
  {
    id: '04',
    name: '黒獣-卯 良秀',
    org: 'H',
    skills: [
      { name: '瞬歩', file: '04-H-s1.png' },
      { name: '刻まれた通り', file: '04-H-s2.png' },
      { name: '呪いが刻まれた剣をブッ刺してやろう', file: '04-H-s3.png' }
    ]
  },
  {
    id: '07',
    name: '黒獣-酉筆頭 ヒースクリフ',
    org: 'H',
    skills: [
      { name: '啄んでやる', file: '07-H-s1.png' },
      { name: '爪で引き裂いてやる', file: '07-H-s2.png' },
      { name: '血炎乱舞', file: '07-H-s3.png' },
      { name: '血天下鷄舞乱刀', file: '07-H-s3_2.png' }
    ]
  },
  {
    id: '09',
    name: '黒獣-巳 ロージャ',
    org: 'H',
    skills: [
      { name: '巳閃', file: '09-H-s1.png' },
      { name: '巳の牙', file: '09-H-s2.png' },
      { name: '絶命巳乱', file: '09-H-s3.png' }
    ]
  },
  {
    id: '11',
    name: '黒獣-酉 シンクレア',
    org: 'H',
    skills: [
      { name: '燃え上がる血の匂いに…。', file: '11-H-s1.png' },
      { name: '酔いつ暴れまわってみせましょう。', file: '11-H-s2.png' },
      { name: '血炎亂舞', file: '11-H-s3.png' }
    ]
  },
  {
    id: '12',
    name: '黒獣-卯 ウーティス',
    org: 'H',
    skills: [
      { name: '瞬歩', file: '12-H-s1.png' },
      { name: '刺殺', file: '12-H-s2.png' },
      { name: '刻呪殺剣', file: '12-H-s3.png' }
    ]
  },
  {
    id: '13',
    name: '黒獣-巳 グレゴール',
    org: 'H',
    skills: [
      { name: '巳の牙', file: '13-H-s1.png' },
      { name: '視界の外から抉り抜く', file: '13-H-s2.png' },
      { name: '絶巳捥徹', file: '13-H-s3.png' }
    ]
  },
  {
    id: '04',
    name: '鴻園の放浪武者 良秀',
    org: 'H',
    skills: [
      { name: 'おい、下がれ', file: '04-H-s1.png' },
      { name: '銘肌鏤骨', file: '04-H-s2.png' },
      { name: '加斥我援', file: '04-H-s3.png' }
    ]
  },
  {
    id: '06',
    name: '鴻園の君主 ホンル',
    org: 'H',
    skills: [
      { name: '道を拓きたいものだ', file: '06-H-s1.png' },
      { name: '汚血絶志竟成', file: '06-H-s2.png' },
      { name: '黒獣たちよ、応えろ', file: '06-H-s3.png' },
      { name: '君主の道を拓こうぞ', file: '06-H-s3_2.png' }
    ]
  },
  {
    id: '08',
    name: '家主候補 イシュメール',
    org: 'H',
    skills: [
      { name: '赤撃', file: '08-H-s1.png' },
      { name: '赤撃-始', file: '08-H-s1_2.png' },
      { name: '赤鳳', file: '08-H-s2.png' },
      { name: '赤春', file: '08-H-s3.png' }
    ]
  },
  {
    id: '01',
    name: 'ロボトミーE.G.O::厳粛な哀悼 イサン',
    org: 'L',
    skills: [
      { name: '往にし者へ祝辞を', file: '01-L-s1.png' },
      { name: '残りし者へ厳粛な哀悼を', file: '01-L-s2.png' },
      { name: '葬儀はイサンより、以上。', file: '01-L-s3.png' }
    ]
  },
  {
    id: '02',
    name: '生き残った ロボトミー職員 ファウスト',
    org: 'L',
    skills: [
      { name: '単撃', file: '02-Lold-s1.png' },
      { name: '深斬り', file: '02-Lold-s2.png' },
      { name: '機会狙い', file: '02-Lold-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'ロボトミーE.G.O:: 愛と憎悪の名の下に ドンキホーテ(表)',
    org: 'L',
    skills: [
      { name: '管理人殿の命に従い参上！', file: '03-L-s1_1.png' },
      { name: '愛で!よっ!', file: '03-L-s2_1.png' },
      { name: 'アルカナ･ビート! /マイナー･アルカナ･スレイブ!!!', file: '03-L-s3_1.png' }
    ]
  },
  {
    id: '03',
    name: 'ロボトミーE.G.O:: 愛と憎悪の名の下に ドンキホーテ(裏)',
    org: 'L',
    skills: [
      { name: '悪党は…どこ…？', file: '03-L-s1_2.png' },
      { name: '私の頭から出て行ってくれ…。', file: '03-L-s2_2.png' },
      { name: 'リバースド･ビート /リバースド･アルカナ･スレイブ', file: '03-L-s3_2.png' }
    ]
  },
  {
    id: '02',
    name: 'ロボトミーE.G.O::後悔 ファウスト',
    org: 'L',
    skills: [
      { name: '締め付ける拘束具', file: '02-L-s1.png' },
      { name: '金属の響き', file: '02-L-s2.png' },
      { name: '解かれた暴力性', file: '02-L-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'ロボトミーE.G.O::提灯 ドンキホーテ',
    org: 'L',
    skills: [
      { name: '噛み砕いてやろう！', file: '03-Lold-s1.png' },
      { name: '発光擬餌', file: '03-Lold-s2.png' },
      { name: 'ぐるぐるムシャムシャムシャ！', file: '03-Lold-s3.png' }
    ]
  },
  {
    id: '04',
    name: 'ロボトミーE.G.O::赤眼・懺悔 良秀',
    org: 'L',
    skills: [
      { name: 'どっちも黙れ', file: '04-L-s1.png' },
      { name: 'く・ヅ/しゃ・こ', file: '04-L-s2.png' },
      { name: 'ドタマを割る', file: '04-L-s3.png' },
      { name: 'ガチでドタマを割る', file: '04-L-s3_2.png' }
    ]
  },
  {
    id: '09',
    name: 'ロボトミーE.G.O:: 涙で研ぎ澄まされた剣 ロージャ(表)',
    org: 'L',
    skills: [
      { name: '騎士の保護', file: '09-L-s1_1.png' },
      { name: '正義の力で', file: '09-L-s2_1.png' },
      { name: 'アルカナ･ピアース', file: '09-L-s3_1.png' }
    ]
  },
  {
    id: '09',
    name: 'ロボトミーE.G.O:: 涙で研ぎ澄まされた剣 ロージャ(裏)',
    org: 'L',
    skills: [
      { name: '色褪せた信条', file: '09-L-s1_2.png' },
      { name: '涙で研ぎ澄まされた剣で', file: '09-L-s2_2.png' },
      { name: 'アルカナ･ティアー･アンド･ピアース', file: '09-L-s3_2.png' }
    ]
  },
  {
    id: '12',
    name: 'ロボトミーE.G.O::魔弾 ウーティス',
    org: 'L',
    skills: [
      { name: '着火', file: '12-Lold-s1.png' },
      { name: '魔弾起爆', file: '12-Lold-s2.png' },
      { name: '魔弾射撃', file: '12-Lold-s3.png' }
    ]
  },
  {
    id: '01',
    name: 'N社E.G.O::凶弾 イサン',
    org: 'N',
    skills: [
      { name: '隙把握', file: '01-N-s1.png' },
      { name: '貫かん', file: '01-N-s2.png' },
      { name: '対象調整射撃', file: '01-N-s3.png' }
    ]
  },
  {
    id: '02',
    name: '握る者 ファウスト',
    org: 'N',
    skills: [
      { name: '狂笑', file: '02-N-s1.png' },
      { name: '握り締める', file: '02-N-s2.png' },
      { name: '処断', file: '02-N-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'N社 中槌 ドンキホーテ',
    org: 'N',
    skills: [
      { name: '正しい浄化', file: '03-N-s1.png' },
      { name: '執行！', file: '03-N-s2.png' },
      { name: '狂的な審判', file: '03-N-s3.png' }
    ]
  },
  {
    id: '04',
    name: 'N社E.G.O::軽蔑、畏敬 良秀',
    org: 'N',
    skills: [
      { name: '軽蔑すべきもの', file: '04-N-s1.png' },
      { name: '畏敬せよ', file: '04-N-s2.png' },
      { name: '畏敬、軽蔑', file: '04-N-s3.png' },
      { name: '軽蔑の下に降り注ぐ畏敬の視線', file: '04-N-s3_2.png' }
    ]
  },
  {
    id: '05',
    name: 'N社 大鎚 ムルソー',
    org: 'N',
    skills: [
      { name: '貫く', file: '05-N-s1.png' },
      { name: '罪を洗い流さん', file: '05-N-s2.png' },
      { name: '異端抹殺', file: '05-N-s3.png' }
    ]
  },
  {
    id: '07',
    name: 'N社 小鎚 ヒースクリフ',
    org: 'N',
    skills: [
      { name: '未熟な釘打ち', file: '07-N-s1.png' },
      { name: '浄…化！', file: '07-N-s2.png' },
      { name: '微弱な断罪', file: '07-N-s3.png' }
    ]
  },
  {
    id: '09',
    name: 'N社 中鎚 ロージャ',
    org: 'N',
    skills: [
      { name: '忠実な釘打ち', file: '09-N-s1.png' },
      { name: '狂的な浄化', file: '09-N-s2.png' },
      { name: '鉄の断罪', file: '09-N-s3.png' }
    ]
  },
  {
    id: '11',
    name: '握らんとする者 シンクレア',
    org: 'N',
    skills: [
      { name: '追い立てられた審判', file: '11-N-s1.png' },
      { name: '判断を止めた執行', file: '11-N-s2.png' },
      { name: '自滅的浄化', file: '11-N-s3.png' }
    ]
  },
  {
    id: '05',
    name: 'R社第4群サイチーム ムルソー',
    org: 'R',
    skills: [
      { name: '重い衝突', file: '05-R-s1.png' },
      { name: '壊す', file: '05-R-s2.png' },
      { name: 'サイの突進', file: '05-R-s3.png' }
    ]
  },
  {
    id: '06',
    name: 'R社第4群トナカイチーム ホンル',
    org: 'R',
    skills: [
      { name: 'エネルギー強打', file: '06-R-s1.png' },
      { name: '精神の鞭', file: '06-R-s2.png' },
      { name: '集中', file: '06-R-s3.png' }
    ]
  },
  {
    id: '07',
    name: 'R社第4群 ウサギチーム ヒースクリフ',
    org: 'R',
    skills: [
      { name: '草食み', file: '07-R-s1.png' },
      { name: '集中射撃', file: '07-R-s2.png' },
      { name: '迅速制圧', file: '07-R-s3.png' }
    ]
  },
  {
    id: '08',
    name: 'R社第4群 トナカイチーム イシュメール',
    org: 'R',
    skills: [
      { name: '精神加撃', file: '08-R-s1.png' },
      { name: '灼きつける', file: '08-R-s2.png' },
      { name: '精神の鞭', file: '08-R-s3.png' }
    ]
  },
  {
    id: '09',
    name: 'R社第4群トナカイチーム ロージャ',
    org: 'R',
    skills: [
      { name: 'エネルギー強打-「クリスマスに出勤させた対価だよ」', file: '09-R-s1.png' },
      { name: '集中-「クリスマスカラーに爆ぜちゃえ」', file: '09-R-s2.png' },
      { name: '精神の鞭-「アハハ…みてこれ私たちみんなクリスマスクラッカーだ」', file: '09-R-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'T社3級徴収職職員 ドンキホーテ',
    org: 'T',
    skills: [
      { name: 'いざ徴収準備をば', file: '03-T-s1.png' },
      { name: 'T社製加速切断機', file: '03-T-s2.png' },
      { name: 'そこ、停まりたまえ！', file: '03-T-s3.png' }
    ]
  },
  {
    id: '09',
    name: 'T社2級徴収職職員 ロージャ',
    org: 'T',
    skills: [
      { name: '徴収準備', file: '09-T-s1.png' },
      { name: 'T社式制圧格闘', file: '09-T-s2.png' },
      { name: '徴収執行', file: '09-T-s3.png' }
    ]
  },
  {
    id: '12',
    name: 'T社3級強制徴収職職員 ウーティス',
    org: 'T',
    skills: [
      { name: '徴収準備', file: '12-T-s1.png' },
      { name: 'T社共振モジュール', file: '12-T-s2.png' },
      { name: 'T社3型徴収鉄槌最大展開', file: '12-T-s3.png' }
    ]
  },
  {
    id: '01',
    name: 'W社3級整理要員 イサン',
    org: 'W',
    skills: [
      { name: '次元を裂く', file: '01-W-s1.png' },
      { name: 'エネルギー循環', file: '01-W-s2.png' },
      { name: '次元の狭間', file: '01-W-s3.png' }
    ]
  },
  {
    id: '02',
    name: 'W社 2級 整理要員 ファウスト',
    org: 'W',
    skills: [
      { name: 'エネルギー循環', file: '02-W-s1.png' },
      { name: '跳躍', file: '02-W-s2.png' },
      { name: '過充電', file: '02-W-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'W社 3級 整理要員 ドンキホーテ',
    org: 'W',
    skills: [
      { name: '切断', file: '03-W-s1.png' },
      { name: '跳躍', file: '03-W-s2.png' },
      { name: '空間切断', file: '03-W-s3.png' }
    ]
  },
  {
    id: '04',
    name: 'W社 3級整理要員 良秀',
    org: 'W',
    skills: [
      { name: 'エ・循', file: '04-W-s1.png' },
      { name: '跳躍', file: '04-W-s2.png' },
      { name: '次・魔・空・切', file: '04-W-s3.png' }
    ]
  },
  {
    id: '05',
    name: 'W社 2級 整理要員 ムルソー',
    org: 'W',
    skills: [
      { name: '切断', file: '05-W-s1.png' },
      { name: 'エネルギー循環', file: '05-W-s2.png' },
      { name: 'エネルギー交流', file: '05-W-s3.png' }
    ]
  },
  {
    id: '06',
    name: 'W社 2級整理要員 ホンル',
    org: 'W',
    keywords: ['charge', 'rupture'],
    skills: [
      { name: 'エネルギー循環', file: '06-W-s1.png' },
      { name: '整理支援', file: '06-W-s2.png' },
      { name: '充電力場展開', file: '06-W-s3.png' }
    ]
  },
  {
    id: '07',
    name: 'W社4級整理要員-CCA ヒースクリフ',
    org: 'W',
    keywords: ['charge', 'rupture'],
    skills: [
      { name: '混雑乗客の整理', file: '07-W-s1.png' },
      { name: 'ブースト・エルボーカッター', file: '07-W-s2.png' },
      { name: '空間切断- CCAオーバードライブ', file: '07-W-s3.png' }
    ]
  },
  {
    id: '12',
    name: 'W社3級整理要員チーフ ウーティス',
    org: 'W',
    keywords: ['charge', 'rupture'],
    skills: [
      { name: '波動', file: '12-W-s1.png' },
      { name: '充電跳躍', file: '12-W-s2.png' },
      { name: '次元切断', file: '12-W-s3.png' }
    ]
  },

  {
    id: '01',
    name: '剣契 殺手 イサン',
    org: '剣契',
    skills: [
      { name: '撃勢', file: '01-komuge-s1.png' },
      { name: 'ひんねじる', file: '01-komuge-s2.png' },
      { name: '異面賛刺', file: '01-komuge-s3.png' }
    ]
  },
  {
    id: '02',
    name: '剣契 殺手 ファウスト',
    org: '剣契',
    skills: [
      { name: '月下剣舞', file: '02-komuge-s1.png' },
      { name: '刺法', file: '02-komuge-s2.png' },
      { name: '舞い散る紅梅', file: '02-komuge-s3.png' }
    ]
  },
  {
    id: '03',
    name: '剣契 殺手 ドンキホーテ',
    org: '剣契',
    skills: [
      { name: '抜剣', file: '03-komuge-s1.png' },
      { name: '剣軌', file: '03-komuge-s2.png' },
      { name: 'さらば！', file: '03-komuge-s3.png' }
    ]
  },
  {
    id: '05',
    name: '剣契 頭目 ムルソー',
    org: '剣契',
    skills: [
      { name: '抜剣', file: '05-komuge-s1.png' },
      { name: '刺法', file: '05-komuge-s2.png' },
      { name: '肉斬', file: '05-komuge-s3.png' }
    ]
  },
  {
    id: '11',
    name: '剣契 殺手 シンクレア',
    org: '剣契',
    skills: [
      { name: '斬貫', file: '11-komuge-s1.png' },
      { name: '連斬', file: '11-komuge-s2.png' },
      { name: '骨断', file: '11-komuge-s3.png' }
    ]
  },
  {
    id: '12',
    name: '剣契 殺手 ウーティス',
    org: '剣契',
    skills: [
      { name: '抜剣', file: '12-komuge-s1.png' },
      { name: '刺法', file: '12-komuge-s2.png' },
      { name: '腰撃勢', file: '12-komuge-s3.png' }
    ]
  },
  {
    id: '04',
    name: '黒雲会 若衆 良秀',
    org: '黒雲会',
    skills: [
      { name: '発勁', file: '04-kurokumo-s1.png' },
      { name: '後始末', file: '04-kurokumo-s2.png' },
      { name: '雲の撹乱', file: '04-kurokumo-s3.png' }
    ]
  },
  {
    id: '06',
    name: '黒雲会 若衆 ホンル',
    org: '黒雲会',
    skills: [
      { name: '切り払う', file: '06-kurokumo-s1.png' },
      { name: '雲の切開', file: '06-kurokumo-s2.png' },
      { name: '雲の破裂', file: '06-kurokumo-s3.png' }
    ]
  },
  {
    id: '07',
    name: '黒雲会 若衆 ヒースクリフ',
    org: '黒雲会',
    skills: [
      { name: '雲斬り', file: '07-kurokumo-s1.png' },
      { name: '嵐雲', file: '07-kurokumo-s2.png' },
      { name: '雷鳴斬り', file: '07-kurokumo-s3.png' }
    ]
  },
  {
    id: '08',
    name: '黒雲会 副組長 イシュメール',
    org: '黒雲会',
    skills: [
      { name: '後始末', file: '08-kurokumo-s1.png' },
      { name: '鋭い刃', file: '08-kurokumo-s2.png' },
      { name: '墨塗り', file: '08-kurokumo-s3.png' }
    ]
  },
  {
    id: '09',
    name: '黒雲会 若衆 ロージャ',
    org: '黒雲会',
    skills: [
      { name: '鋭い刃', file: '09-kurokumo-s1.png' },
      { name: '飛び散る剣撃', file: '09-kurokumo-s2.png' },
      { name: '快刀乱麻', file: '09-kurokumo-s3.png' }
    ]
  },
  {
    id: '13',
    name: '黒雲会 副組長 グレゴール',
    org: '黒雲会',
    skills: [
      { name: '雲斬り', file: '13-kurokumo-s1.png' },
      { name: '墨雲', file: '13-kurokumo-s2.png' },
      { name: '墨雲裂割', file: '13-kurokumo-s3.png' }
    ]
  },

  {
    id: '01',
    name: '薬指 点描派スチューデント イサン',
    org: '五本指',
    skills: [
      { name: '上塗り', file: '01-fingerring-s1.png' },
      { name: '血点描画', file: '01-fingerring-s2.png' },
      { name: '滴血の彩色', file: '01-fingerring-s3.png' }
    ]
  },
  {
    id: '12',
    name: '薬指 点描派スチューデント ウーティス',
    org: '五本指',
    skills: [
      { name: '点を打つ', file: '12-fingerring-s1.png' },
      { name: '血描画', file: '12-fingerring-s2.png' },
      { name: '作品精査', file: '12-fingerring-s3.png' }
    ]
  },
  {
    id: '03',
    name: '中指 末妹 ドンキホーテ',
    org: '五本指',
    skills: [
      { name: '帳簿確認', file: '03-fingermiddle-s1.png' },
      { name: '義理証明', file: '03-fingermiddle-s2.png' },
      { name: '正義の仕返し', file: '03-fingermiddle-s3.png' }
    ]
  },
  {
    id: '05',
    name: '中指 末弟 ムルソー',
    org: '五本指',
    skills: [
      { name: '覚える', file: '05-fingermiddle-s1.png' },
      { name: '義理の鎖', file: '05-fingermiddle-s2.png' },
      { name: '刻む', file: '05-fingermiddle-s3.png' }
    ]
  },
  {
    id: '11',
    name: '中指 末弟 シンクレア',
    org: '五本指',
    skills: [
      { name: 'お前か！', file: '11-fingermiddle-s1.png' },
      { name: '倍にして喰らわせてやる', file: '11-fingermiddle-s2.png' },
      { name: 'きっちり刻み込め', file: '11-fingermiddle-s3.png' }
    ]
  },
  {
    id: '05',
    name: '東部親指 カポIIII ムルソー',
    org: '五本指',
    skills: [
      { name: '二連斬-【爆】', file: '05-fingerthumb-s1.png' },
      { name: '三連撃-【爆】', file: '05-fingerthumb-s2.png' },
      { name: '快刀亂麻', file: '05-fingerthumb-s3.png' },
      { name: '超絶猛虎殺撃乱斬', file: '05-fingerthumb-s3_2.png' }
    ]
  },
  {
    id: '11',
    name: '東部親指 ソルダートII シンクレア',
    org: '五本指',
    skills: [
      { name: '礼に則り。', file: '11-fingerthumb-s1.png' },
      { name: '親指へ尊重を。', file: '11-fingerthumb-s2.png' },
      { name: '推力集中', file: '11-fingerthumb-s3.png' }
    ]
  },
  {
    id: '03',
    name: 'ラ・マンチャランド室長 ドンキホーテ',
    org: '血鬼',
    skills: [
      { name: '耐えるのは終わりだ', file: '03-land-s1_1.png' },
      { name: '亜流サンチョ硬血6式-鞭', file: '03-land-s1_2.png' },
      { name: '思うがままに繰り広げよ', file: '03-land-s2_1.png' },
      { name: '亜流サンチョ硬血8式-割けるがよい', file: '03-land-s2_2.png' },
      { name: '貫かせていただきましょう', file: '03-land-s3_1.png' },
      { name: 'サンチョ流硬血奥義-ラ・サングレ', file: '03-land-s3_2.png' }
    ]
  },
  {
    id: '05',
    name: 'ラ・マンチャランドの王子 ムルソー',
    org: '血鬼',
    skills: [
      { name: '行進指揮', file: '05-land-s1.png' },
      { name: '再建の義務', file: '05-land-s2.png' },
      { name: '血を固め、私と貴方にまとわせる。', file: '05-land-s3.png' },
      { name: 'ウヴェルテューレ', file: '05-land-s3_2.png' }
    ]
  },
  {
    id: '09',
    name: 'ラ・マンチャランドの姫 ロージャ',
    org: '血鬼',
    skills: [
      { name: '下がりなさい…', file: '09-land-s1.png' },
      { name: '撒き散らし、磨り潰されよ', file: '09-land-s2.png' },
      { name: '祝祭は終わるの', file: '09-land-s3.png' },
      { name: 'ドンキホーテ流硬血奥義 フィナーレ', file: '09-land-s3_2.png' }
    ]
  },
  {
    id: '12',
    name: 'ラ・マンチャランド理髪師 ウーティス',
    org: '血鬼',
    skills: [
      { name: '裁縫', file: '12-land-s1.png' },
      { name: 'カットオフ', file: '12-land-s2.png' },
      { name: '新しいドレスをこしらえてやろう！', file: '12-land-s3.png' }
    ]
  },
  {
    id: '13',
    name: 'ラ・マンチャランド神父 グレゴール',
    org: '血鬼',
    skills: [
      { name: '家族のための献身', file: '13-land-s1.png' },
      { name: '締め付けてくる罪悪感', file: '13-land-s2.png' },
      { name: '雪げぬ罪', file: '13-land-s3.png' }
    ]
  },

  {
    id: '02',
    name: 'ワザリング・ハイツ バトラー ファウスト',
    org: '嵐が丘',
    skills: [
      { name: '押収', file: '02-Wuthering-s1.png' },
      { name: '招かざる客の出迎え', file: '02-Wuthering-s2.png' },
      { name: '接客道四式 封心', file: '02-Wuthering-s3.png' }
    ]
  },
  {
    id: '04',
    name: 'エドガー家 チーフバトラー 良秀',
    org: '嵐が丘',
    skills: [
      { name: '応接道一式 狩り', file: '04-Wuthering-s1.png' },
      { name: '応接道第七式 捕捉', file: '04-Wuthering-s2.png' },
      { name: '応接道第二式 く・へ', file: '04-Wuthering-s3.png' }
    ]
  },
  {
    id: '05',
    name: 'デッドラビッツボス ムルソー',
    org: '嵐が丘',
    skills: [
      { name: 'バットで殴る', file: '05-Wuthering-s1.png' },
      { name: '打ち落とす', file: '05-Wuthering-s2.png' },
      { name: '打っ付ける', file: '05-Wuthering-s3.png' }
    ]
  },
  {
    id: '07',
    name: 'ワイルドハント ヒースクリフ',
    org: '嵐が丘',
    skills: [
      { name: '斬首', file: '07-Wuthering-s1.png' },
      { name: '追悼行進', file: '07-Wuthering-s2.png' },
      { name: 'レクイエム', file: '07-Wuthering-s3.png' },
      { name: '悲嘆し、哀嘆し、破綻せよ', file: '07-Wuthering-s3_2.png' }
    ]
  },
  {
    id: '12',
    name: 'ワザリング・ハイツ チーフバトラー ウーティス',
    org: '嵐が丘',
    skills: [
      { name: 'ノック', file: '12-Wuthering-s1.png' },
      { name: '埃はたき', file: '12-Wuthering-s2.png' },
      { name: '奥様の意のままに', file: '12-Wuthering-s3.png' }
    ]
  },
  {
    id: '13',
    name: 'エドガー家 継承者 グレゴール',
    org: '嵐が丘',
    skills: [
      { name: 'セイバースラッシュ', file: '13-Wuthering-s1.png' },
      { name: 'ルミーズ', file: '13-Wuthering-s2.png' },
      { name: '悪夢狩り', file: '13-Wuthering-s3.png' }
    ]
  },
  {
    id: '08',
    name: 'エドガー家 バトラー イシュメール',
    org: '嵐が丘',
    skills: [
      { name: '掃き払う', file: '08-Wuthering-s1.png' },
      { name: '整理整頓', file: '08-Wuthering-s2.png' },
      { name: '胴体束縛術', file: '08-Wuthering-s3.png' }
    ]
  }
];
