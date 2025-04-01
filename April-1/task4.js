// write a nodejs script to create two listner for a common event call then respective caal backs print no of events associcated with and emitted remove one of the listner and print no of remaining listner 

var e = require("events")
var ee=new e.EventEmitter()

var listner1 = function listner1(){
    console.log("Listner1 Executed")
}


var listner2 = function listner1(){
    console.log("Listner2 Executed")
}

ee.on("conn",listner1)
ee.on("conn",listner2)

var count  = ee.listenerCount("conn")
console.log(count+"for conn event")
ee.emit("conn")
ee.removeListener("conn",listner1)
count=ee.listenerCount("conn")
console.log(count+"for conn event after remove")
ee.emit("conn")