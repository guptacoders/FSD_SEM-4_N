var u = require("url")
var addr = "https://localhost:8000/default.html?Name=neel&initial=PKP#class"
var data = u.parse(addr,false)
console.log(data)