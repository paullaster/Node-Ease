const fs = require('fs');
const writeStream = fs.createWriteStream('./editednext2Loremipsum.md', 'utf-8');
//writeStream.write('lorem ipsum the dummy text with flavour and test like the hell i saw  a slay queen in Nairobi');
//process.stdout.write(`it's late my buddy!!!!!!!!!!!!!`);
//process.stdout.write(`nigger code for life and code like helllllllllllllll \n`);
//const readStream = fs.createReadStream('./editedLoremipsum.md', 'utf-8');

//readStream.on('data', data =>{
//     writeStream.write(data); 
//     process.exit();
// });
process.stdin.pipe(writeStream)
