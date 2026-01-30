# Fuse.js 学習メモ

軽量でゼロ依存のファジー検索（あいまい検索）ライブラリ。

## 特徴

- タイポ（スペルミス）があってもマッチする
- バックエンド不要でクライアント側で動作
- シンプルなAPI
- 依存関係ゼロ

## インストール

```bash
npm install fuse.js
```

## 基本的な使い方

```javascript
import Fuse from 'fuse.js'

const data = [
  { title: "JavaScript入門", author: "田中太郎" },
  { title: "React実践ガイド", author: "佐藤花子" }
]

const fuse = new Fuse(data, {
  keys: ['title', 'author'],
  threshold: 0.3
})

const results = fuse.search('Javascrpt')  // タイポでもマッチする
```

## 主なオプション

| オプション | 説明 | デフォルト |
|-----------|------|-----------|
| `keys` | 検索対象のフィールド名 | - |
| `threshold` | マッチの厳しさ（0=完全一致、1=何でもマッチ） | 0.6 |
| `includeScore` | スコアを結果に含める | false |

### keys に重み付けする

```javascript
const fuse = new Fuse(data, {
  keys: [
    { name: 'title', weight: 2 },    // タイトルを重視
    { name: 'director', weight: 1.5 },
    { name: 'genre', weight: 1 }
  ]
})
```

## 日本語検索の注意点

Fuse.jsは文字ベースの比較のため、「とうきょう」と「東京」はマッチしない。

**解決策**: ひらがな読み用のフィールドを追加

```javascript
const data = [
  { name: "東京都", yomi: "とうきょう" }
]

const fuse = new Fuse(data, {
  keys: ['name', 'yomi']  // 両方を検索対象に
})
```

## インデックスの事前作成と永続化

大量データでは、インデックスを事前作成して保存すると初期化が高速になる。

### インデックスの作成と保存

```javascript
import Fuse from 'fuse.js'
import fs from 'fs'

const options = { keys: ['title', 'director'] }
const index = Fuse.createIndex(options.keys, data)

// 保存
const output = {
  options,
  data,
  index: index.toJSON()
}
fs.writeFileSync('search-index.json', JSON.stringify(output))
```

### インデックスの読み込み

```javascript
const { options, data, index } = JSON.parse(fs.readFileSync('search-index.json'))
const loadedIndex = Fuse.parseIndex(index)
const fuse = new Fuse(data, options, loadedIndex)  // 高速に初期化
```

**注意**: インデックスはJSON形式（バイナリではない）。圧縮したい場合はgzipを使用。

## ブラウザでの使用

CDNから読み込み可能：

```html
<script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>
```

### リアルタイム検索の実装

```javascript
const fuse = new Fuse(data, { keys: ['title'], threshold: 0.4 })

// inputイベントでIME変換中もリアルタイム検索
searchInput.addEventListener('input', (e) => {
  const results = fuse.search(e.target.value.trim())
  // 結果を表示
})
```

## 向いているユースケース

- ドキュメント/ブログ内検索
- オートコンプリート
- コマンドパレット（VSCodeのCmd+Pのような機能）
- 連絡先・住所検索
- 小規模ECの商品検索（数千件以下）

## 向いていないユースケース

| ケース | 代替案 |
|--------|-------|
| 大規模データ（10万件〜） | Elasticsearch, Algolia, Meilisearch |
| リアルタイム更新が必要 | サーバーサイド検索 |
| 完全一致が重要 | 通常のfilter/find |

## デモ

映画検索デモを試せます：

```bash
open demo.html
```

CLIで検索：

```bash
node build-index.js    # インデックス作成
node search.js "宮崎"  # 検索
```

## ファイル構成

```
├── demo.html          # ブラウザデモ（100本の映画）
├── movies-data.js     # 映画データ
├── build-index.js     # インデックス作成スクリプト
├── search.js          # CLI検索スクリプト
├── search-index.json  # 永続化されたインデックス
└── index.js           # 基本サンプル
```

## 参考

- 公式サイト: https://www.fusejs.io/
