const fs = require('fs');
const readStream = fs.createReadStream('./lorem-ipsum.md','utf-8');
console.log('type something ...');
let editText = ''
readStream.on('data', data =>{
    editText +=data;
    console.log(` I read ${data.length - 1} characters of text `);
    console.log(editText);
process.exit();
});