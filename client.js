const express = require("express");
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);

// const { Server } = require("socket.io");
// const io = new Server(httpServer);
//   // ...
// io.on("connection", (socket) => {
// });

const { io } = require('socket.io-client');
const socket = io("ws://localhost:9071");

socket.on('start-on', (data)=>console.log("from start-on", data));

socket.on("status-out", (data)=>console.log("start out!", data))

app.use('/', async (req, res) => {
    socket.emit("status-on", "action-for-test");
    res.status(200).json({
        status: 'connected', 
        socket_id: socket.id
    });
})

httpServer.listen(9061, ()=>console.log('client running'));