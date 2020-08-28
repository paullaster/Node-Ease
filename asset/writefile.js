const fs = require('fs');

const md = `
#this is a new file

we  can write to a new file with fs.writeFile

*fs.readdir
*fs.readFile
*fs.writeFile

`;
fs.writeFile('../asset/notes.md', md.trim(),err =>{
    if(err){
        throw err
    }
})