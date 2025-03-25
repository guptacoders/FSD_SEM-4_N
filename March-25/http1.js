var http = require("http")
http.createServer(function(req,res){
    res.write("Good Morning")
    res.end()
    res.write("Good Bye")
}).listen(8002)