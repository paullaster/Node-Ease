//process.stdin;
//process.stdout;
//process.stdout.write('hello');
//process.stdout.write('world \n \n\n\n');
const questions = [
    'what is your name?',
    'what you rather be doing?',
    'what is your preferred progrmming language?'
];
const  ask =(i=0) =>{
process.stdout.write(`\n\n\n ${questions[i]}`);
process.stdout.write(`\t>`);
}

ask( );
 const answers = [];
process.stdin.on('data', (data) =>{
    answers.push(data.toString().trim());
if(answers.length < questions.length){
    ask(answers.length);
}
else{
    process.exit();
}
});
process.on('exit', () =>{
    const [name, activity, language] = answers;

    console.log(`
    
    Thank you for your answers.!

    Go ${activity} ${name} you wil code ${language} later!!!
    `);
});