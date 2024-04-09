import fs from 'fs'

const readFile = (fileName) => {
    return fs.readFileSync(fileName,'utf-8')
    // utf-8 --> reading the data as unicode characters.
}

console.log(readFile('data'))
console.log("After read file.")