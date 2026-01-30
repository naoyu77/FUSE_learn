import Fuse from 'fuse.js'

// サンプルデータ（本のリスト）
const books = [
  { title: "JavaScript入門", author: "田中太郎" },
  { title: "React実践ガイド", author: "佐藤花子" },
  { title: "Node.js徹底解説", author: "鈴木一郎" },
  { title: "TypeScript基礎", author: "高橋次郎" },
  { title: "Vue.js入門", author: "山田三郎" }
]

// Fuseインスタンスを作成
const fuse = new Fuse(books, {
  keys: ['title', 'author'],  // 検索対象のフィールド
  threshold: 0.3              // マッチの厳しさ（0=完全一致、1=何でもマッチ）
})

// 検索実行（タイポや部分一致でも見つかる）
console.log('=== "Javascrpt" で検索（タイポあり） ===')
console.log(fuse.search('Javascrpt'))

console.log('\n=== "入門" で検索 ===')
console.log(fuse.search('入門'))

console.log('\n=== "たなか" で検索 ===')
console.log(fuse.search('たなか'))
