import Fuse from 'fuse.js'
import fs from 'fs'

// 保存したインデックスを読み込み
const { options, data, index } = JSON.parse(fs.readFileSync('search-index.json', 'utf-8'))

// インデックスを復元
const loadedIndex = Fuse.parseIndex(index)

// 既存インデックスでFuseを初期化（高速）
const fuse = new Fuse(data, options, loadedIndex)

// 検索
const query = process.argv[2] || 'アニメ'
console.log(`検索: "${query}"`)
console.log('---')

const results = fuse.search(query)
results.forEach(r => {
  console.log(`${r.item.title} (${r.item.year}) - ${r.item.director}`)
})

if (results.length === 0) {
  console.log('該当なし')
}
