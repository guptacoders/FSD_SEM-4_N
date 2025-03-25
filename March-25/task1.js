// write a node js script to take 5 single digit elements sepreted by white space in txt file read the content from the file and print elements on console in ascending order 

var fs = require("fs")
fs.writeFileSync("task1.txt","8 9 5 4 3")
var data = fs.readFileSync("task1.txt","utf-8")
console.log(data.split(" ").sort())

