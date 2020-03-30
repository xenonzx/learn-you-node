var fs = require('fs');
var separator ='.';
module.exports = function(path, fileExtension, callbackk){
    var result = [];
    var err =  null;
    fs.readdir(path,function callback(err, files){
        if (err){
            return callbackk(err,null);
        }
        for (const i in files) {
            var chuncks = files[i].split(separator);
            if (chuncks.length==2 &&chuncks[1] == fileExtension ){
                result.push(files[i]);
            }
        }
        callbackk(err,result); 
    });
    
}
