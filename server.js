const { Server } = require("socket.io");

const io = new Server(9071);

io.on("connection", (socket) => {
    socket.emit("start-on", "connection is ok");
    console.log('socket.id: ', socket.id);
    socket.on("status-on", (args) => {
        console.log(args);
        socket.emit("status-out", {
            mess: "request-response is ok",
            id: socket.id,
            request: args,
        });
    });
})