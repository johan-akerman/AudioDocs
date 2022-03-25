const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  client.emit("connected", client.id);
  client.broadcast.emit("newConnection", client.id);

  client.on("move", (arg) => {
    client.broadcast.emit("moved", arg);
  });

  client.on("typed", (arg) => {
    client.broadcast.emit("wrote", arg);
  });
});
