import { atualizaText } from "./documento.js";

const socket = io();
function emitText(texto) {
  socket.emit("texto_editor", texto);
}
socket.on("text_area_client", (texto) => {
  atualizaText(texto);
});
export { emitText };
