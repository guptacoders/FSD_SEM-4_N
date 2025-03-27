// create http webpage on which home page display welcome to login page in blue color and 32px font size login page display one html file having form with details of user name password submit and reset buttons. gallary page display and image hello.jpg and any other page display page not found write all neccery file and img alredy exist in a same folder
var u = require("url")
var h = require("http")
var fs = require("fs");
var server = h.createServer((req,res)=> {
    if(req.url==="/")
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write('<h1 style="color:blue; font-size:32px">Welcome to Login page</h1>')
        res.end()
    }
    else if(req.url==="/login")
    {
        var data = fs.readFileSync("./index.html")
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
        res.end()
    }
    else if(req.url==="/gallery")
    {
        var data1 = fs.readFileSync("./hello.jpg")
        res.writeHead(200,{"content-type":"image/jpg"})
        res.end(data1)
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.write("Page Not Found")
        res.end()
    }
})
server.listen(3000,()=>{
    console.log("server is running on port 3000")
    })