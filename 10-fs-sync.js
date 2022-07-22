const { readFileSync, writeFileSync } = require('fs')
console.log('start'); //can be used in placements to know that all the files are running fine

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second);

writeFileSync(
    './content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' }
)
console.log('done with this task');
console.log('starting the next one');