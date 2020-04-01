var http =  require('http');
var url = require('url');
var websiteUrl = url.parse(process.argv[2]);
http.get(websiteUrl,function (res){
    res.setEncoding('utf8')
    res.on('data', function(data) {
        console.log(data);
     });
});