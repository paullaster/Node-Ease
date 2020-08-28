const fs = require('fs');

//const text = fs.readFileSync('../request.js', 'UTF-8'); //synscronous
fs.readFile('../request.js','utf-8', (err,text) =>{
    if(err){
        throw err
    }
    console.log('file content read');
    console.log(text);
})

//console.log(text);