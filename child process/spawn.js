//spawn is meant to run synchronous process... this are process that might be accessing modifying  same data file at the same time
const cp = require('child_process');

const questionApp = cp.spawn('node', ["questions.js"]);
questionApp.stdout.on('data', (data) =>{
    console.log(`from the question App: ${data}`);

});
questionApp.on('close',() =>{
    console.log(`question app exited`);
})
