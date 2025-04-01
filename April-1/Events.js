var e= require("events")
var ee  =  new e.EventEmitter()

ee.on("say Name",()=>{console.log("Hello Neel Bhaii")})

ee.emit("say Name")