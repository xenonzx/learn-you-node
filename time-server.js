var net = require('net');
var server = net.createServer(function listener(socket){
    var dateFormat = require('dateformat');
    var now = new Date();
    let time = dateFormat(now,"yyyy-mm-dd HH:MM");
    socket.write(time+"\n");
    
    console.log(time);
    
    socket.end();
    //server.close();
 
});
server.listen(process.argv[2]);