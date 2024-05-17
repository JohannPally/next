const express = require('express');
const cors = require('cors')({
    origin: 'http://localhost:3000'
});
const http = require('http');

const app = express();
app.use(cors());

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
    res.send('Request Received.');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});