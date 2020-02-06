var app = require('express')();
var http = require('http').Server(app);
require('dotenv').config()
const WebSocket = require('ws');

const ws = new WebSocket(process.env.SOCKET_EXPORT);

ws.on('open', function open() {
    ws.send("C:\\Users\\Thinkpad\\Pictures\\sample_image\\1708298611.jpg|Maemunah|9878655456")
});

http.listen(process.env.APP_LISTEN, () => {
    console.log('listening on *: ' + process.env.APP_LISTEN);
});