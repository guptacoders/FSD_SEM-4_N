var http = require("http")
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Hello Neel Patel<h1>")
    res.end()
}).listen(8002)