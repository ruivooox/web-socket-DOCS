const socket = io();

const text_area = document.getElementById("editor-texto");

text_area.addEventListener("keyup", () => {
  socket.emit("texto_editor", text_area.value);
});
