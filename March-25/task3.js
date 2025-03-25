// write a node js script to create a file named temp.txt now check if available physical memory of system is grater then 1GB then print msg suffucuent memory in to the file else print the msg Low memory in the file
var fs = require("fs")
var os = require("os")

var data = os.freemem()/1024/1024/1024
console.log(data)

if(data>1)
{
    fs.writeFileSync("temp.txt","Sufficent Memory")
}
else{
    fs.writeFileSync("temp.txt","Low Memory")
}
