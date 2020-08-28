const fs = require('fs');

if(fs.existsSync('codemaster')){
    console.log('directory already exist');

}
else{
fs.mkdir('codemaster', err=>{
    if(err){

        throw err;
    }
    else{
        console.log('Directory created');
    }
});
}
