var http =  require('http');
var url = require('url');
var websiteUrl = url.parse(process.argv[2]);
//console.log(websiteUrl);
http.get(websiteUrl,function (res){
    //console.log("get")
    //console.log(" status code"+ res.statusCode)
    res.setEncoding('utf8')
    res.on('data', function(data) {
        //console.log("on data")
        console.log(data);
        
     });
});