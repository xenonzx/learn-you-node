var http =  require('http');
var url = require('url');
var websiteUrl = url.parse(process.argv[2]);
var count = 0;
var content = "";
http.get(websiteUrl,function (res){
    res.setEncoding('utf8')
    res.on('data', function(data) {
        content = content+data
     });
     res.on('end',function(){
        console.log(content.length);
        console.log(content);
     })
});