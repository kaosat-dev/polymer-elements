var express = require('express'); 

var app = express()
  , http = require('http')
  , server = http.createServer(app)


app.configure(function() {
   app.use(express.static(__dirname));
});


var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
   console.log("Connected");

	socket.on('message', function (message) {
	  console.log("Server recieved : " + JSON.stringify(message));
	});

});

server.listen(8090);
console.log('Server started on port %d', server.address().port);


