var http=require("http");
var server=http.createServer(function(req,res)
{ if(req.url=="/")
{
const data={ "name":"ABC", "age":30 }
res.writeHead(200,{"content-type":"application/json"});
res.write(JSON.stringify(data)); 
res.end();
}
}
)
server.listen(700);
