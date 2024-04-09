import fs from 'fs';

const readFile = (filename , cb) => {
    fs.readFile(filename,(err,data)=> {
        // data --> reading the buffers byte by byte.
        if(err){
            return cb(err)
        }
        // const lines = data.toString().trim()
        const lines = data.toString()
        // console.log(lines)
        cb(null,lines)
    })
}
readFile('data',(err,data)=> {
    if(err) {
        console.error(err);
    }
    console.log(data.split('\n').map(Number).filter(i => i % 2 === 0))
})
console.log("After File Read")