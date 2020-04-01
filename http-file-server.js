var http = require('http');
const fs = require('fs');
let port = process.argv[2];
let path = process.argv[3];
var server = http.createServer(function(req,res){
    
    fs.readFile(path,function(err,data){
        if (err){
            console.log(err);
        }
        res.write(data);
        res.end();
    });
});
server.listen(port);