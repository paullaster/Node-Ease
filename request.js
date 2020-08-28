const readLine = require('readline');
const rl  = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


const questions = [
'what is your name?',
'where do you live?',
'what are u going to use Node js for?'
];
const collectAnswers = (questions, done) =>{
    let answers = [];
    const [firstQuestion] =questions;
 const questionAnswered = (answer) =>{
     answers.push(answer);
     if(answers.length < questions.length){
         rl.question(questions[answers.length], questionAnswered);
     }
     else{
         done(answers);
     }
 }
    rl.question(firstQuestion,questionAnswered);
};


collectAnswers(questions, (answers) =>{
    console.log('Thank you for your answers');
    console.log(answers);
    process.exit();
})