const fs = require('fs');

//fs.renameSync('./reafile.js', './readfile.js'); //sysncronous
fs.rename('./append.js', './appended.js', err =>{
if(err){
    throw err
}
});
// setTimeout(()=>{
//     fs.unlinkSync('./appended.js')
// },5000)
