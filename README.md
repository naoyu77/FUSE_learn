# Fuse.js 学習メモ

軽量でゼロ依存のファジー検索（あいまい検索）ライブラリ。

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

## 注意点

- **文字ベースの比較**: 「とうきょう」と「東京」はマッチしない
- **解決策**: ひらがな読み用のフィールドを追加して検索対象に含める

```javascript
const data = [
  { name: "東京都", yomi: "とうきょう" }
]

const fuse = new Fuse(data, {
  keys: ['name', 'yomi']  // 両方を検索対象に
})
```

## ブラウザでの使用

CDNから読み込み可能：

```html
<script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>
```

### リアルタイム検索の実装

```javascript
const fuse = new Fuse(data, { keys: ['title'], threshold: 0.4 })

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim()
  const results = fuse.search(query)
  // 結果を表示
})
```

`input` イベントを使うことで、IME変換中もリアルタイムに検索できる。

## デモ

`demo.html` を開くと、100本の映画データでファジー検索を試せる。

```bash
open demo.html
```

## 参考

- 公式サイト: https://www.fusejs.io/
