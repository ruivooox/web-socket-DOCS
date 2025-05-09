import { emitText } from "./socket-front.js";

const text_area = document.getElementById("editor-texto");

text_area.addEventListener("keyup", () => {
  emitText(text_area.value);
});
socket.on("text_area_client", (texto) => {
  text_area.value = texto;
});
function atualizaText(texto) {
  text_area.value = texto;
}
export { atualizaText };
