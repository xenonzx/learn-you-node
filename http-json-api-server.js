var http = require('http');
var url = require('url');
const querystring = require('querystring');
var port = process.argv[2];
var server = http.createServer( function (req, res){
    let query = url.parse(req.url).query;
    let path = url.parse(req.url).pathname;
    var iso = querystring.parse(query).iso;
    var date = new Date(Date.parse(iso));
    var result= {};
    if (path =="/api/unixtime"){
        result.unixtime = date.getTime();
    } else if (path == "/api/parsetime"){
        result.hour = date.getHours();
        result.minute = date.getMinutes();
        result.second = date.getSeconds();
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.write(JSON.stringify((result)));
    res.end();
});
server.listen(port);