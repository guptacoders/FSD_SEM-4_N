const http = require('http');
const fs = require('fs');
const u = require("url")

var server = http.createServer((req,res)=>{
    var p=u.parse(req.url,true)
    var data = fs.readFileSync("."+p.pathname)
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(data)
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});