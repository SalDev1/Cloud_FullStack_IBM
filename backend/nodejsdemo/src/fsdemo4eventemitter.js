import {EventEmitter} from 'events'

import { readFile } from 'fs'

// FileSearch is an eventEmitter (is-a relationship)
class FileSearch extends EventEmitter {
    constructor(pattern) {
        super()
        this.pattern = pattern
        this.files = []   // Initializing the files into the empty array.
    }

    addFile(file) {
        this.files.push(file)
        return this   // return this --> Allows you to chain functions.
        // You don't need to call each function separately , see the below example for 
        // better understanding.
    }
    search() {
        // Currently , start , error , fileread , found --> We are publishing the events using .emit function.
        // Event-Emitter are case-sensitive in nature.
        this.files.forEach((file) => { 
            this.emit('start')  // Before the read operation , we will subscribe start event.
            readFile(file,'utf-8',(error,data) => {
                if(error) {
                    return this.emit('error',err)  // emit an error event , if we get an error.
                }
                this.emit('fileread',file)  // 
                const match = data.match(this.pattern)
                if(match) {
                    // we will emit the found event , if there is a match.
                    match.forEach(elem => this.emit('found',file,elem))
                }
            })
        })
        return this
    }
}
export default FileSearch;

/*
   const serarch = new FileSearch()
   search.addFile()
   search.search()

   new FileSearch().addFile().search() --> Function chaining.
*/