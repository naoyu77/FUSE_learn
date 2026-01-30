// 映画データ（100本）
export const movies = [
  // 洋画 - クラシック
  { title: "ゴッドファーザー", director: "フランシス・フォード・コッポラ", year: 1972, genre: "ドラマ", yomi: "godfather" },
  { title: "ショーシャンクの空に", director: "フランク・ダラボン", year: 1994, genre: "ドラマ", yomi: "shawshank しょーしゃんく" },
  { title: "パルプ・フィクション", director: "クエンティン・タランティーノ", year: 1994, genre: "クライム", yomi: "pulp fiction ぱるぷ" },
  { title: "フォレスト・ガンプ", director: "ロバート・ゼメキス", year: 1994, genre: "ドラマ", yomi: "forrest gump ふぉれすと" },
  { title: "マトリックス", director: "ウォシャウスキー姉妹", year: 1999, genre: "SF", yomi: "matrix まとりっくす" },
  { title: "ファイト・クラブ", director: "デヴィッド・フィンチャー", year: 1999, genre: "ドラマ", yomi: "fight club ふぁいと" },
  { title: "羊たちの沈黙", director: "ジョナサン・デミ", year: 1991, genre: "サスペンス", yomi: "ひつじたちのちんもく silence of the lambs" },
  { title: "シンドラーのリスト", director: "スティーヴン・スピルバーグ", year: 1993, genre: "ドラマ", yomi: "schindler's list しんどらー" },
  { title: "プライベート・ライアン", director: "スティーヴン・スピルバーグ", year: 1998, genre: "戦争", yomi: "saving private ryan ぷらいべーと" },
  { title: "タイタニック", director: "ジェームズ・キャメロン", year: 1997, genre: "ロマンス", yomi: "titanic たいたにっく" },

  // 洋画 - 2000年代
  { title: "ダークナイト", director: "クリストファー・ノーラン", year: 2008, genre: "アクション", yomi: "dark knight だーくないと" },
  { title: "インセプション", director: "クリストファー・ノーラン", year: 2010, genre: "SF", yomi: "inception いんせぷしょん" },
  { title: "インターステラー", director: "クリストファー・ノーラン", year: 2014, genre: "SF", yomi: "interstellar いんたーすてらー" },
  { title: "テネット", director: "クリストファー・ノーラン", year: 2020, genre: "SF", yomi: "tenet てねっと" },
  { title: "グラディエーター", director: "リドリー・スコット", year: 2000, genre: "アクション", yomi: "gladiator ぐらでぃえーたー" },
  { title: "ロード・オブ・ザ・リング", director: "ピーター・ジャクソン", year: 2001, genre: "ファンタジー", yomi: "lord of the rings ろーど" },
  { title: "アバター", director: "ジェームズ・キャメロン", year: 2009, genre: "SF", yomi: "avatar あばたー" },
  { title: "ソーシャル・ネットワーク", director: "デヴィッド・フィンチャー", year: 2010, genre: "ドラマ", yomi: "social network そーしゃる" },
  { title: "ゴーン・ガール", director: "デヴィッド・フィンチャー", year: 2014, genre: "サスペンス", yomi: "gone girl ごーん" },
  { title: "ラ・ラ・ランド", director: "デイミアン・チャゼル", year: 2016, genre: "ミュージカル", yomi: "la la land ららら" },

  // 洋画 - マーベル/DC
  { title: "アイアンマン", director: "ジョン・ファヴロー", year: 2008, genre: "アクション", yomi: "iron man あいあんまん" },
  { title: "アベンジャーズ", director: "ジョス・ウェドン", year: 2012, genre: "アクション", yomi: "avengers あべんじゃーず" },
  { title: "ガーディアンズ・オブ・ギャラクシー", director: "ジェームズ・ガン", year: 2014, genre: "アクション", yomi: "guardians of the galaxy がーでぃあんず" },
  { title: "ブラックパンサー", director: "ライアン・クーグラー", year: 2018, genre: "アクション", yomi: "black panther ぶらっくぱんさー" },
  { title: "スパイダーマン：ノー・ウェイ・ホーム", director: "ジョン・ワッツ", year: 2021, genre: "アクション", yomi: "spider-man すぱいだーまん" },
  { title: "ジョーカー", director: "トッド・フィリップス", year: 2019, genre: "ドラマ", yomi: "joker じょーかー" },
  { title: "ワンダーウーマン", director: "パティ・ジェンキンス", year: 2017, genre: "アクション", yomi: "wonder woman わんだー" },

  // 洋画 - アニメーション
  { title: "トイ・ストーリー", director: "ジョン・ラセター", year: 1995, genre: "アニメ", yomi: "toy story とい" },
  { title: "ファインディング・ニモ", director: "アンドリュー・スタントン", year: 2003, genre: "アニメ", yomi: "finding nemo にも" },
  { title: "モンスターズ・インク", director: "ピート・ドクター", year: 2001, genre: "アニメ", yomi: "monsters inc もんすたーず" },
  { title: "リメンバー・ミー", director: "リー・アンクリッチ", year: 2017, genre: "アニメ", yomi: "coco りめんばー" },
  { title: "アナと雪の女王", director: "クリス・バック", year: 2013, genre: "アニメ", yomi: "frozen あなゆき" },
  { title: "ズートピア", director: "バイロン・ハワード", year: 2016, genre: "アニメ", yomi: "zootopia ずーとぴあ" },

  // 邦画 - スタジオジブリ
  { title: "となりのトトロ", director: "宮崎駿", year: 1988, genre: "アニメ", yomi: "となりのととろ totoro" },
  { title: "千と千尋の神隠し", director: "宮崎駿", year: 2001, genre: "アニメ", yomi: "せんとちひろのかみかくし spirited away" },
  { title: "もののけ姫", director: "宮崎駿", year: 1997, genre: "アニメ", yomi: "もののけひめ princess mononoke" },
  { title: "風の谷のナウシカ", director: "宮崎駿", year: 1984, genre: "アニメ", yomi: "かぜのたにのなうしか nausicaa" },
  { title: "天空の城ラピュタ", director: "宮崎駿", year: 1986, genre: "アニメ", yomi: "てんくうのしろらぴゅた laputa" },
  { title: "魔女の宅急便", director: "宮崎駿", year: 1989, genre: "アニメ", yomi: "まじょのたっきゅうびん kiki" },
  { title: "紅の豚", director: "宮崎駿", year: 1992, genre: "アニメ", yomi: "くれないのぶた porco rosso" },
  { title: "ハウルの動く城", director: "宮崎駿", year: 2004, genre: "アニメ", yomi: "はうるのうごくしろ howl" },
  { title: "崖の上のポニョ", director: "宮崎駿", year: 2008, genre: "アニメ", yomi: "がけのうえのぽにょ ponyo" },
  { title: "風立ちぬ", director: "宮崎駿", year: 2013, genre: "アニメ", yomi: "かぜたちぬ the wind rises" },
  { title: "君たちはどう生きるか", director: "宮崎駿", year: 2023, genre: "アニメ", yomi: "きみたちはどういきるか the boy and the heron" },
  { title: "火垂るの墓", director: "高畑勲", year: 1988, genre: "アニメ", yomi: "ほたるのはか grave of the fireflies" },
  { title: "おもひでぽろぽろ", director: "高畑勲", year: 1991, genre: "アニメ", yomi: "おもいでぽろぽろ only yesterday" },
  { title: "平成狸合戦ぽんぽこ", director: "高畑勲", year: 1994, genre: "アニメ", yomi: "へいせいたぬきがっせんぽんぽこ pom poko" },
  { title: "かぐや姫の物語", director: "高畑勲", year: 2013, genre: "アニメ", yomi: "かぐやひめのものがたり tale of princess kaguya" },

  // 邦画 - 新海誠
  { title: "君の名は。", director: "新海誠", year: 2016, genre: "アニメ", yomi: "きみのなは your name" },
  { title: "天気の子", director: "新海誠", year: 2019, genre: "アニメ", yomi: "てんきのこ weathering with you" },
  { title: "すずめの戸締まり", director: "新海誠", year: 2022, genre: "アニメ", yomi: "すずめのとじまり suzume" },
  { title: "秒速5センチメートル", director: "新海誠", year: 2007, genre: "アニメ", yomi: "びょうそくごせんちめーとる 5 centimeters per second" },
  { title: "言の葉の庭", director: "新海誠", year: 2013, genre: "アニメ", yomi: "ことのはのにわ garden of words" },

  // 邦画 - その他アニメ
  { title: "AKIRA", director: "大友克洋", year: 1988, genre: "アニメ", yomi: "あきら" },
  { title: "GHOST IN THE SHELL 攻殻機動隊", director: "押井守", year: 1995, genre: "アニメ", yomi: "こうかくきどうたい ghost in the shell" },
  { title: "パプリカ", director: "今敏", year: 2006, genre: "アニメ", yomi: "ぱぷりか paprika" },
  { title: "パーフェクトブルー", director: "今敏", year: 1997, genre: "アニメ", yomi: "ぱーふぇくとぶるー perfect blue" },
  { title: "東京ゴッドファーザーズ", director: "今敏", year: 2003, genre: "アニメ", yomi: "とうきょうごっどふぁーざーず tokyo godfathers" },
  { title: "時をかける少女", director: "細田守", year: 2006, genre: "アニメ", yomi: "ときをかけるしょうじょ the girl who leapt through time" },
  { title: "サマーウォーズ", director: "細田守", year: 2009, genre: "アニメ", yomi: "さまーうぉーず summer wars" },
  { title: "おおかみこどもの雨と雪", director: "細田守", year: 2012, genre: "アニメ", yomi: "おおかみこどものあめとゆき wolf children" },
  { title: "竜とそばかすの姫", director: "細田守", year: 2021, genre: "アニメ", yomi: "りゅうとそばかすのひめ belle" },
  { title: "この世界の片隅に", director: "片渕須直", year: 2016, genre: "アニメ", yomi: "このせかいのかたすみに in this corner of the world" },
  { title: "鬼滅の刃 無限列車編", director: "外崎春雄", year: 2020, genre: "アニメ", yomi: "きめつのやいば むげんれっしゃ demon slayer" },
  { title: "THE FIRST SLAM DUNK", director: "井上雄彦", year: 2022, genre: "アニメ", yomi: "すらむだんく slam dunk" },

  // 邦画 - 実写
  { title: "七人の侍", director: "黒澤明", year: 1954, genre: "時代劇", yomi: "しちにんのさむらい seven samurai" },
  { title: "羅生門", director: "黒澤明", year: 1950, genre: "ドラマ", yomi: "らしょうもん rashomon" },
  { title: "用心棒", director: "黒澤明", year: 1961, genre: "時代劇", yomi: "ようじんぼう yojimbo" },
  { title: "乱", director: "黒澤明", year: 1985, genre: "時代劇", yomi: "らん ran" },
  { title: "東京物語", director: "小津安二郎", year: 1953, genre: "ドラマ", yomi: "とうきょうものがたり tokyo story" },
  { title: "晩春", director: "小津安二郎", year: 1949, genre: "ドラマ", yomi: "ばんしゅん late spring" },
  { title: "リング", director: "中田秀夫", year: 1998, genre: "ホラー", yomi: "りんぐ ring" },
  { title: "呪怨", director: "清水崇", year: 2002, genre: "ホラー", yomi: "じゅおん ju-on" },
  { title: "バトル・ロワイアル", director: "深作欣二", year: 2000, genre: "アクション", yomi: "ばとるろわいある battle royale" },
  { title: "おくりびと", director: "滝田洋二郎", year: 2008, genre: "ドラマ", yomi: "おくりびと departures" },
  { title: "万引き家族", director: "是枝裕和", year: 2018, genre: "ドラマ", yomi: "まんびきかぞく shoplifters" },
  { title: "そして父になる", director: "是枝裕和", year: 2013, genre: "ドラマ", yomi: "そしてちちになる like father like son" },
  { title: "誰も知らない", director: "是枝裕和", year: 2004, genre: "ドラマ", yomi: "だれもしらない nobody knows" },
  { title: "怪物", director: "是枝裕和", year: 2023, genre: "ドラマ", yomi: "かいぶつ monster" },
  { title: "ドライブ・マイ・カー", director: "濱口竜介", year: 2021, genre: "ドラマ", yomi: "どらいぶまいかー drive my car" },
  { title: "偶然と想像", director: "濱口竜介", year: 2021, genre: "ドラマ", yomi: "ぐうぜんとそうぞう wheel of fortune and fantasy" },
  { title: "悪人", director: "李相日", year: 2010, genre: "ドラマ", yomi: "あくにん villain" },
  { title: "告白", director: "中島哲也", year: 2010, genre: "サスペンス", yomi: "こくはく confessions" },
  { title: "るろうに剣心", director: "大友啓史", year: 2012, genre: "アクション", yomi: "るろうにけんしん rurouni kenshin" },
  { title: "シン・ゴジラ", director: "庵野秀明", year: 2016, genre: "SF", yomi: "しんごじら shin godzilla" },
  { title: "カメラを止めるな！", director: "上田慎一郎", year: 2017, genre: "コメディ", yomi: "かめらをとめるな one cut of the dead" },

  // 洋画 - 最近の話題作
  { title: "パラサイト 半地下の家族", director: "ポン・ジュノ", year: 2019, genre: "ドラマ", yomi: "ぱらさいと parasite" },
  { title: "エブリシング・エブリウェア・オール・アット・ワンス", director: "ダニエルズ", year: 2022, genre: "SF", yomi: "えぶりしんぐ everything everywhere" },
  { title: "オッペンハイマー", director: "クリストファー・ノーラン", year: 2023, genre: "ドラマ", yomi: "おっぺんはいまー oppenheimer" },
  { title: "バービー", director: "グレタ・ガーウィグ", year: 2023, genre: "コメディ", yomi: "ばーびー barbie" },
  { title: "DUNE/デューン 砂の惑星", director: "ドゥニ・ヴィルヌーヴ", year: 2021, genre: "SF", yomi: "でゅーん dune" },
  { title: "ブレードランナー 2049", director: "ドゥニ・ヴィルヌーヴ", year: 2017, genre: "SF", yomi: "ぶれーどらんなー blade runner" },
  { title: "メッセージ", director: "ドゥニ・ヴィルヌーヴ", year: 2016, genre: "SF", yomi: "めっせーじ arrival" },
  { title: "ゲット・アウト", director: "ジョーダン・ピール", year: 2017, genre: "ホラー", yomi: "げっとあうと get out" },
  { title: "ミッドサマー", director: "アリ・アスター", year: 2019, genre: "ホラー", yomi: "みっどさまー midsommar" },
  { title: "グリーンブック", director: "ピーター・ファレリー", year: 2018, genre: "ドラマ", yomi: "ぐりーんぶっく green book" },
  { title: "ボヘミアン・ラプソディ", director: "ブライアン・シンガー", year: 2018, genre: "ドラマ", yomi: "ぼへみあん bohemian rhapsody" },
  { title: "1917 命をかけた伝令", director: "サム・メンデス", year: 2019, genre: "戦争", yomi: "1917" },
  { title: "トップガン マーヴェリック", director: "ジョセフ・コシンスキー", year: 2022, genre: "アクション", yomi: "とっぷがん top gun maverick" },
]

export const fuseOptions = {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'director', weight: 1.5 },
    { name: 'genre', weight: 1 },
    { name: 'yomi', weight: 1.5 }
  ],
  threshold: 0.4
}
