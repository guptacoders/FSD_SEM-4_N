// create a function which executes a when connect event is fired and print msg connection succesfull after connect fired another msg shold be printed as data recived succesfully from data recived event 

var e = require("events")
var ee=new e.EventEmitter()

var connectHandler = function connect(){
    console.log("Connection Succesfull")
    ee.emit("data-Recived")
}

ee.on("connection",connectHandler)

ee.on("data-Recived",()=>{console.log("Data received Succesfully")})

ee.emit("connection")

console.log("Thanks")