const events = require('events');
const emitter = new events.EventEmitter();
 emitter.on('customEvent',(message,user) =>{
    console.log(`${message} : ${user}`);
})
// emitter.emit('customEvent', 'hello coder!', 'programmer');
// emitter.emit('customeEvent','that is cool yah yah', 'user');

process.stdin.on('data', (data) =>{
    const input = data.toString().trim();
    if(input === 'exit'){
        emitter.emit('customEvent','goodbye', 'process');
        process.exit();
    }
    emitter.emit('customEvent', input, 'terminal')
});