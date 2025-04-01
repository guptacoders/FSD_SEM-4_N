const fs = require('fs');
const e = require('events');
const ee = new e.EventEmitter();

ee.on('writeFile', () => {
  fs.writeFile('new.txt', 'this is data', () => {
    console.log('Data written to file');
    ee.emit('appendFile');
  });
});

ee.on('appendFile', () => {
  fs.appendFile('new.txt', '\nthis is data', () => {
    console.log('Data appended to file');
    ee.emit('readFile');
  });
});

ee.on('readFile', () => {
  fs.readFile('new.txt', 'utf8', (err, data) => {
    console.log(data);
    console.log('Thanks for using the program');
  });
});
// Start the process
ee.emit('writeFile');