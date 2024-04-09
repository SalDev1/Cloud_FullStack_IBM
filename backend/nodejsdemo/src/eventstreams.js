import {createReadStream , createWriteStream} from 'fs'

import {createGzip} from 'zlib'

createReadStream('mydata/a.txt')
.pipe(createGzip())
.pipe(createWriteStream('a.zip'))
.on('finish',() => console.log('file compressed'))