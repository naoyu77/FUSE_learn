import Fuse from 'fuse.js'
import fs from 'fs'
import { movies, fuseOptions } from './movies-data.js'

// インデックスを作成
console.log(`${movies.length}本の映画データでインデックスを作成中...`)
const index = Fuse.createIndex(fuseOptions.keys, movies)

// データとインデックスを保存
const output = {
  options: fuseOptions,
  data: movies,
  index: index.toJSON()
}

fs.writeFileSync('search-index.json', JSON.stringify(output))
const stats = fs.statSync('search-index.json')
console.log(`search-index.json に保存しました (${(stats.size / 1024).toFixed(1)} KB)`)
