var e = require("events")
var ee=new e.EventEmitter()

ee.on("start",(start,end)=>{
    console.log(`started from ${start} to ${end}`)
})
ee.emit("start",1,100)