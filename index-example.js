import Fuse from 'fuse.js'

const books = [
  { title: "JavaScript入門", author: "田中太郎" },
  { title: "React実践ガイド", author: "佐藤花子" },
  { title: "Node.js徹底解説", author: "鈴木一郎" },
]

// === インデックスを事前作成 ===
const options = {
  keys: ['title', 'author'],
  threshold: 0.3
}

// createIndex でインデックスを作成
const myIndex = Fuse.createIndex(options.keys, books)

console.log('=== 作成したインデックス ===')
console.log(JSON.stringify(myIndex.toJSON(), null, 2))

// === インデックスを使ってFuseを初期化 ===
// 第3引数にインデックスを渡すと、インデックス作成をスキップできる
const fuse = new Fuse(books, options, myIndex)

console.log('\n=== 検索結果 ===')
console.log(fuse.search('javascript'))


// === 実用例：インデックスをJSONファイルに保存 ===
//
// 保存:
//   fs.writeFileSync('index.json', JSON.stringify(myIndex.toJSON()))
//
// 読み込み:
//   const indexData = JSON.parse(fs.readFileSync('index.json'))
//   const loadedIndex = Fuse.parseIndex(indexData)
//   const fuse = new Fuse(books, options, loadedIndex)
