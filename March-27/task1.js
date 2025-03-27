// create http webpage on which home page display welcome to home page student page display welcome to student page and any other page display page not found message
var h = require("http")
var server = h.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("Welcome to home page")
        res.end()
    }
    else if(req.url=="/student")
    {
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("Welcome to student page")
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write('<h1 style="color:red"> Page Not found </h1>'); //inline css
        res.end();
    }
})

server.listen(8000)