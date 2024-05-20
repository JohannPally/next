const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: true
    }
});
  
io.listen(4000);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on("message", function(msg) {
        console.log("message: "  +  msg);

        socket.broadcast.emit("received", { message: msg  });
    });
});