import FileSearch from "./fsdemo4eventemitter.js"

const fileSearch = new FileSearch(/dddk/g)
// /g -->global search + case_sensitive search.

fileSearch.addFile('mydata/a.txt').addFile('mydata/b.txt')
.addFile('mydata/c.txt')


// We are subscribing to the events (start , fileread , found).
fileSearch.on('start',() => console.log('Started'))
fileSearch.on('fileread',(data) => console.log(data))
fileSearch.on('found',(data,match) => console.log(data,match)).search()

// Order doesn't matter , as callbacks will be called based on triggering of events.