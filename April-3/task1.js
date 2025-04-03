// write a node js script to handle events as are below 
// 1) check the radius is negeative or not if negative then display msg radius must be positive else calculate the perimiter of circle 
// 2) check side is negative or not if negative then display msg side must be positive else calculate the perimeter of square

var e = require("events")
var ee = new  e.EventEmitter()


ee.on("circle",(radius)=>{
    if(radius<0)
    {
        console.log("Radius Must be Positive Only")
    }
    else{
        var ans = 2*3.14 * radius * radius
        console.log(ans)
    }
}
)

ee.on("square",(side)=>{
    if(side<0)
    {
        console.log("Side Value Must be Positive Only")
    }
    else{
        var ans= side * side
        console.log(ans)
    }
})

ee.emit("circle",-5)
ee.emit("square",5)