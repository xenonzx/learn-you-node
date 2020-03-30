var fs = require('fs');
var path = process.argv[2];
var fileExtension = process.argv[3];
var separator ='.';
fs.readdir(path,function callback(err, files){
    for (const i in files) {
        var chuncks = files[i].split(separator);
        if (chuncks.length==2 &&chuncks[1] == fileExtension ){
            console.log(files[i]);
        }
    }
});
