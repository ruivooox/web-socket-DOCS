import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.port || 3000;

const active_way = url.fileURLToPath(import.meta.url);
const public_direct = path.join(active_way, "../..", "public");
app.use(express.static(public_direct));

const server_http = http.createServer(app);

server_http.listen(port, () =>
  console.log(`Servidor escutando na porta ${port}`)
);

const io = new Server(server_http);

export default io;
