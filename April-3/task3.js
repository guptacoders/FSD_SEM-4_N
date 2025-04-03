const os = require('os');
const e = require('events')
var ee = new e.EventEmitter()

const TOTAL_MEMORY = 6 * 1024 * 1024 * 1024;
const THRESHOLD = 0.5 * TOTAL_MEMORY;

ee.on('threshold', (usedMemory) => {
    console.log(`Memory threshold exceeded! Used memory: ${(usedMemory / (1024 * 1024)).toFixed(2)} MB`);
});

setInterval(() => {
    const freeMemory = os.freemem();
    const usedMemory = TOTAL_MEMORY - freeMemory;

    if (usedMemory > THRESHOLD) {
        ee.emit('threshold', usedMemory);
    }
}, 1000);