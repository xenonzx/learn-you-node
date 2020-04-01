var http = require('http');
var server = http.createServer(function(req,res){
    if(req.method=="POST"){
        //res.setEncoding('utf8');
        req.on('data' , function(chunck){
            res.write(chunck.toString().toUpperCase());
            
        });
        req.on('end', function(){
            res.end();
        })
    }
});

server.listen(process.argv[2]);