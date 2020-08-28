const fs  = require('fs');
console.log(`start`)
//const files = fs.readdirSync('../asset'); //read directory sysnc is used to read the contect of directory syncronously
fs.readdir('../asset', (err,files) =>{ //assynscronously
    
    if(err){
        throw err;
    }
    else{
        console.log(`complete`);
console.log(files);
0   }
});
// console.log(`complete`);
// console.log(files);
