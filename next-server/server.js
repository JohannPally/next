const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: true
    }
});
  
const  Message  = require("./models/Message");
const  database  = require("./db");

io.listen(4000);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on("message", function(msg) {
        console.log("message: "  +  msg);

        database.then(db  =>  {
            console.log("connected correctly to the server");
        
            let  chatMessage  =  new Message({ message: msg, sender: "Anonymous"});
            chatMessage.save();
        });

        socket.broadcast.emit("received", { message: msg  });
    });
});