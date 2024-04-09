import fs from 'fs/promises';

const readFile = async (filename) => {
   return await fs.readFile(filename,'utf-8')
}

(async ()=> {
    const data = await readFile('data')
    console.log(data.split('\n').map(Number).filter(i => i % 2 === 0))
})()

console.log("After File Read")

