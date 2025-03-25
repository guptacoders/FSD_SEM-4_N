var http = require("http")
var server =http.createServer(function(req,res){
    res.write("Hello Bro Kaise Ho...")
    // console.log(req)
    res.end("")
}).listen(8000)
// server.listen(8000)