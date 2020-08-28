const readLine = require('readline');

const rl = readLine.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question(`\n How would you like Node? `, (answer) =>{
    console.log(`Your answer: ${answer}`);
})
