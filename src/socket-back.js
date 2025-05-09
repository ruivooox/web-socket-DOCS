import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Cliente conectado!", socket.id);

  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("text_area_client", texto);
  });
});
