express = require('express');
socketio = require('socket.io')
https = require('https');
http = require('http');
var port = 1337

app = express();

var server = http.createServer(app);
var io = socketio(server);

app.use(express.static('www'));


server.listen( port, function () {

console.log('lisenign on port '+port+' Development')
//  // for (var k in process){console.log(k +"  :  "+process[k])}
})



