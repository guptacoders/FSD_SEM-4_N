var u = require("url")
var fs = require("fs")
var addr = "https://localhost:8000/default.html?year=2025&month=March"
// console.log(u.parse(addr,true).query.year)
var b=u.parse(addr,false).query
fs.writeFileSync("a.txt",b)