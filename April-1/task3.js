var e = require("events")
var ee=new e.EventEmitter()

ee.on("say Name",()=>{console.log("Your Firstname Is Neel")})

ee.on("say Name",()=>{console.log("Your Middlename Is V")})

ee.on("say Name",()=>{console.log("Your Surname Is Patel")})

ee.emit("say Name")