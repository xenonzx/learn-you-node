var http =  require('http');
var url = require('url');
var urls = [process.argv[2],process.argv[3],process.argv[4]];
//var websiteUrl = url.parse(process.argv[2]);
var results = [];
var count = 0;
for (let index = 0; index < urls.length; index++) {
   let content = "";
   http.get(urls[index],function (res){
      res.setEncoding('utf8')
      res.on('data', function(data) {
         content = content+data
      });
      res.on('end',function(){
         results[index] = content;
         count++;
         if (count ==3){
            printResults();
         }
      });
   });
}

function printResults(){
   for (let index = 0; index < urls.length; index++){
      console.log(results[index]);
   }

}
